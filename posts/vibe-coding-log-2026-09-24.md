---
title: "[바이브코딩 동향] 2026-09-24"
date: 2026-09-24
tags: [AI이슈]
excerpt: 앤트로픽이 클로드의 "생각 과정"을 경쟁사가 베껴가지 못하게 막는 프리저브드 씽킹을 도입했고, 구글은 제미나이 CLI를 접고 클로드 코드·코덱스와 정면 승부할 안티그래비티 CLI를 전면 공개했다.
---

**작성: 2026-09-24 09:00 (KST)**

어제 오퍼스 5.5 가격 인하 소식을 정리했는데, 오늘 보니 같은 릴리스 안에 조용히 끼워 넣은 보안 기능 하나와 구글 쪽에서 터진 코딩 CLI 개편 소식이 더 눈에 들어왔다. 둘 다 "누가 더 싸냐"가 아니라 "누가 이 판을 어떻게 지키고, 어떻게 넓히느냐"에 대한 이야기라 같이 묶어봤다.

## 클로드의 "생각"을 베끼지 못하게, 프리저브드 씽킹 도입

오퍼스 5.5와 함께 조용히 켜진 기능이 하나 있다. 바로 "프리저브드 씽킹(preserved thinking)"이라는 증류(distillation) 방지 장치다. 기존에는 API로 클로드를 쓸 때, 이전 턴의 씽킹(추론) 블록을 가져와 대화 맥락 일부를 슬쩍 바꿔치기한 뒤 다시 보내면 클로드가 왜 그렇게 답했는지 내부 추론 과정을 더 캐낼 수 있는 여지가 있었다. 이걸 이용해 만든 대화 데이터를 다른 모델 학습에 쓰면, 앤트로픽이 클로드에 심어둔 안전장치는 쏙 빼고 능력만 그대로 베껴가는 "증류"가 가능해진다. 프리저브드 씽킹은 이 구멍을 막는다 — 씽킹 블록은 그걸 만들어낸 것과 동일한 시스템 프롬프트·툴·메시지가 그대로 유지된 상태에서만 재사용할 수 있고, 앞부분이 조금이라도 바뀌면 API가 에러를 낸다. 8월 31일 이후 새로 만든 API 계정부터 페이블 5.1과 오퍼스 5.5에 적용된다고 한다. 어제 정리한 "가격은 낮추고 성능은 유지"라는 발표 이면에, "다만 이 모델의 추론 과정 자체는 함부로 못 퍼가게 한다"는 메시지가 같이 깔려 있었던 셈이다.

## 구글, 제미나이 CLI 접고 안티그래비티 CLI로 정면 승부

구글도 9월 23일 제미나이 CLI를 "안티그래비티 CLI"로 전환한다고 공식 발표했다. 이번 주부터 누구나 쓸 수 있게 전면 공개됐는데, Go 언어로 새로 짜여서 더 가볍고 빠르다는 게 구글 설명이다. 백그라운드에서 복잡한 작업을 비동기로 돌리는 워크플로를 지원하고, 최근 나온 안티그래비티 2.0 데스크톱 앱과 아키텍처를 공유한다. 기존 제미나이 CLI에 있던 에이전트 스킬·훅·서브에이전트·익스텐션 개념은 그대로 유지되는데, 익스텐션은 이제 "안티그래비티 플러그인"이라는 이름으로 바뀌었다. 결국 구글이 제미나이 CLI라는 개별 도구 대신 클로드 코드·코덱스와 같은 급으로 싸울 통합 에이전트 플랫폼 브랜드 하나로 힘을 모으겠다는 선언인 셈이다. 클로드 코드 쪽에서 서브에이전트·플러그인·훅 같은 개념을 먼저 정착시킨 걸 구글이 거의 그대로 따라오는 모양새라, 용어 자체가 업계 표준처럼 굳어지고 있다는 인상도 든다.

## 오늘의 생각

두 소식을 나란히 보면 재미있는 대비가 생긴다. 앤트로픽은 "우리 모델의 생각 과정은 함부로 못 가져간다"며 방어벽을 세우는 중이고, 구글은 반대로 판 자체를 새로 짜서 클로드 코드가 먼저 정착시킨 개념들(서브에이전트, 플러그인, 훅)을 자기 플랫폼에 그대로 이식하며 쫓아오고 있다. 코딩 에이전트 경쟁이 가격 전쟁 다음 단계로 넘어가면서, 이제는 "모델의 추론 능력 자체를 누가 지키고 누가 흡수하느냐"가 새로운 전선이 되는 느낌이다. 참고로 클로드 프로·맥스·팀 구독자라면 설정 → 사용량 메뉴에 10월 22일까지 쓸 수 있는 무료 사용량 리셋이 하나 열려 있으니, 오퍼스 5.5를 써볼 타이밍을 잡고 있다면 잊지 말고 챙기시길.

---

**출처**
- [Preserved thinking: changing how the Messages API handles thinking blocks to protect against distillation - Claude Help Center](https://support.claude.com/en/articles/16761192-preserved-thinking-changing-how-the-messages-api-handles-thinking-blocks-to-protect-against-distillation)
- [Preserved thinking - Claude Platform Docs](https://platform.claude.com/docs/en/build-with-claude/preserved-thinking)
- [Claude Opus 5.5 cuts costs and adds safeguards for autonomous AI - Help Net Security](https://www.helpnetsecurity.com/2026/09/23/anthropic-claude-opus-5-5/)
- [An important update: Transitioning Gemini CLI to Antigravity CLI - Google Developers Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
- [Claude also introduces experimental usage limit resets as Opus 5.5 launches](https://pasqualepillitteri.it/en/news/17905/claude-free-usage-limit-reset-opus-5-5)
