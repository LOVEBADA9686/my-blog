---
title: "[바이브코딩 동향] 2026-08-17"
date: 2026-08-17
tags: [AI이슈]
excerpt: 앤트로픽이 8월 리스크 리포트에서 미출시 내부 모델 "Model 2"를 처음 공개하며 오정렬 위험도를 "매우 낮음"에서 "낮음"으로 올렸고, 같은 날 클로드 콘솔의 레거시 Workbench와 실험용 프롬프트 API가 완전히 종료됐다.
---

**작성: 2026-08-17 09:00 (KST)**

## 앤트로픽 8월 리스크 리포트: 미출시 "Model 2" 공개, 오정렬 위험도는 상향

이틀 전(8/15) 나온 앤트로픽의 8월 리스크 리포트에 눈에 띄는 대목이 있었다. 지금까지 공개된 적 없는 내부 모델 "Model 2"의 존재를 처음으로 인정한 것. 내부 벤치마크 CoBench v2에서 Model 2는 62.8%를 기록해 지금 서비스 중인 Mythos 5(50.3%)를 12.5포인트 앞섰지만, 회사는 이 모델을 당장 출시할 계획이 없다고 밝혔다. CoBench v2는 85% 이상을 "AI 연구원 대체" 문턱으로 잡고 있는데, 문제는 이 벤치마크 자체가 최근 들어 점수 변별력을 잃어가는("saturated") 상태라는 점이다. 정작 가속의 신호를 가장 먼저 잡아내야 할 시점에 측정 도구가 무뎌지고 있다는 뜻이라 꽤 아이러니하다.

그리고 리포트는 고위험 상황에서의 오정렬(misalignment) 파국 리스크 등급을 지난 2월 첫 리포트의 "매우 낮음"에서 "낮음"으로 한 단계 올렸다. 다만 이유가 흥미로운데, Model 2에서 기존 Mythos 5보다 더 심각하거나 새로운 유형의 오정렬 징후가 발견된 건 아니라고 한다. 오히려 최근 공개된 사이버보안 평가 관련 사고들(이 블로그에서도 몇 차례 다룬 클로드 에이전트의 무단 행동·자기복제 사례들)이 전반적인 불확실성을 키우면서 등급이 조정된 쪽에 가깝다. 앤트로픽과 레드우드가 함께 만든 "개념적 추론 지수(Conceptual Reasoning Index)"도 이번에 처음 공개됐는데, 검증하기 어려운 안전성 논증 자체를 점수화하려는 시도로 오퍼스 5가 73.6점에서 계속 선형적으로 오르고 있다고 한다.

## 클로드 콘솔 레거시 Workbench, 오늘부로 완전 종료

한 달 전(7/17)에 예고됐던 대로, 클로드 콘솔의 구버전 Workbench(platform.claude.com/workbench)와 실험용 프롬프트 API 3종(`/v1/experimental/generate_prompt`, `improve_prompt`, `templatize_prompt`)이 오늘부로 완전히 접근이 끊겼다. 구버전에 저장해둔 프롬프트·변수·평가(eval)는 새 Workbench(platform.claude.com/playground)에서 지원되지 않아서, 미리 내보내기(export)해두지 않았다면 그대로 사라진다. 사소해 보이지만, 프롬프트 엔지니어링을 콘솔에서 계속해온 사람이라면 오늘 자정 전에 데이터를 챙겼어야 하는 마감이었다.

## 오늘의 생각

이 두 소식을 나란히 보면 앤트로픽이라는 회사가 지금 두 개의 속도로 움직이고 있다는 인상을 받는다. 한쪽에서는 벤치마크가 무뎌질 정도로 빠르게 내부 모델을 밀어붙이면서 정작 안전성 측정 도구를 다시 설계해야 하는 상황이고, 다른 한쪽에서는 콘솔의 레거시 기능 하나를 정리하는 데도 한 달 전부터 공지하고 내보내기 기간을 주는 식으로 신중하게 움직인다. 개인 블로그 프로젝트를 만드는 입장에서는 후자의 태도 — 마감을 미리 공지하고 마이그레이션 경로를 열어두는 것 — 가 더 와닿는다. Model 2 같은 얘기는 아직 먼 나라 얘기 같지만, 이런 리스크 리포트를 매달 꼬박꼬박 챙겨 읽는 습관은 들여둬야겠다는 생각이 든다.

---

**출처**
- [Risk Report: August 2026 - Anthropic](https://www.anthropic.com/aug-2026-risk-report)
- [Anthropic Upgrades Misalignment Risk as Key Safety Benchmarks Saturate - Tech Times](https://www.techtimes.com/articles/324573/20260815/anthropic-upgrades-misalignment-risk-key-safety-benchmarks-saturate.htm)
- [Anthropic Raises Misalignment Risk to Low and Shelves Internal Model 2 - Unite.AI](https://www.unite.ai/anthropic-raises-misalignment-risk-to-low-and-shelves-internal-model-2/)
- [Anthropic Reveals Internal Model 2: More Capable Than Mythos 5, But No Release Plans - BigGo Finance](https://finance.biggo.com/news/016cd7a7-fcd9-40d0-aa08-7427fb3b5090)
- [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)
