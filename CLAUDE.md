# my-blog

마크다운 파일을 읽어 블로그 웹사이트로 보여주는 프로젝트. 빌드 도구나 백엔드 없이 정적 파일만으로 동작하며, GitHub Pages 같은 정적 호스팅에 그대로 올릴 수 있어야 한다.

> 이 문서는 코드가 아직 하나도 없는 상태(빈 디렉토리)에서 작성되었다. 아래 구조/컨벤션은 앞으로의 구현을 위한 스펙이다. 실제 구현이 진행되며 구조가 달라지면 이 파일도 함께 갱신할 것.

## 기술 스택 & 제약

- **순수 HTML/CSS/JS만 사용.** React, Vue, Svelte 등 UI 프레임워크 금지. 번들러/트랜스파일러(Webpack, Vite 등) 없음.
- **빌드 단계 없음.** 마크다운 → HTML 변환은 클라이언트(브라우저)에서 실시간으로 일어난다. `fetch()`로 `.md` 파일을 읽어 그 자리에서 렌더링한다.
- 마크다운 파싱, 코드 하이라이팅용으로 소규모 JS 라이브러리(예: marked.js, highlight.js)는 예외적으로 허용하되, **CDN이 아니라 `vendor/`에 파일을 다운로드해 로컬로 관리**한다 (오프라인 동작 보장, 외부 의존성 최소화).
- 브라우저 JS는 디렉토리 목록을 읽을 수 없으므로, 글 목록은 반드시 `posts/manifest.json`으로 관리한다. **글을 추가/삭제할 때마다 manifest도 함께 갱신해야 한다.**

## 예정 디렉토리 구조

```
index.html          # 글 목록(홈) 페이지
post.html            # 글 상세 페이지 (?slug=... 쿼리로 어떤 글인지 식별)
css/
  style.css          # CSS 변수 기반 라이트/다크 테마, 반응형 레이아웃
js/
  app.js             # 목록 페이지 로직 (manifest 로드, 태그 필터, 검색)
  render.js          # 마크다운 fetch + 파싱 + HTML 렌더링, front matter 파싱
  search.js          # 검색/필터링 로직
  theme.js           # 다크모드 토글 + localStorage 저장
posts/
  manifest.json      # 글 목록 메타데이터 (title, date, tags, excerpt, slug/filename)
  *.md               # 실제 글 (front matter 포함)
vendor/
  marked.min.js       # 마크다운 파서 (로컬 vendor)
  highlight.min.js    # 코드 하이라이팅 (로컬 vendor)
assets/
  ...                # 이미지 등 정적 리소스
```

## 콘텐츠 컨벤션

- 각 마크다운 파일 상단에 front matter를 둔다:
  ```
  ---
  title: 글 제목
  date: 2026-07-10
  tags: [javascript, css]
  excerpt: 목록에 보여줄 짧은 요약
  ---
  ```
- `posts/manifest.json`에 위와 동일한 메타데이터를 등록해 목록 페이지가 개별 `.md` 파일을 일일이 fetch하지 않고도 목록/태그/검색을 렌더링할 수 있게 한다.

### 태그(카테고리) 고정 목록

태그 필터 메뉴가 지저분해지지 않도록, 글의 `tags`는 아래 4개 카테고리 중에서만 골라 쓴다 (새 태그를 임의로 만들지 않는다). 글 하나에는 보통 카테고리 하나만 붙인다.

- `소개` — 블로그 자체 소개 글
- `AI이슈` — 클로드AI/바이브코딩 관련 동향 (매일 자동 게시)
- `국내/해외증시` — 국내외 증시 브리핑 (매일 자동 게시)
- `블로그홈페이지개발` — 이 블로그를 만들며 배운 HTML/CSS/JS 관련 글

## 디자인 원칙

- **화사하고 읽기 좋게**: 밝은 accent color, 넉넉한 여백, 본문은 가독성 있는 폰트 크기와 line-height.
- **다크 모드**: CSS 변수(`--bg`, `--text`, `--accent` 등)로 테마를 정의하고 `prefers-color-scheme`를 기본값으로 사용. 우측 상단 토글 버튼으로 수동 전환 가능하게 하고 선택값은 `localStorage`에 저장.
- **모바일 반응형**: 모바일 우선(mobile-first) CSS. flexbox/grid 기반 레이아웃, 넓은 화면에서는 여백을 넓히고 좁은 화면에서는 폰트/패딩을 조정하는 미디어 쿼리 사용.

## 기능

- 태그/카테고리 필터링 (manifest의 `tags` 기준)
- 검색 (제목/태그/본문 텍스트 기준 클라이언트 사이드 필터링)
- 코드 블록 문법 하이라이팅 (vendor된 highlight.js 사용)
