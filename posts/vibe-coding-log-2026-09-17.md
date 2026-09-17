---
title: "[바이브코딩 동향] 2026-09-17"
date: 2026-09-17
tags: [AI이슈]
excerpt: 앤트로픽이 AI 안전성 논란 속에서도 나스닥 10월 상장(목표 밸류에이션 약 2조 달러) 계획을 그대로 밀어붙이는 한편, 클로드 코드에는 스킬/플러그인이 실제로 효과가 있는지 6가지 채점 방식과 CI 게이트로 검증하는 `claude plugin eval` 명령이 추가됐다.
---

**작성: 2026-09-17 09:00 (KST)**

오늘은 회사 차원의 큰 그림(IPO)과 클로드 코드의 실무 도구(플러그인 검증) 양쪽에서 눈에 띄는 소식이 있어서 정리해본다.

## 앤트로픽, 안전성 논란 속에서도 나스닥 10월 상장 강행

9월 14일 Axios 보도에 따르면 앤트로픽은 나스닥 상장을 확정하고 10월 상장을 목표로 절차를 밟고 있다. 목표 밸류에이션은 약 2조 달러 수준으로 거론된다. 흥미로운 건 타이밍이다. 같은 주에 OpenAI의 샘 올트먼은 "지금 같은 안전성 논란 시기에 상장하는 건 시기상조"라며 2026년 상장을 하지 않겠다고 선을 그었는데, 앤트로픽은 정반대 행보를 택한 셈이다. 보도에 따르면 앤트로픽 관계자들은 오히려 최근 며칠간의 안전성 논란이 상장의 명분을 더 강화했다는 입장이라고 한다 — 상장사가 되면 공시 의무 등으로 투명성이 높아지고, 그게 곧 안전성 개선으로 이어진다는 논리다. 실제로 9월 초에는 OpenAI와 앤트로픽 양쪽에서 일했던 한 연구자가 공개적으로 퇴사하며 "업계 전체가 자기개선형 시스템을 향해 질주하면서 우리 목숨을 걸고 도박하고 있다"는 취지의 강한 비판을 남기기도 했다. 이런 분위기 속에서 같은 이슈를 놓고 두 회사가 정반대 카드를 꺼내든 모습이 재미있다.

## 클로드 코드에 `claude plugin eval` — 플러그인이 진짜 도움이 되는지 채점한다

9월 11일 공개된 클로드 코드 2.1.269에는 `claude plugin eval`이라는 새 명령이 추가됐다. MarkTechPost 리뷰를 보면 이 명령의 핵심은 "이 플러그인/스킬이 실제로 쓸모가 있는가"를 숫자로 답하게 만드는 데 있다. regex, tool_order, tool_used, file_exists, llm, baseline 이렇게 6가지 채점 방식을 지원하는데, 이 중 llm과 baseline은 별도의 판정용 모델을 호출해서 과금이 발생하고 나머지 4개는 무료다. 가장 흥미로운 부분은 "베이스라인 비교"다. 같은 테스트 케이스를 플러그인을 끈 상태(맨몸 모델)로도 한 번 더 돌려서, 단순 점수가 아니라 "플러그인이 있을 때와 없을 때의 차이(델타)"를 보여준다. 예를 들어 스킬 설명이 애매해서 클로드가 그 스킬을 아예 트리거하지 않는 경우, 예전 같으면 그냥 "그럭저럭 통과"처럼 보일 수 있었는데 이제는 tool_used 채점이 실패로 뜨면서 델타가 0에 가깝다는 게 바로 드러난다. `--threshold`로 CI 파이프라인에 게이트를 걸 수 있고, `--model`/`--judge-model`로 모델을 고정하거나 `--max-cost-usd`로 비용 상한을 걸 수도 있어서, 팀 단위로 스킬/플러그인을 배포하기 전에 회귀 테스트처럼 돌릴 수 있는 도구가 생긴 셈이다.

## 오늘의 생각

두 소식을 나란히 보면 결이 묘하게 통한다. 앤트로픽은 회사 차원에서 "투명하게 검증받는 게 곧 신뢰"라는 베팅을 하고 있고, 클로드 코드는 도구 차원에서 "이 스킬이 진짜 효과가 있는지 숫자로 증명해라"는 방향으로 가고 있다. 바이브코딩 생태계가 커질수록 "그냥 되는 것 같다"는 느낌만으로는 부족하고, 뭐든 측정 가능한 형태로 검증하는 문화가 자리잡는 중인 것 같다. 스킬 마켓플레이스가 늘어나는 지금 시점에 plugin eval 같은 도구가 나온 게 우연은 아닐 것이다.

---

**출처**
- [Anthropic IPO won't be slowed by safety uproar - Axios](https://www.axios.com/2026/09/14/anthropic-ipo-safety-openai)
- [Anthropic has chosen Nasdaq for its October IPO, in the week OpenAI ruled one out - TheNextWeb](https://thenextweb.com/news/anthropic-ipo-nasdaq-october-listing)
- [Anthropic Adds Plugin Evals to Claude Code: 6 Grader Types, a No-Plugin Baseline, and a CI Gate for Skills - MarkTechPost](https://www.marktechpost.com/2026/09/11/anthropic-adds-plugin-evals-to-claude-code-6-grader-types-a-no-plugin-baseline-and-a-ci-gate-for-skills/)
- [Test plugins with evals - Claude Code Docs](https://code.claude.com/docs/en/plugin-evals)
