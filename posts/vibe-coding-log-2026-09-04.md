---
title: "[바이브코딩 동향] 2026-09-04"
date: 2026-09-04
tags: [AI이슈]
excerpt: Claude Fable 5.1/Mythos 5.1 출시, 기업 데이터를 고객 클라우드에 남기는 Enterprise Frontier Safeguards, 그리고 "바이브코딩은 끝났다"는 카파시의 에이전틱 엔지니어링 선언까지 이번 주 소식 정리.
---

**작성: 2026-09-04 09:00 (KST)**

9월 첫 주부터 굵직한 소식이 많았다. 새 모델 출시, 엔터프라이즈 보안 정책 전환, 그리고 "바이브코딩"이라는 말 자체를 둘러싼 담론까지 세 갈래로 정리해본다.

## Claude Fable 5.1 / Mythos 5.1 출시

9월 1일 Anthropic이 코딩과 지식노동용 최신 모델인 Claude Fable 5.1과 Mythos 5.1을 공개했다. 둘은 사실상 같은 모델인데 안전장치 수준만 다르다. Fable 5.1은 누구나 쓸 수 있는 일반 공개판이고, Mythos 5.1은 사이버보안·생명과학 분야의 신뢰된 접근 프로그램을 통해서만 제공된다.

성능은 Fable 5보다 크게 개선됐는데도 같은 작업 기준 비용은 약 25% 저렴해졌다고 한다. 안전장치 쪽에서도 오탐(멀쩡한 요청을 위험하다고 잘못 판단하는 것)이 눈에 띄게 줄어서, 사이버보안 영역에서는 오탐이 기존 대비 60% 줄었다고 밝혔다. 흥미로운 건 Fable 5.1부터는 소프트웨어 취약점을 "찾는" 용도로는 쓸 수 있되, 그 취약점을 이용하는 익스플로잇 코드를 만드는 데는 여전히 못 쓰게 막아뒀다는 점이다. 보안 리서치 도구로서의 활용과 오남용 방지 사이에서 선을 긋는 방식이 구체적이라 인상적이었다.

참고로 같은 날부터 Claude Sonnet 5의 프로모션 가격($2/$10, 백만 토큰당 입출력)도 종료되고 정상가($3/$15)로 돌아갔다. 두 달 넘게 이어진 할인이 끝난 셈이라, Claude Code를 많이 쓰는 개인 개발자라면 이번 달 사용량 청구서가 살짝 달라 보일 수 있다.

## Enterprise Frontier Safeguards: 감시 데이터도 이제 우리 클라우드에

같은 주에 발표된 Enterprise Frontier Safeguards(EFS)도 눈여겨볼 만하다. 기존에는 오남용 탐지를 위한 모니터링 데이터를 Anthropic 쪽 인프라에 보관했는데, EFS는 이 데이터를 고객사 자체 클라우드에 남기는 구조로 바꾼다. "데이터는 저장하지 않겠다"는 제로 리텐션 약속과 "그래도 오남용은 잡아내야 한다"는 요구 사이의 타협점을 고객사 인프라 위에서 풀어낸 셈이다.

골드만삭스, 모건스탠리, 씨티, 뱅크오브아메리카 같은 금융사 CISO들이 참여하는 협의체를 포함해 100곳 넘는 기업과 함께 개발했고, Claude Code·Claude Enterprise·Claude Platform은 물론 Bedrock, Google Agent Platform, Microsoft Foundry까지 여러 플랫폼에서 지원될 예정이라고 한다. 올가을부터 단계적으로 롤아웃한다니 실제로 기업 환경에서 어떻게 동작하는지는 좀 더 지켜봐야 할 듯하다.

## "바이브코딩은 끝났다" - 카파시의 에이전틱 엔지니어링

한편으로는 "바이브코딩"이라는 용어 자체를 둘러싼 담론도 계속되고 있다. 이 말을 처음 만든 안드레이 카파시는 이제 "바이브코딩은 이미 한물갔다(passé)"고 못 박고, "에이전틱 엔지니어링"이라는 다음 단계를 이야기한다. 그의 구분은 이렇다 — 바이브코딩은 에이전트의 결과물을 대충 괜찮다고 보고 넘어가는 방식으로, 프로토타입이나 개인 도구에는 맞지만, 진짜 팀에게 필요한 건 스펙을 설계하고 계획을 검수하고 diff를 하나하나 살피고 테스트와 평가 루프를 만드는 "에이전틱 엔지니어링"이라는 것이다.

바이브코딩이라는 단어가 이제 메리엄웹스터 사전에까지 오른 마당에, 정작 이 말을 만든 사람은 이미 다음 단계로 넘어가자고 말하는 아이러니가 재미있다.

## 오늘의 생각

세 소식을 나란히 놓고 보니 방향이 하나로 모인다. 모델은 더 싸고 강력해지고, 기업들은 "안전하게, 그러나 통제권은 우리가"를 요구하고, 커뮤니티는 "그냥 되는 대로 맡기기"에서 "제대로 검수하며 쓰기"로 옮겨가고 있다. 이 블로그도 지금은 혼자 만드는 작은 프로젝트라 바이브코딩에 가깝지만, 카파시 말마따나 diff를 더 꼼꼼히 보는 습관 정도는 지금부터 들여도 나쁘지 않을 것 같다.

---

**출처**
- [Introducing Claude Fable 5.1 and Claude Mythos 5.1 - Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-1)
- [Developing Enterprise Frontier Safeguards with our customers - Anthropic](https://www.anthropic.com/news/enterprise-frontier-safeguards)
- [Anthropic Claude News | September, 2026](https://blog.mean.ceo/anthropic-claude-news-september-2026/)
- [Sequoia Ascent 2026 summary - Andrej Karpathy](https://karpathy.bearblog.dev/sequoia-ascent-2026/)
- [The End of Vibe Coding: Andrej Karpathy's Shift to 'Agentic Engineering' in 2026](https://buttondown.com/verified/archive/the-end-of-vibe-coding-andrej-karpathys-shift-to/)
