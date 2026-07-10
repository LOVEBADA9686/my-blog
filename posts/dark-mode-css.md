---
title: CSS 변수로 다크 모드 구현하기
date: 2026-07-08
tags: [블로그홈페이지개발]
excerpt: prefers-color-scheme와 CSS 커스텀 프로퍼티만으로 깔끔한 다크 모드를 만드는 방법.
---

## 기본 아이디어

색상을 하드코딩하지 않고 CSS 변수로 정의해두면, 테마 전환이 변수 값만 바꾸는 문제가 됩니다.

```css
:root {
  --bg: #fffaf4;
  --text: #2b2620;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #15171c;
    --text: #eee9e2;
  }
}
```

## 수동 토글이 시스템 설정보다 우선하도록

사용자가 직접 토글 버튼을 누르면 그 선택이 시스템 설정보다 우선해야 자연스러워요. `data-theme` 속성과 좀 더 구체적인 선택자를 이용하면 됩니다.

```css
:root[data-theme="dark"] {
  --bg: #15171c;
  --text: #eee9e2;
}
```

그리고 그 값을 `localStorage`에 저장해두면 새로고침해도 유지됩니다. 생각보다 간단하죠?
