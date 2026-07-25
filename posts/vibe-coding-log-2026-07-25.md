---
title: "[바이브코딩 동향] 2026-07-25"
date: 2026-07-25
tags: [AI이슈]
excerpt: 어제 소문만 무성하던 Claude Opus 5가 정식 출시되며 가격·벤치마크·effort 다이얼이 공개됐고, AMD는 앤트로픽에 최대 50억 달러를 투자하며 MI450 GPU 공급 계약을 맺었다.
---

**작성: 2026-07-25 09:00 (KST)**

어제 글에서 "출시설만 하루 넘게 이어지는 중"이라고 썼던 Claude Opus 5가 결국 어제(7/24) 정식 출시됐다. 소문이 사실로 확인된 김에 실제 스펙을 정리하고, 같은 주에 발표된 AMD의 대규모 투자 소식도 함께 짚어본다.

## Claude Opus 5, 정식 출시 — 가격은 그대로, 효율은 위로

Anthropic이 발표한 Claude Opus 5는 지난달 나온 최상위 모델 Fable 5의 성능에 근접하면서도 가격은 절반 수준이라는 게 핵심 메시지다. 가격은 입력 $5 / 출력 $25 per Mtok로 전작 Opus 4.8과 동일하게 유지됐고(Fable 5는 $10/$50), 대신 저비용·저지연을 원하면 두 배 빠른 패스트 모드를 추가 비용으로 켤 수 있다. Frontier-Bench, GDPval-AA 같은 코딩·업무 벤치마크에서 신기록을 냈다고 하고, low/medium/high 세 단계로 조절 가능한 "effort 다이얼"이 새로 생겨 응답 품질과 비용·속도를 사용자가 직접 저울질할 수 있게 됐다. Claude Max에서는 기본 모델로, Pro에서는 최상위 모델로 바로 전면 적용됐고, 개발자 쪽에는 대화 중간에 프롬프트 캐시를 깨지 않고 사용 가능한 툴을 바꾸는 기능과 위험 신호가 감지된 요청을 자동으로 다른 모델로 우회시키는 베타 기능도 함께 나왔다. 초기 반응은 극과 극인데, 한 엔지니어는 "예전 Opus보다 덜 조급하다"며 여러 방안을 침착하게 제시한다고 호평한 반면, 수백 개 백그라운드 에이전트를 굴리는 대규모 작업에서는 Fable 5보다 여전히 느리고 비효율적이라는 평가도 있었다. 가격은 그대로 두고 효율만 끌어올렸다는 점에서, "일상 업무용 모델"을 표방한 전략이 뚜렷해 보인다.

## AMD, 앤트로픽에 최대 50억 달러 베팅

같은 주 다른 한쪽에서는 AMD와 Anthropic의 대형 파트너십 소식이 있었다. AMD가 Anthropic에 전략적 지분 투자로 최대 50억 달러를 투입하고, 그 대가로 Anthropic은 2027년 상반기부터 AMD의 최신 Instinct MI450 시리즈 GPU를 최대 2기가와트 규모로 도입하기로 했다. 기존에도 Anthropic이 MI355X GPU를 쓰고 있었으니 이번 계약은 그 관계를 한 단계 키운 셈이다. 양사는 Claude를 활용해 AMD GPU용 워크로드를 최적화하고 AMD의 오픈소스 소프트웨어 스택인 ROCm 개발도 함께 가속화하기로 했고, AMD는 반대로 자사 엔지니어링·제품 조직 전반에 Claude를 도입하기로 했다. 발표 이후 AMD 주가는 8% 넘게 뛰었는데, 그동안 AI 인프라 투자가 사실상 엔비디아 독무대였던 데 균열을 내는 신호로 읽히는 분위기다. Anthropic 입장에서는 구글·아마존·엔비디아 칩에 이어 AMD까지 컴퓨팅 공급망을 다변화하는 흐름이라 볼 수 있다.

## 오늘의 생각

이번 주 소식을 나란히 놓고 보면 방향이 하나로 모인다. Opus 5로 "더 싸고 일상적인" 모델을 밀면서, 동시에 AMD 투자로 그 모델을 돌릴 연산 인프라를 최대한 다변화해 확보해두는 모습이다. 프론티어 모델 경쟁만큼이나 "누가 더 싸고 안정적으로 AI를 계속 서비스할 수 있느냐"의 싸움도 이제 본격화되고 있다는 인상을 받았다.

---

**출처**
- [Introducing Claude Opus 5 - Anthropic](https://www.anthropic.com/news/claude-opus-5)
- [Anthropic Launches Claude Opus 5 AI Model for Affordable Workplace Tasks - Bloomberg](https://www.bloomberg.com/news/articles/2026-07-24/anthropic-unveils-more-cost-efficient-model-for-everyday-tasks)
- [Anthropic launches Claude Opus 5, a cheaper AI model for coding, agents and enterprise workflows - VentureBeat](https://venturebeat.com/orchestration/anthropic-launches-claude-opus-5-a-cheaper-ai-model-for-coding-agents-and-enterprise-workflows)
- [Claude Opus 5 - Hacker News](https://news.ycombinator.com/item?id=49038433)
- [AMD and Anthropic Announce Strategic Partnership to Deploy Up to 2 Gigawatts of AMD Instinct MI450 Series GPUs - AMD](https://ir.amd.com/news-events/press-releases/detail/1292/amd-and-anthropic-announce-strategic-partnership-to-deploy-up-to-2-gigawatts-of-amd-instinct-mi450-series-gpus)
- [AMD to invest up to $5 billion in Anthropic as part of computing power deal - CNBC](https://www.cnbc.com/2026/07/22/amd-anthropic-ai-chip-investment.html)
