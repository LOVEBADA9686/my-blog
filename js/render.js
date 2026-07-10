// Fetches a markdown post, splits off its front matter, and renders the
// remaining body to HTML with marked.js + highlight.js. No build step: all
// of this happens in the browser at request time.

/**
 * Parses a leading `---\n key: value \n---` front matter block.
 * Supports plain scalars and simple `[a, b, c]` array values (used for tags).
 */
function parseFrontMatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) {
    return { meta: {}, body: raw };
  }

  const [, frontMatterBlock, body] = match;
  const meta = {};

  frontMatterBlock.split("\n").forEach((line) => {
    const lineMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!lineMatch) return;
    const [, key, rawValue] = lineMatch;
    const value = rawValue.trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      meta[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    } else {
      meta[key] = value.replace(/^["']|["']$/g, "");
    }
  });

  return { meta, body: body.trim() };
}

/** Fetches `posts/<file>`, returns { meta, html }. */
async function loadPost(file) {
  const res = await fetch(`posts/${file}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Could not load posts/${file} (${res.status})`);
  }
  const raw = await res.text();
  const { meta, body } = parseFrontMatter(raw);
  const html = marked.parse(body);
  return { meta, html };
}

/** Runs highlight.js over every code block inside `container`. */
function highlightCodeBlocks(container) {
  container.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
  });
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
