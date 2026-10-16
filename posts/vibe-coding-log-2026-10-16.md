---
title: "[바이브코딩 동향] 2026-10-16"
date: 2026-10-16
tags: [AI이슈]
excerpt: 클로드 코드에 "Mods"라는 플러그인형 커스터마이징 기능이 추가돼 에이전트의 동작과 UI까지 코드로 바꿔 끼울 수 있게 됐고, 앤트로픽은 11월 중간선거를 앞두고 투표 정보 제공과 악용 탐지를 강화한 선거 안전장치를 발표했다.
---

**작성: 2026-10-16 09:00 (KST)**

이번 주는 "에이전트를 얼마나 깊게 뜯어고칠 수 있게 할 것인가"와 "에이전트를 선거철에 어디까지 믿을 수 있게 할 것인가"가 같이 올라온 한 주였다.

## 클로드 코드에 "Mods" 등장, 이제 동작 자체를 코드로 바꿔 낄 수 있다

10월 초 앤트로픽이 클로드 코드 2.1.287 버전에 "Mods"라는 새 확장 체계를 넣었다. 기존에도 훅(hooks)이나 MCP 서버로 클로드 코드를 확장할 수 있었지만, 이것들은 모두 클로드 코드 바깥 프로세스에서 돌아가는 방식이었다. Mods는 다르다. 타입스크립트나 자바스크립트로 작성한 핸들러가 클로드 코드 내부 프로세스 안에서 직접 이벤트를 가로챈다. 그래서 할 수 있는 일의 범위도 훨씬 넓어졌는데, 모델에 보내기 전에 프롬프트를 고쳐 쓰거나, 툴 호출을 막거나 재시도시키거나, 권한 요청을 자동으로 승인/거부하거나, 툴 출력에서 민감한 값을 지우거나, 심지어 화면에 보이는 인터페이스 요소를 새로 그리거나 교체하는 것까지 가능하다. 앤트로픽은 원래 내장 기능이던 `/diff`를 Mods로 다시 구현해서 보여줬는데, 이는 사용자가 원하면 기본 기능조차 끄거나 다른 걸로 바꿔 낄 수 있다는 뜻이다. 설치는 플러그인 형태로 배포되기 때문에 CLI나 데스크톱 앱에서 `/plugin` 명령으로 하면 되고, 만든 Mods는 클로드 디렉터리에 올려 공유할 수도 있다.

다만 Mods는 샌드박스 없이 클로드 코드가 가진 머신 접근 권한을 그대로 물려받는다. 앤트로픽도 신뢰할 수 있는 출처에서만 설치하라고 당부했고, 팀·엔터프라이즈 플랜에는 사용자가 설치한 Mods가 조직이 정한 권한 거부 규칙을 덮어쓰지 못하도록 가장 먼저 로드되는 내장 `sec-default` Mods를 끼워 넣었다고 한다.

바이브코딩 쪽에서 보면 이건 "에이전트의 생김새와 습관까지 코드로 정의한다"는 느낌이다. 지금까지는 프롬프트나 설정 파일로 동작을 유도하는 정도였는데, 이제는 아예 이벤트 레벨에서 가로채 바꿀 수 있으니 에이전트를 둘러싼 커스터마이징 생태계가 한 단계 더 깊어진 셈이다.

## 11월 중간선거 앞두고 클로드에 투표 정보·악용 탐지 강화

10월 14일에는 방향이 다른 발표가 나왔다. 앤트로픽은 "2026년 미국 중간선거 준비"라는 제목으로, 11월 3일 선거를 앞두고 클로드의 선거 관련 안전장치를 강화한다고 밝혔다. 먼저 미국 Claude.ai 대화 약 25만 건을 살펴본 결과를 공개했는데, "누구/무엇에 투표해야 하냐"고 묻는 요청은 전체의 약 0.01%, 선거 관련 정책을 위반하는 요청은 약 0.002%에 불과했다고 한다. 비중 자체는 작지만, 그만큼 적발된 사례는 더 선명하게 드러난다는 뜻이기도 하다. 실제로 외국 기반 운영자들이 클로드를 이용해 러시아·이란·북한에 유리한 서사를 담은 가짜 뉴스 사이트용 중간선거 보도를 만든 시도를 적발해 막았다는 사례도 함께 언급됐다.

대응책으로는 10월 말부터 미국 사용자 대상으로 Claude.ai 응답에 '데모크라시 웍스(Democracy Works)'가 제공하는 주(state)별 공식 투표 정보를 바로 끌어와 보여주는 기능을 넣기로 했다. 선거 당일 밤 결과 제공도 준비 중이라고 한다. 앤트로픽은 "공개되기 전에 이런 시도를 막아낼 기회가 많다"는 표현으로, 사전 탐지와 차단에 방점을 찍었다.

## 오늘의 생각

두 소식을 같이 보면 결 자체가 다르다. Mods는 "개발자가 에이전트를 더 깊이, 더 자유롭게 바꿀 수 있게" 열어주는 쪽이고, 선거 안전장치는 "불특정 다수에게 노출되는 답변은 더 좁고 신중하게" 가두는 쪽이다. 생각해보면 둘 다 결국 "누가, 어떤 맥락에서 에이전트를 쓰느냐"에 따라 통제의 방향이 반대로 움직인다는 같은 원리를 보여주는 것 같다. 개발자 혼자 로컬에서 돌리는 코딩 에이전트는 권한을 열어줄수록 생산성이 늘지만, 불특정 다수가 접근하는 공개 서비스는 권한을 좁힐수록 신뢰가 쌓인다. 바이브코딩을 하면서 "이 에이전트에게 얼마나 열어줄까"를 정할 때, 결국 이게 나 혼자 쓰는 도구인지 남들도 보는 결과물인지부터 먼저 구분하는 습관이 필요하겠다는 생각이 들었다.

---

**출처**
- [Anthropic Launched Mods for Claude Code. Let's Build a Tiny One in TypeScript.](https://dev.to/bobbyhalljr/anthropic-launched-mods-for-claude-code-lets-build-a-tiny-one-in-typescript-152h)
- [Claude Code Mods: What They Can Do and What They Can Reach](https://cellcog.ai/blog/claude-code-mods/)
- [Anthropic Adds Claude Code Mods That Can Rewrite Prompts and Replace Built-In Features](https://superpowerdaily.com/posts/anthropic-adds-claude-code-mods-that-can-rewrite-prompts-and-replace-built-in-features)
- [Anthropic Strengthens Election Safeguards Ahead of 2026 US Midterms](https://www.unite.ai/anthropic-strengthens-election-safeguards-ahead-of-2026-us-midterms/)
- [Anthropic Rolls Out Election Safeguards for Claude AI Ahead of US Midterms](https://decrypt.co/365486/anthropic-election-safeguards-claude-ai-us-midterms)
- [Anthropic plans to add official voting guidance to Claude for 2026 midterms](https://runtimewire.com/article/anthropic-claude-election-safeguards-2026-midterms)
