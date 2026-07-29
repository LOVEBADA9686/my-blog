---
title: "[바이브코딩 동향] 2026-07-29"
date: 2026-07-29
tags: [AI이슈]
excerpt: MCP가 스테이트풀 프로토콜을 버리고 2026-07-28 스펙으로 대규모 개편됐고, 클로드 마이토스 프리뷰가 HAWK-256 양자내성 서명 공격법과 7라운드 AES 공격 가속을 스스로 찾아냈다는 소식까지 정리.
---

**작성: 2026-07-29 09:00 (KST)**

오늘은 코딩 툴 자체 소식보다는 그 밑을 받치는 두 가지 인프라 이야기가 눈에 띄었다. 하나는 클로드 코드를 포함해 온갖 AI 툴이 외부 시스템과 대화하는 표준인 MCP의 스펙 개편, 다른 하나는 클로드가 암호학 연구에서 직접 낸 성과다.

## MCP, "스테이트풀 프로토콜"을 마침내 버리다

Model Context Protocol 메인테이너들이 2026-07-28 스펙을 확정 발표했다. 인증 기능이 추가된 이후 가장 큰 폭의 변경이라고 스스로 밝힐 정도인데, 핵심은 프로토콜 코어를 양방향 스테이트풀 구조에서 요청/응답 기반의 스테이트풀리스 구조로 바꿨다는 점이다. 그 덕분에 MCP 서버를 세션이나 지속 연결을 따로 관리할 필요 없이 서버리스·엣지 인프라에 그대로 배포할 수 있게 됐다. 여기에 멀티 라운드트립 요청, 헤더 기반 라우팅, 캐시 가능한 리스트 결과, 강화된 OAuth/OIDC 인가, 정식 익스텐션 프레임워크가 함께 들어왔고, 장시간 작업을 관리하던 Tasks 기능은 코어에서 빠져 익스텐션으로 옮겨갔다. 문제는 하위 호환이다. deprecated로 표시된 기능은 최소 12개월은 계속 동작하지만, 2026-07-28 스펙을 쓰는 서버는 구버전 클라이언트와 안 맞을 수 있고 반대도 마찬가지라고 한다. 클로드도 이미 새 스펙 지원을 확장했다는데, 사이드 프로젝트에서 MCP 서버를 직접 붙여 쓰고 있다면 조만간 마이그레이션 안내를 챙겨봐야 할 것 같다.

## 클로드가 스스로 찾아낸 암호학 공격 두 건

같은 날 Anthropic 리서치 쪽에서는 더 묵직한 소식이 나왔다. 클로드 마이토스 프리뷰(Claude Mythos Preview)가 사람 손을 거의 빌리지 않고 암호 알고리즘 두 개에서 새로운 취약점을 도출했다는 내용이다. 하나는 양자내성 전자서명 후보인 HAWK-256을 대상으로 한 엔드투엔드 키 복구 공격으로, 격자 구조에 숨어 있던 대칭성을 활용해 가장 작은 파라미터 세트의 공격 비용을 약 2^64 연산에서 2^38 연산으로 끌어내렸다. 96코어 서버에서 3시간 42분이면 실제로 키를 복구할 수 있는 수준이라고 한다. 다른 하나는 7라운드로 줄인 AES-128에 대한 기존 meet-in-the-middle 공격에서 256가지 경우의 수를 추측하던 단계를 제거해, 공격 속도를 200~800배 끌어올렸다. Anthropic은 두 결과 모두 실제 운영 시스템에는 영향이 없고, 완전한 AES 표준을 깬 것도 아니라고 선을 그었다. 다만 HAWK 공격을 클로드가 약 60시간 만에 도출했고, 이런 발견 하나당 API 컴퓨팅 비용이 약 10만 달러 수준이었다는 점은 눈여겨볼 만하다. 사람은 프로젝트 방향 설정, 컴퓨팅 자원 제공, 결과 검증만 맡았다고 하니, 2년간 사람 손으로 검토해도 못 찾던 걸 AI가 뚫었다는 표현이 과장만은 아닌 셈이다.

## 오늘의 생각

두 소식을 나란히 보면 "AI 시대의 인프라가 바뀌는 방식"이 보인다. MCP는 AI 에이전트가 실제로 대량 트래픽을 감당하려면 프로토콜부터 스테이트리스하게 다시 짜야 한다는 실용적인 결론이고, 클로드의 암호학 공격은 그 반대편에서 AI가 이제 인프라의 "안전성 가정" 자체를 검증하고 흔드는 수준까지 왔다는 신호다. 바이브코딩으로 뭔가를 뚝딱 만드는 재미에 익숙해지다 보면 이런 하부 구조 이야기는 지나치기 쉬운데, 결국 내가 붙여 쓰는 MCP 서버 하나, 내 데이터를 암호화하는 알고리즘 하나가 이런 흐름 위에 놓여 있다는 걸 가끔은 떠올려야겠다.

---

**출처**
- [The 2026-07-28 Specification - Model Context Protocol Blog](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [Model Context Protocol prepares to break with its stateful past - The Register](https://www.theregister.com/devops/2026/07/23/model-context-protocol-prepares-to-break-with-its-stateful-past/5276722)
- [Discovering cryptographic weaknesses with Claude - Anthropic](https://www.anthropic.com/research/discovering-cryptographic-weaknesses)
- [Claude AI Just Cracked a Post-Quantum Test Scheme and Found a Faster 7-Round AES Attack - The Hacker News](https://thehackernews.com/2026/07/claude-ai-just-cracked-post-quantum.html)
- [Anthropic's Claude AI Flags New Cracks in Two Major Crypto Algorithms - Crypto Times](https://www.cryptotimes.io/2026/07/29/anthropics-claude-ai-flags-new-cracks-in-two-major-crypto-algorithms/)
