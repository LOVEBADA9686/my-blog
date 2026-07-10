// Dark/light theme toggle. Manual choice is stored in localStorage and wins
// over the OS-level `prefers-color-scheme`, which is used only as the default.
const THEME_KEY = "blog-theme";

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY);
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getEffectiveTheme() {
  return getStoredTheme() || getSystemTheme();
}

function applyHljsStylesheet(theme) {
  const light = document.getElementById("hljs-theme-light");
  const dark = document.getElementById("hljs-theme-dark");
  if (!light || !dark) return;
  light.disabled = theme !== "light";
  dark.disabled = theme !== "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  applyHljsStylesheet(theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.textContent = theme === "dark" ? "☀️" : "\u{1F319}";
    btn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

function initTheme() {
  applyTheme(getEffectiveTheme());

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const next = getEffectiveTheme() === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  // Follow system changes only while the user hasn't made an explicit choice.
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!getStoredTheme()) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
}

document.addEventListener("DOMContentLoaded", initTheme);
