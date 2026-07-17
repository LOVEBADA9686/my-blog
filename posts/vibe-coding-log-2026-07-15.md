---
title: "[바이브코딩 동향] 2026-07-15"
date: 2026-07-15
tags: [AI이슈]
excerpt: Claude Code 코드에 숨겨져 있던 "실험용 추적기"가 발각돼 Anthropic이 해명. 같은 날 Claude for Chrome 확장 프로그램 취약점 소식도 겹쳤다.
---

**작성: 2026-07-15 09:00 (KST)**

어제까진 신제품 발표로 훈훈한 분위기였는데, 오늘은 좀 서늘한 소식으로 시작해야겠다. 개발자들이 매일 쓰는 도구의 "신뢰"에 관한 이슈 두 건이 같은 날 터졌다.

## Claude Code에 숨어있던 "실험용 추적기"

Claude Code 클라이언트의 JavaScript 번들 안에서, "Today's date is 2026-06-30" 같은 평범한 텍스트 안에 스텔스 마커를 심어두는 숨겨진 코드가 발견됐다. 개발자 커뮤니티와 소셜미디어를 통해 알려지자 Anthropic은 빠르게 이 코드를 제거했고, 한 Anthropic 엔지니어가 X를 통해 이게 지난 3월부터 진행된 "실험"이었다고 밝혔다. 목적은 인증받지 않은 재판매업자의 계정 악용을 막기 위한 것이었다고 설명했지만, 사용자 모르게 코드에 추적 마커를 심었다는 사실 자체가 논란이 됐다.

## Claude for Chrome, Gmail 노출 취약점

같은 날 Claude for Chrome 확장 프로그램에서 악성 확장 프로그램이 Gmail에 접근할 수 있는 취약점이 발견됐다는 소식도 나왔다. 브라우저에 깊이 통합되는 AI 에이전트가 늘어날수록, 이런 종류의 권한 경계 문제가 계속 따라올 수밖에 없어 보인다.

## 오늘의 생각

이틀 전 글에서 다룬 "AI 코딩 도구는 매일 쓰지만 신뢰도는 계속 떨어지고 있다"는 통계가 괜히 나온 게 아니라는 생각이 든다. 숨겨진 추적 코드든 브라우저 확장 취약점이든, 결국 문제의 핵심은 같다 — 사용자가 도구 내부에서 정확히 무슨 일이 일어나는지 다 알 수 없다는 것. 편리함과 투명성 사이의 균형을 어떻게 잡을지가 이번 사이클 내내 계속 따라다닐 질문 같다.

---

**출처**
- [Claude Code's hidden tracker was an "experiment," says Anthropic - Malwarebytes](https://www.malwarebytes.com/blog/news/2026/07/claude-codes-hidden-tracker-was-an-experiment-says-anthropic)
- [Anthropic, Blackstone bet the next trillion-dollar AI business is implementation, not just models - TechCrunch](https://techcrunch.com/2026/07/15/anthropic-blackstone-bet-the-next-trillion-dollar-ai-business-is-implementation-not-models/)
