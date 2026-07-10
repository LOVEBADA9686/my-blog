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

async function init() {
  const slug = getSlugFromUrl();
  if (!slug) {
    renderError("글 주소가 올바르지 않습니다.");
    return;
  }

  const manifestRes = await fetch("posts/manifest.json");
  const posts = await manifestRes.json();
  const entry = posts.find((post) => post.slug === slug);

  if (!entry) {
    renderError("해당 글을 찾을 수 없습니다.");
    return;
  }

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
  } catch (err) {
    renderError(err.message);
  }
}

document.addEventListener("DOMContentLoaded", init);
