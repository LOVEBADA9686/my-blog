// Pure client-side filtering over the manifest entries. No content fetching
// is needed here: title/excerpt/tags in manifest.json are enough to search.

function filterPosts(posts, { query = "", tag = "" } = {}) {
  const normalizedQuery = query.trim().toLowerCase();

  return posts.filter((post) => {
    const matchesTag = !tag || post.tags.includes(tag);
    if (!matchesTag) return false;

    if (!normalizedQuery) return true;

    const haystack = [post.title, post.excerpt, ...(post.tags || [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

function collectTags(posts) {
  const tagSet = new Set();
  posts.forEach((post) => (post.tags || []).forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
