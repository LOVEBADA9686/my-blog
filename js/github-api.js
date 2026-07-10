// Thin client for the GitHub Contents API so posts can be published straight
// from the browser (this site has no backend/build step). The owner pastes a
// personal access token once; it's kept only in this browser's localStorage
// and sent solely to api.github.com.

const GH_OWNER = "LOVEBADA9686";
const GH_REPO = "my-blog";
const GH_BRANCH = "main";
const GH_TOKEN_KEY = "myblog_gh_token";

function getGhToken() {
  return localStorage.getItem(GH_TOKEN_KEY) || "";
}

function setGhToken(token) {
  localStorage.setItem(GH_TOKEN_KEY, token.trim());
}

function clearGhToken() {
  localStorage.removeItem(GH_TOKEN_KEY);
}

function hasGhToken() {
  return !!getGhToken();
}

function encodeBase64Utf8(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function decodeBase64Utf8(b64) {
  return decodeURIComponent(escape(atob(b64.replace(/\n/g, ""))));
}

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function ghContentsRequest(path, options = {}) {
  const token = getGhToken();
  if (!token) throw new Error("GitHub 토큰이 설정되어 있지 않습니다.");

  const res = await fetch(
    `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${path}`,
    {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(options.headers || {}),
      },
    }
  );
  return res;
}

/** Returns { sha, content } for a repo file, or null if it doesn't exist. */
async function ghGetFile(path) {
  const res = await ghContentsRequest(`${path}?ref=${GH_BRANCH}`);
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`GitHub에서 파일을 불러오지 못했습니다 (${res.status})`);
  }
  const data = await res.json();
  return { sha: data.sha, content: decodeBase64Utf8(data.content) };
}

/** Creates or updates a repo file. Pass `sha` when updating an existing file. */
async function ghPutFile(path, content, message, sha) {
  const body = {
    message,
    content: encodeBase64Utf8(content),
    branch: GH_BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await ghContentsRequest(path, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GitHub 저장 실패 (${res.status}): ${err.message || "알 수 없는 오류"}`);
  }
  return res.json();
}

async function ghDeleteFile(path, sha, message) {
  const res = await ghContentsRequest(path, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, sha, branch: GH_BRANCH }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GitHub 삭제 실패 (${res.status}): ${err.message || "알 수 없는 오류"}`);
  }
  return res.json();
}
