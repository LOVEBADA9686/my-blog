---
title: 안녕하세요, my-blog입니다
date: 2026-07-01
tags: [소개]
excerpt: 프레임워크 없이 마크다운만으로 만든 블로그를 소개합니다.
---

## 이 블로그는 이렇게 동작해요

이 사이트는 React나 Vue 같은 프레임워크 없이, 순수 **HTML, CSS, JavaScript**만으로 만들어졌습니다. 빌드 단계도 없어요.

- 브라우저가 `posts/manifest.json`을 읽어서 글 목록을 보여주고
- 글을 클릭하면 그때 해당 `.md` 파일을 `fetch`로 가져와서
- 그 자리에서 마크다운을 HTML로 변환해 보여줍니다.

```js
// 대략 이런 흐름이에요
const res = await fetch(`posts/${file}`);
const markdown = await res.text();
const html = marked.parse(markdown);
```

> 정적 파일만으로 동작하기 때문에 GitHub Pages 같은 곳에 그대로 올려도 잘 동작해요.

다음 글에서는 바닐라 JS로 이런 걸 만들 때 유용한 팁들을 정리해볼게요.
