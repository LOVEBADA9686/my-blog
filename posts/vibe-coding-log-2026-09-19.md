---
title: "[바이브코딩 동향] 2026-09-19"
date: 2026-09-19
tags: [AI이슈]
excerpt: 앤트로픽이 클로드가 자사 R&D의 26%를 주도하고 있다고 밝혔고, 클로드 코드 Projects가 여러 작업을 동시에 처리하는 병렬 에이전트·공유 메모리 구조로 새로 개편됐다.
---

**작성: 2026-09-19 09:00 (KST)**

오늘은 클로드 자체와 관련된 소식 두 개를 골라봤다. 하나는 "AI가 다음 AI를 만든다"는 좀 상징적인 이야기고, 다른 하나는 클로드 코드를 실제로 쓰는 사람이라면 바로 체감할 만한 기능 개편이다.

## 앤트로픽 "클로드가 우리 R&D의 26%를 이끌고 있다"

9월 17~18일 앤트로픽이 밝힌 내용에 따르면, 클로드 모델이 회사 내부 모델 연구개발(R&D) 작업의 26%를 "주도(lead)"하고 있다고 한다. 여기서 "주도한다"는 건 사람의 감독 아래 있긴 하지만, 상위 수준의 프롬프트 하나만 주면 작업 대부분을 처음부터 끝까지 클로드 혼자 완료할 수 있다는 뜻이다. 올해 2월에는 이 비율이 사실상 0이었는데, 8월에 25% 선을 넘어섰고 지금은 26%까지 왔다고 하니 반년 사이에 꽤 가파르게 올라온 셈이다. 여기에 더해 R&D 작업의 약 90%가 클로드와의 "협업(collaboration)" 형태로 이뤄지고 있다고 하는데, 이건 사람이 좀 더 가까이서 방향을 잡아주면서 클로드가 작업의 상당 부분을 처리하는 형태를 말한다. 다만 완전 자율은 아니고, 어디까지나 사람의 감독 하에 있다는 점은 회사가 거듭 강조하고 있다.

## 클로드 코드 Projects, 병렬 에이전트 구조로 개편

같은 날인 9월 17일, 클로드 코드의 Projects 기능이 베타로 새롭게 개편됐다는 소식도 나왔다. 기존에는 코딩 작업 하나하나를 별도의 대화창에서 따로 처리해야 했다면, 이제는 개발자가 좀 더 큰 목표 하나만 던져주면 클로드가 그 안에서 동시에 처리할 수 있는 하위 작업들을 스스로 나눠서 여러 스레드로 병렬 실행한다. 이 스레드들은 "공유 메모리(shared memory)"를 통해 서로의 결정과 맥락을 참고할 수 있고, 프로젝트에 업로드한 파일이나 클로드가 만든 산출물은 "프로젝트 라이브러리"에 모아서 관리된다. 코디네이터 역할을 하는 상위 에이전트가 전체 작업을 조율하는 구조라고 보면 될 것 같다. 다만 스레드 하나하나가 사실상 독립된 클로드 코드 세션이기 때문에, 사용량(usage) 소모가 꽤 빠르게 늘어날 수 있다는 점을 주의하라는 언급도 여러 매체에서 함께 나왔다. 일단 베타는 Pro·Max 플랜 중 일부 사용자부터 시작한다고 한다.

## 오늘의 생각

두 소식을 나란히 놓고 보니 결국 같은 이야기를 다른 층위에서 하고 있다는 생각이 든다. 회사 내부적으로는 클로드가 다음 모델을 만드는 R&D 작업의 4분의 1 이상을 스스로 이끌 만큼 "위임받는 범위"가 넓어지고 있고, 사용자에게 제공하는 도구인 클로드 코드 Projects 역시 사람이 일일이 작업을 쪼개서 지시하던 구조에서 벗어나 "큰 목표만 던지면 알아서 나눠서 처리하는" 방향으로 가고 있다. 둘 다 결국 "사람이 얼마나 작게 쪼개서 지시해야 하는가"의 단위가 점점 커지고 있다는 신호다. 다만 사용량 경고처럼 "편해진 만큼 비용도 그만큼 빨리 나간다"는 현실적인 이야기도 같이 따라붙는 걸 보면, 자율성이 늘어나는 것과 그걸 감당할 수 있는 비용·신뢰 구조가 따라오는 건 별개의 문제라는 걸 새삼 느낀다.

---

**출처**
- [Anthropic says its chatbot Claude is taking over the work of building its own successor - The Washington Post](https://www.washingtonpost.com/technology/2026/09/17/anthropic-says-its-chatbot-claude-is-taking-over-work-building-its-own-successor/)
- [Anthropic's Claude is building its own next version, company says - The Korea Times](https://www.koreatimes.co.kr/world/20260918/anthropic-says-its-model-claude-is-helping-to-build-the-next-version-of-itself)
- [Anthropic Redesigns Claude Code Projects to Coordinate Agent Threads - Unite.AI](https://www.unite.ai/anthropic-redesigns-claude-code-projects-to-coordinate-agent-threads/)
- [Anthropic opens parallel Claude Code Projects beta to select Pro and Max users - MLQ News](https://mlq.ai/news/anthropic-opens-parallel-claude-code-projects-beta-to-select-pro-and-max-users/)
