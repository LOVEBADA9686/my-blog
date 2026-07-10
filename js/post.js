// Single post page: reads ?slug= from the URL, looks the slug up in
// posts/manifest.json to find its filename, then fetches and renders that
// markdown file with render.js.

function getSlugFromUrl() {
  return new URLSearchParams(window.location.search).get("slug");
}

function renderError(message) {
  document.getElementById("post-title").textContent = "글을 찾을 수 없습니다";
  document.getElementById("post-meta").textContent = "";
  document.getElementById("post-tags").innerHTML = "";
  document.getElementById("post-content").innerHTML = `<p>${message}</p>`;
}

let currentEntry = null;

/** Shows the password modal (masked input) and resolves with the entered
 *  string, or null if the user cancels. */
function askPasswordViaModal() {
  const overlay = document.getElementById("password-modal");
  const form = document.getElementById("password-modal-form");
  const input = document.getElementById("password-modal-input");
  const cancelBtn = document.getElementById("password-modal-cancel");

  return new Promise((resolve) => {
    function cleanup(result) {
      overlay.hidden = true;
      form.removeEventListener("submit", onSubmit);
      cancelBtn.removeEventListener("click", onCancel);
      resolve(result);
    }
    function onSubmit(e) {
      e.preventDefault();
      cleanup(input.value);
    }
    function onCancel() {
      cleanup(null);
    }

    input.value = "";
    overlay.hidden = false;
    form.addEventListener("submit", onSubmit);
    cancelBtn.addEventListener("click", onCancel);
    input.focus();
  });
}

async function verifyPassword(entry) {
  if (!entry.passwordHash) {
    alert("이 글은 비밀번호가 설정되어 있지 않아 브라우저에서 수정·삭제할 수 없습니다.");
    return false;
  }
  const input = await askPasswordViaModal();
  if (input === null) return false;
  const hash = await sha256Hex(input);
  if (hash !== entry.passwordHash) {
    alert("비밀번호가 틀렸습니다.");
    return false;
  }
  return true;
}

async function handleEditClick() {
  if (!currentEntry) return;
  const ok = await verifyPassword(currentEntry);
  if (!ok) return;
  location.href = `write.html?slug=${encodeURIComponent(currentEntry.slug)}`;
}

async function handleDeleteClick() {
  if (!currentEntry) return;
  const ok = await verifyPassword(currentEntry);
  if (!ok) return;
  if (!confirm("정말 이 글을 삭제할까요? 되돌릴 수 없습니다.")) return;

  const statusEl = document.getElementById("action-status");

  if (!hasGhToken()) {
    statusEl.textContent =
      "삭제하려면 GitHub 토큰이 필요합니다. '새 글 작성' 페이지에서 먼저 토큰을 저장해주세요.";
    return;
  }

  statusEl.textContent = "삭제하는 중...";
  try {
    const postFile = await ghGetFile(`posts/${currentEntry.file}`);
    if (postFile) {
      await ghDeleteFile(`posts/${currentEntry.file}`, postFile.sha, `Delete post: ${currentEntry.title}`);
    }

    const manifestFile = await ghGetFile("posts/manifest.json");
    const posts = JSON.parse(manifestFile.content).filter((p) => p.slug !== currentEntry.slug);
    await ghPutFile(
      "posts/manifest.json",
      JSON.stringify(posts, null, 2) + "\n",
      `Delete post: ${currentEntry.title}`,
      manifestFile.sha
    );

    statusEl.textContent = "삭제 완료! 목록으로 이동합니다 (사이트에 반영되기까지 최대 1분 정도 걸릴 수 있어요)...";
    setTimeout(() => {
      location.href = "index.html";
    }, 1500);
  } catch (err) {
    statusEl.textContent = `삭제 실패: ${err.message}`;
  }
}

async function init() {
  const slug = getSlugFromUrl();
  if (!slug) {
    renderError("글 주소가 올바르지 않습니다.");
    return;
  }

  const manifestRes = await fetch("posts/manifest.json", { cache: "no-store" });
  const posts = await manifestRes.json();
  const entry = posts.find((post) => post.slug === slug);

  if (!entry) {
    renderError("해당 글을 찾을 수 없습니다.");
    return;
  }

  currentEntry = entry;

  try {
    const { meta, html } = await loadPost(entry.file);

    document.title = `${meta.title || entry.title} - my-blog`;
    document.getElementById("post-title").textContent = meta.title || entry.title;
    document.getElementById("post-meta").textContent = formatDate(
      meta.date || entry.date
    );

    const tags = meta.tags || entry.tags || [];
    document.getElementById("post-tags").innerHTML = tags
      .map((tag) => `<span class="tag-badge">${tag}</span>`)
      .join("");

    const contentEl = document.getElementById("post-content");
    contentEl.innerHTML = html;
    highlightCodeBlocks(contentEl);

    document.getElementById("edit-btn").addEventListener("click", handleEditClick);
    document.getElementById("delete-btn").addEventListener("click", handleDeleteClick);
  } catch (err) {
    renderError(err.message);
  }
}

document.addEventListener("DOMContentLoaded", init);
