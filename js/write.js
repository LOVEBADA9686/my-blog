// New/edit post form. Writes directly to GitHub via the Contents API
// (js/github-api.js) since this static site has no backend of its own.

const state = {
  editSlug: null,
  editEntry: null,
  editFileSha: null,
};

function slugifyNow() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `post-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(
    now.getHours()
  )}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function buildMarkdown({ title, date, tag, excerpt, body }) {
  return `---\ntitle: ${title}\ndate: ${date}\ntags: [${tag}]\nexcerpt: ${excerpt}\n---\n\n${body}\n`;
}

function makeExcerpt(body) {
  const plain = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_`>\-\[\]!]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > 90 ? plain.slice(0, 90) + "..." : plain;
}

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function refreshTokenStatus() {
  const statusEl = document.getElementById("token-status");
  if (hasGhToken()) {
    statusEl.textContent = "✅ 토큰이 이 브라우저에 저장되어 있어요.";
  } else {
    statusEl.textContent = "⚠️ 아직 토큰이 없어요. 아래에 붙여넣고 저장해주세요.";
  }
}

function initTokenSection() {
  refreshTokenStatus();
  document.getElementById("token-save-btn").addEventListener("click", () => {
    const value = document.getElementById("token-input").value.trim();
    if (!value) return;
    setGhToken(value);
    document.getElementById("token-input").value = "";
    refreshTokenStatus();
  });
}

async function loadEditTarget(slug) {
  const manifestRes = await fetch("posts/manifest.json", { cache: "no-store" });
  const posts = await manifestRes.json();
  const entry = posts.find((p) => p.slug === slug);
  if (!entry) throw new Error("수정할 글을 찾을 수 없습니다.");

  const file = await ghGetFile(`posts/${entry.file}`);
  if (!file) throw new Error("GitHub에서 원본 파일을 찾을 수 없습니다.");

  const { meta, body } = parseFrontMatter(file.content);

  document.getElementById("title-input").value = meta.title || entry.title;
  const tag = (meta.tags && meta.tags[0]) || (entry.tags && entry.tags[0]) || "소개";
  document.getElementById("tag-select").value = tag;
  document.getElementById("body-input").value = body;
  document.getElementById("password-fields").hidden = true;

  state.editSlug = slug;
  state.editEntry = entry;
  state.editFileSha = file.sha;

  document.getElementById("form-title").textContent = "글 수정";
  document.getElementById("submit-btn").textContent = "수정 내용 저장";
}

async function initEditModeIfNeeded() {
  const slug = new URLSearchParams(location.search).get("slug");
  if (!slug) return;

  const statusEl = document.getElementById("form-status");
  try {
    if (!hasGhToken()) {
      statusEl.textContent = "먼저 위에서 GitHub 토큰을 저장해주세요. 저장 후 이 페이지를 새로고침하세요.";
      return;
    }
    await loadEditTarget(slug);
  } catch (err) {
    statusEl.textContent = `불러오기 실패: ${err.message}`;
  }
}

async function handleSubmit(e) {
  e.preventDefault();
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");
  statusEl.textContent = "";

  if (!hasGhToken()) {
    statusEl.textContent = "먼저 GitHub 토큰을 입력하고 저장해주세요.";
    return;
  }

  const title = document.getElementById("title-input").value.trim();
  const tag = document.getElementById("tag-select").value;
  const body = document.getElementById("body-input").value.trim();
  const password = document.getElementById("password-input").value;
  const passwordConfirm = document.getElementById("password-confirm-input").value;

  if (!title || !body) {
    statusEl.textContent = "제목과 본문을 입력해주세요.";
    return;
  }

  const isEdit = !!state.editSlug;

  if (!isEdit) {
    if (!password || password.length < 4) {
      statusEl.textContent = "비밀번호를 4자 이상 입력해주세요.";
      return;
    }
    if (password !== passwordConfirm) {
      statusEl.textContent = "비밀번호가 서로 일치하지 않습니다.";
      return;
    }
  }

  submitBtn.disabled = true;
  statusEl.textContent = "저장하는 중... (몇 초 걸릴 수 있어요)";

  try {
    const excerpt = makeExcerpt(body);

    if (isEdit) {
      const entry = state.editEntry;
      const markdown = buildMarkdown({ title, date: entry.date, tag, excerpt, body });
      const newFileResult = await ghPutFile(
        `posts/${entry.file}`,
        markdown,
        `Update post: ${title}`,
        state.editFileSha
      );
      state.editFileSha = newFileResult.content.sha;

      const manifestFile = await ghGetFile("posts/manifest.json");
      const posts = JSON.parse(manifestFile.content);
      const idx = posts.findIndex((p) => p.slug === entry.slug);
      if (idx === -1) throw new Error("manifest.json에서 글을 찾지 못했습니다.");
      posts[idx] = { ...posts[idx], title, tags: [tag], excerpt };
      await ghPutFile(
        "posts/manifest.json",
        JSON.stringify(posts, null, 2) + "\n",
        `Update manifest: ${title}`,
        manifestFile.sha
      );

      statusEl.textContent = "수정 완료! 글로 이동합니다 (사이트에 반영되기까지 최대 1분 정도 걸릴 수 있어요)...";
      setTimeout(() => {
        location.href = `post.html?slug=${encodeURIComponent(entry.slug)}`;
      }, 1500);
    } else {
      const slug = slugifyNow();
      const file = `${slug}.md`;
      const passwordHash = await sha256Hex(password);
      const date = todayDate();
      const markdown = buildMarkdown({ title, date, tag, excerpt, body });

      await ghPutFile(`posts/${file}`, markdown, `Add post: ${title}`);

      const manifestFile = await ghGetFile("posts/manifest.json");
      const posts = JSON.parse(manifestFile.content);
      posts.push({ slug, file, title, date, tags: [tag], excerpt, passwordHash });
      await ghPutFile(
        "posts/manifest.json",
        JSON.stringify(posts, null, 2) + "\n",
        `Add post: ${title}`,
        manifestFile.sha
      );

      statusEl.textContent = "게시 완료! 글로 이동합니다 (사이트에 반영되기까지 최대 1분 정도 걸릴 수 있어요)...";
      setTimeout(() => {
        location.href = `post.html?slug=${encodeURIComponent(slug)}`;
      }, 1500);
    }
  } catch (err) {
    statusEl.textContent = `오류: ${err.message}`;
  } finally {
    submitBtn.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTokenSection();
  document.getElementById("post-form").addEventListener("submit", handleSubmit);
  initEditModeIfNeeded();
});
