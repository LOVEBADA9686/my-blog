---
title: 바닐라 JS로 블로그 만들 때 알아두면 좋은 것들
date: 2026-07-05
tags: [javascript, 웹개발]
excerpt: 빌드 도구 없이 fetch와 템플릿 리터럴만으로 충분히 쓸만한 사이트를 만들 수 있어요.
---

## 1. 디렉토리 목록을 못 읽는다는 걸 기억하기

브라우저 JS는 서버 없이는 `posts/` 폴더 안에 어떤 파일이 있는지 알 수 없어요. 그래서 `manifest.json` 같은 색인 파일이 꼭 필요합니다.

```json
[
  { "slug": "hello-world", "file": "hello-world.md", "title": "..." }
]
```

## 2. 템플릿 리터럴로 충분하다

컴포넌트 프레임워크 없이도 이 정도면 카드 UI를 만들기에 충분해요.

```js
function postCardHtml(post) {
  return `<li class="post-card">${post.title}</li>`;
}
```

## 3. `localStorage`로 사용자 설정 저장하기

다크 모드처럼 사용자가 선택한 값은 `localStorage`에 저장해두면 새로고침해도 유지됩니다.

```js
localStorage.setItem("blog-theme", "dark");
```

작은 도구들을 조합하는 것만으로도 꽤 괜찮은 블로그를 만들 수 있어요.
