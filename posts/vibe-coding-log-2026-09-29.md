---
title: "[바이브코딩 동향] 2026-09-29"
date: 2026-09-29
tags: [AI이슈]
excerpt: 클로드 소넷 5.5가 오퍼스 5.5 출시 일주일도 안 돼 같은 가격에 30% 빠르고 저렴하게 나왔고, 앤트로픽의 "프로젝트 스왑" 실험은 클로드 에이전트가 5분 대화만으로 주인의 취향을 61% 맞혔다는 결과를 공개했다.
---

**작성: 2026-09-29 09:00 (KST)**

이번 주말 지나고 보니 두 소식이 눈에 들어왔다. 하나는 코딩 성능을 정면으로 겨냥한 신규 모델 소넷 5.5 출시고, 다른 하나는 클로드 에이전트가 사람 대신 물건을 거래하면 어떤 일이 벌어지는지를 실험한 앤트로픽의 리서치다. 둘 다 방향은 다르지만 "AI에게 얼마나 맡길 수 있는가"라는 같은 질문을 건드리고 있다는 생각이 든다.

## 클로드 소넷 5.5 출시, 가격은 그대로인데 코딩 성능은 확 뛰었다

9월 28일 앤트로픽이 클로드 소넷 5.5를 출시했다. 오퍼스 5.5가 나온 지 일주일도 안 돼 5.5 패밀리의 두 번째 모델이 나온 셈이다. 가격은 소넷 5와 동일하게 입력 토큰 100만 개당 2달러, 출력 토큰 100만 개당 10달러를 유지하면서, 앤트로픽 자체 테스트 기준 출력 속도는 30% 이상 빨라지고 작업당 비용은 최대 30% 줄었다고 한다. 에이전틱 코딩 벤치마크인 Terminal-Bench 4.0에서 소넷 5.5는 70.6%를 기록했는데, 소넷 5가 10.3%였던 걸 감안하면 거의 7배 뛴 수치다. 참고로 최고 성능 모델인 오퍼스 5.5는 최고 effort 설정에서 66.4%를 기록해, 이제는 소넷이 특정 코딩 작업에서 오퍼스보다도 높은 점수를 낸다.

앤트로픽은 소넷 5.5를 "복잡한 판단이 필요한 일을 하는 오퍼스 5.5를 보완하는, 더 빠르고 저렴한 모델"이라고 설명하면서 버그 수정이나 잘 정의된 일상적 작업, 문서·슬라이드·스프레드시트 작업에 강하다고 소개했다. AWS·구글 클라우드·마이크로소프트 애저를 포함한 모든 플랫폼에서 `claude-sonnet-5-5`로 쓸 수 있고 데이터 무보존(zero data retention) 옵션도 제공한다. 눈에 띄는 건 사이버 안전장치인데, 소넷 5.5의 사이버 공격 능력이 오퍼스 5와 맞먹는다고 판단해 소넷 계열 모델로는 처음으로 최상위 모델에 쓰던 사이버 관련 안전장치와 폴백을 함께 적용했다고 한다. 바이브코딩 도구들이 대부분 소넷급 모델을 기본값으로 쓰는 걸 생각하면, 가격은 그대로인데 코딩 벤치마크가 크게 오른 이번 업데이트는 클로드 코드나 다른 코딩 에이전트를 쓰는 사람들이 체감할 변화가 꽤 클 것 같다.

## 앤트로픽 "프로젝트 스왑": 내 취향을 대신 흥정하는 에이전트

9월 24일 앤트로픽은 "프로젝트 스왑"이라는 실험 결과를 공개했다. 지난여름 샌프란시스코·뉴욕·런던·시애틀·워싱턴DC·더블린 등 6개 도시의 앤트로픽 직원 201명이 참여해, 각자 나눠주고 싶은 책을 가져오고 클로드와 5분 정도 자기 독서 취향에 대해 대화한 뒤, 그 대화만으로 만들어진 클로드 에이전트를 거래장(trading floor)에 내보내 다른 사람의 에이전트와 흥정·거래를 붙이는 방식으로 진행됐다.

결과가 흥미롭다. 참가자들이 미리 10권의 책에 자기 선호도로 순위를 매겨 놓고 비교했더니, 에이전트가 매긴 순위가 실제 주인의 순위와 61%의 쌍(pair)에서 일치했다고 한다. 단 5분짜리 대화만으로 이 정도 정확도가 나온 셈이다. 연구팀은 같은 거래장을 모델과 지시문(instruction)을 바꿔가며 수십 번 다시 돌려봤는데, 에이전트에게 준 지시문보다 어떤 모델을 썼는지가 협상 결과에 더 큰 영향을 미쳤고, 더 강력한 모델을 쓴 시장일수록 거래가 더 효율적으로 이뤄졌다고 한다. 실제 시장이 완전히 효율적이지 못했던 이유는 거래 방식 자체의 문제가 아니라 에이전트가 참가자에 대해 갖고 있던 정보가 부족했기 때문이라는 분석도 곁들여졌다. 책을 받은 참가자 대부분은 결과에 만족했고, 평균적으로 연간 도서 예산의 3분의 1 정도는 클로드에게 맡기고 쓰게 하겠다고 답했다고 한다.

## 오늘의 생각

두 소식을 나란히 놓고 보면 결국 같은 흐름 위에 있다는 생각이 든다. 소넷 5.5는 "에이전트가 코드를 얼마나 정확하고 빠르게 짤 수 있는가"를 밀어붙인 업데이트고, 프로젝트 스왑은 "그렇게 만들어진 에이전트에게 내 취향과 판단까지 얼마나 맡길 수 있는가"를 실험한 연구다. 바이브코딩도 결국 "내가 하려던 일을 AI에게 얼마나 믿고 위임하느냐"의 문제라서, 모델 성능이 올라가는 것과 에이전트의 판단을 신뢰하는 실험이 같은 시기에 나온 게 우연 같지 않다. 개인적으로는 5분 대화로 취향을 61%까지 맞혔다는 결과가 신기하면서도, 나머지 39%가 실제 코딩 작업에서라면 어떤 실수로 이어질지가 더 궁금해진다.

---

**출처**
- [Anthropic launches Claude Sonnet 5.5 with 30% cost reduction per-task due to faster speeds and fewer tool calls - VentureBeat](https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-5-with-30-cost-reduction-per-task-due-to-faster-speeds-and-fewer-tool-calls)
- [Anthropic debuts Claude Sonnet 5.5 running 30% faster than the previous generation AI model - SiliconANGLE](https://siliconangle.com/2026/09/28/anthropic-debuts-claude-sonnet-5-5-running-30-faster-than-the-previous-generation-ai-model/)
- [Anthropic Releases Claude Sonnet 5.5 at Unchanged Sonnet 5 Pricing - Unite.AI](https://www.unite.ai/anthropic-releases-claude-sonnet-5-5-at-unchanged-sonnet-5-pricing/)
- [Project Swap: What happens when agents trade for us? - Anthropic](https://www.anthropic.com/research/project-swap)
- [Anthropic's Project Swap Tests Claude Agents in AI-Driven Markets - Bitcoin Ethereum News](https://bitcoinethereumnews.com/tech/anthropics-project-swap-tests-claude-agents-in-ai-driven-markets/)
