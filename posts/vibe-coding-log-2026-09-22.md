---
title: "[바이브코딩 동향] 2026-09-22"
date: 2026-09-22
tags: [AI이슈]
excerpt: 코덱스 CLI가 음성 대화와 MCP용 터치ID를 실험적으로 추가하고 제미나이 CLI는 OAuth 보안 강화에 집중한 한 주였고, 앤트로픽은 다리오의 "속도를 늦추자"는 선언 열흘 만에 GPT-6 아스트라에 밀려 신모델 출시를 저울질하는 모순적인 상황에 놓였다.
---

**작성: 2026-09-22 09:00 (KST)**

오늘은 클로드 바깥으로 눈을 좀 돌려봤다. 경쟁 CLI 도구들이 이번 주에 뭘 했는지, 그리고 앤트로픽이 자기가 내건 원칙과 경쟁 압박 사이에서 어떤 딜레마에 빠졌는지를 정리했다.

## 코덱스는 음성·터치ID, 제미나이는 보안 — 이번 주 CLI 삼국지

이번 주 코딩 에이전트 CLI 업계를 훑어보면 셋의 방향이 확실히 갈린다. 오픈AI의 코덱스 CLI는 0.155.0에서 실험적인 `/voice` 대화 기능을 추가했다. WebRTC 기반 음성 채널을 열어 실시간 대본, 음소거 단축키, 녹음 상태 표시를 지원 macOS에서 쓸 수 있는데, `/experimental`로 켜야 하는 아직은 실험 단계 기능이다. 같이 들어온 게 MCP 요청에 터치ID 인증을 붙인 기능으로, 로컬 TUI 세션에서 에이전트가 MCP 서버로 보내는 툴 호출마다 하드웨어 지문 확인을 요구할 수 있게 됐다 — MCP 서버가 로컬 시스템 더 깊숙이 손을 뻗는 만큼 승인 단계에 물리적 확인을 하나 더 끼워 넣은 셈이다. 다만 이 버전은 사고 과정 요약(reasoning summary) 기능이 일부 제공자에게 거부당하는 부작용이 있어서, 바로 다음 날 나온 0.155.1에서 새 로컬 세션은 기본적으로 이 기능을 꺼두는 걸로 되돌렸다.

반면 구글 제미나이 CLI의 0.60.0 버전은 신기능보다는 거의 전부 보안 작업이다. 가장 눈에 띄는 건 MCP OAuth 흐름에 RFC 9207 발급자(issuer) 식별을 강제한 것 — OAuth 콜백에서 `iss` 파라미터를 검증해, 인증 서버를 속여 다른 신원 제공자로 바꿔치기하는 "IdP 믹스업" 공격을 막는 패치다. `iss`가 없거나 예상한 발급자와 다르면 HTTP 400으로 아예 거부한다. 세 CLI를 나란히 보면 코덱스는 사용자 경험을 넓히는 쪽, 제미나이는 인프라를 조이는 쪽으로 이번 주는 확실히 방향이 갈렸는데, 결국 둘 다 "MCP로 외부 시스템과 더 깊이 연결되는 만큼 그 연결 지점을 더 꼼꼼히 지켜야 한다"는 같은 문제의식에서 나온 대응으로 보인다.

## 앤트로픽, "속도를 늦추자"고 해놓고 신모델을 저울질하다

로이터 단독 보도에 따르면 앤트로픽이 IPO를 앞두고 신규 모델 출시를 검토 중이라고 한다. 시점이 공교로운데, CEO 다리오 아모데이가 9월 12일 "우리는 AI 모델의 성능 개선 속도를 늦춰야 한다"는 3,800단어짜리 에세이를 공개적으로 낸 지 열흘도 안 돼 나온 얘기다. 배경에는 경쟁 압박이 있다 — 이번 달 출시된 오픈AI의 GPT-6 아스트라가 기업 시장에서 빠르게 치고 올라오면서, 램프(Ramp) 집계 기준 기업 AI 지출에서 아스트라가 13%, 클로드 페이블이 8%를 차지하는 걸로 나타났다고 한다. 일부 투자자들은 이 수치를 근거로 앤트로픽이 "기업용 AI 1위"라는 위치를 계속 지킬 수 있을지 재평가하고 있다는 게 로이터 취재원들의 전언이다. 다만 다음 모델에 대한 안전성 평가가 진행 중이고 출시 시점은 아직 확정되지 않았다는 단서가 붙었고, IPO 자체도 11월 미국 중간선거 이후로 미뤄질 수 있다는 얘기도 함께 나왔다.

## 오늘의 생각

두 소식을 붙여놓고 보니 결국 "원칙과 압박이 부딪힐 때 회사는 어떻게 하는가"라는 질문으로 모인다. 제미나이 CLI가 이번 주 통째로 보안에 쏟아부은 것도, 코덱스가 새 기능에 하드웨어 인증을 굳이 끼워 넣은 것도 "빨라지는 만큼 안전장치도 같이 챙기겠다"는 의지의 표현인데, 정작 그 "속도를 늦추자"는 말을 가장 크게 외쳤던 앤트로픽 본인은 경쟁사의 수치 앞에서 신모델 카드를 만지작거리고 있다는 게 아이러니하다. 원칙은 원칙이고 시장 점유율은 시장 점유율이라는, 이 바닥에서 늘 반복되는 긴장이 이번 주에도 그대로 드러난 느낌이다.

---

**출처**
- [Codex CLI 0.155.0 — voice conversations arrive - AI/TLDR](https://ai-tldr.dev/releases/openai-codex-cli-0-155/)
- [Codex CLI 0.155.1 Fixes Reasoning-Summary Compatibility - Chat GPT AI Hub](https://chatgptaihub.com/codex-cli-0-155-1-reasoning-summary-compatibility-voice-touch-id-daemon-update)
- [fix(core): enforce RFC 9207 issuer identification in MCP OAuth flow - GitHub PR #29117](https://github.com/google-gemini/gemini-cli/pull/29117)
- [This week in Claude Code, Codex and Gemini CLI (week of September 20, 2026) - DEV Community](https://dev.to/aicoding-guide/this-week-in-claude-code-codex-and-gemini-cli-week-of-september-20-2026-2fg1)
- [Anthropic Weighs New AI Model as OpenAI's GPT-6 Astra Gains Ground - Analytics India Magazine](https://analyticsindiamag.com/ai-news/anthropic-weighs-new-ai-model-as-openais-gpt-6-astra-gains-ground)
- [Exclusive-Anthropic considers releasing new AI model ahead of IPO, sources say - Reuters via Investing.com](https://www.investing.com/news/stock-market-news/exclusiveanthropic-considers-releasing-new-ai-model-ahead-of-ipo-sources-say-4908007)
