// Index page: loads posts/manifest.json and renders the searchable,
// tag-filterable post list. Individual .md files are not fetched here —
// the manifest carries enough metadata (title/date/tags/excerpt) on its own.

const state = {
  posts: [],
  query: "",
  tag: "",
};

function renderTagFilters(tags) {
  const el = document.getElementById("tag-filters");
  el.innerHTML = "";

  const allPill = document.createElement("button");
  allPill.type = "button";
  allPill.className = "tag-pill" + (state.tag === "" ? " active" : "");
  allPill.textContent = "전체";
  allPill.addEventListener("click", () => {
    state.tag = "";
    render();
  });
  el.appendChild(allPill);

  tags.forEach((tag) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "tag-pill" + (state.tag === tag ? " active" : "");
    pill.textContent = tag;
    pill.addEventListener("click", () => {
      state.tag = state.tag === tag ? "" : tag;
      render();
    });
    el.appendChild(pill);
  });
}

function postCardHtml(post) {
  const tags = (post.tags || [])
    .map((tag) => `<span class="tag-badge">${tag}</span>`)
    .join("");

  return `
    <li class="post-card">
      <a class="post-card-link" href="post.html?slug=${encodeURIComponent(post.slug)}">
        <h2 class="post-card-title">${post.title}</h2>
        <div class="post-meta">${formatDate(post.date)}</div>
        <p class="post-excerpt">${post.excerpt || ""}</p>
        <div class="post-tags">${tags}</div>
      </a>
    </li>
  `;
}

function renderPostList(posts) {
  const listEl = document.getElementById("post-list");
  const emptyEl = document.getElementById("empty-state");

  if (posts.length === 0) {
    listEl.innerHTML = "";
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  listEl.innerHTML = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(postCardHtml)
    .join("");
}

function render() {
  const filtered = filterPosts(state.posts, {
    query: state.query,
    tag: state.tag,
  });
  renderPostList(filtered);
  renderTagFilters(collectTags(state.posts));
}

async function init() {
  const res = await fetch("posts/manifest.json", { cache: "no-store" });
  state.posts = await res.json();

  document.getElementById("search-input").addEventListener("input", (e) => {
    state.query = e.target.value;
    render();
  });

  render();
}

document.addEventListener("DOMContentLoaded", init);
