---
title: "[바이브코딩 동향] 2026-11-25"
date: 2026-11-25
tags: [AI이슈]
excerpt: 앤트로픽 연구원이 클로드와 함께 리만 가설을 증명했다고 주장했는데, 증명 전체가 Lean 코드 25만 페이지 분량이라 사람이 읽을 수 없다는 게 논란이 됐다. 올해 내내 이어진 "AI가 유명 수학 난제를 풀었다"는 발표들의 흐름 속에서 이번 건을 짚어봤다.
---

**작성: 2026-11-25 09:00 (KST)**

이번 주는 코드 PR 얘기 대신 수학 얘기로 시작하게 됐다. 앤트로픽 연구원이 "클로드와 함께 리만 가설을 풀었다"고 발표했는데, 그 증명이라는 게 사람이 읽을 수 없는 분량이라 "이게 증명인가, 아니면 그냥 AI가 쏟아낸 슬롭(slop)인가" 논쟁이 붙었다. 바이브 코딩에서 늘 나오는 "내가 검증할 수 없는 결과물을 얼마나 믿어야 하나" 문제가 수학계에서 똑같이 터진 모양새라 오늘 정리해본다.

## 클로드가 리만 가설을 풀었다? — 25만 페이지짜리 증명 논란

11/20(현지 기준), 앤트로픽 소속 수학자이자 하버드 주니어 펠로우인 레벤트 알퓌어게(Levent Alpöge)가 "클로드와 함께 작업하며 리만 가설의 증명을 발견했다고 믿는다"는 4쪽짜리 노트를 공개했다. 리만 가설은 1859년 리만이 제시한 이래 167년째 미해결로 남아 있던, 밀레니엄 7대 난제 중 하나다. 그런데 공개된 증명 자체는 논문 형태가 아니라 Lean 4로 작성된 형식 증명이었고, 보도마다 수치가 다르긴 하지만 17만 5천여 개의 Lean 파일, 혹은 25만 페이지 분량이라는 식으로 전해진다. 일반 수학자가 읽고 이해할 수 있는 분량이 아니라서, The Register는 기사 제목에서 이를 "슬롭(slop)"이라고 불렀다. 11/21에는 Lean FRO와 Mathlib 이니셔티브가 "알퓌어게의 증명이 맞다고 전적으로 확신한다(full confidence)"는 성명을 냈다고 전해지는데, 이건 기계적인 Lean 검증을 통과했다는 뜻이고, 수학자들이 그 안의 아이디어를 실제로 이해하고 동의했다는 뜻은 아니다. 옥스퍼드의 제임스 메이너드(James Maynard)는 "이게 완전히 검증된다면 분명 수학사에 남을 사건"이라면서도, "아무리 낙관적으로 봐도 이런 접근법들이 실제 리만 가설을 다루는 경로는 없다"고 신중한 반응을 보였다고 한다. 공개 시점이 앤트로픽의 사상 최대 규모 나스닥 상장 바로 다음 날이었다는 점도 여러 매체가 "우연이겠지만"이라는 단서를 달며 짚었다.

## 올해 내내 이어진 "AI가 난제를 풀었다" 발표들

이번 건이 유독 눈에 띄는 이유는 혼자가 아니기 때문이다. 앤트로픽은 지난 8월에도 미공개 클로드 리서치 모델이 리만 가설과 관련된 오래된 하한값을 41.6%에서 67.2%로 끌어올렸다고 발표했는데, 그때는 "이 결과로 리만 가설 자체를 증명할 수 있을 거라 기대하지 않는다"고 스스로 선을 그었다. 같은 시기 OpenAI 쪽도 에르되시(Erdős) 문제 수백 개를 풀었다고 발표하며 수학 난제 공략 경쟁에 뛰어들었는데, 공개된 결과 중 상당수는 아직 Lean으로 검증되지 않았고 OpenAI 스스로 "검증 안 된 작업에는 오류가 있을 수 있다"고 인정했다. 두 회사 모두 "모델이 몇 주 안에 몇백 건을 쏟아냈다"는 숫자를 자랑하는 쪽으로 가고 있는데, 정작 그 결과를 한 줄 한 줄 읽고 동의할 수 있는 사람의 수는 늘지 않고 있다는 게 문제다.

## 오늘의 생각 — 검증할 수 없는 결과물을 믿는 법

바이브 코딩을 하다 보면 결국 이 지점에 늘 부딫힌다. AI가 짜준 코드가 돌아가긴 하는데, 그걸 한 줄씩 다 이해하고 책임질 수 있냐는 것. 이번 리만 가설 소동은 같은 문제가 수학이라는, 코드보다 훨씬 엄밀해야 하는 영역에서 벌어진 경우다. Lean이라는 자동 검증기가 "문법적으로 맞다"고 확인해준 것과, 수학자 공동체가 "이 아이디어가 말이 된다"고 동의하는 것 사이에는 아직 큰 간극이 있다. 25만 페이지짜리 증명을 받아 든 수학자들의 심정이 거대한 PR 하나를 떠안은 리뷰어의 심정과 크게 다르지 않을 것 같다. 결과물의 크기와 속도가 검증 능력을 앞질러 버리면, "맞는지 틀린지"보다 "누가 이걸 다 확인할 건지"가 더 큰 질문이 된다는 걸 이번 건이 잘 보여준다.

---

**출처**
- [Anthropic says Claude solved an age-old math problem, but the written proof is 250,000 pages of slop - The Register](https://www.theregister.com/ai-and-ml/2026/11/24/anthropic-says-claude-solved-an-age-old-math-problem-but-the-written-proof-is-250000-pages-of-slop/5311775)
- [Anthropic mathematician claims to have solved 167-year-old math problem with Claude - Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-mathematician-claims-to-have-solved-167-year-old-math-problem-with-claude-riemann-hypothesis-proof-allegedly-discovered-but-remains-unconfirmed)
- [Anthropic mathematician claims AI helped solve a 167-year-old math mystery - IBM Think](https://www.ibm.com/think/news/anthropic-claude-riemann-hypothesis-math-proof)
- [Anthropic employee claims to have proven the most famous math problem using Claude - Engadget](https://www.engadget.com/2324141/anthropic-employee-claims-to-have-proven-the-most-famous-math-problem-using-claude/)
- [No, AI Didn't Just Solve the Thorniest Problem in Math - Scientific American](https://www.scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math/)
- [AI may have solved math's greatest mystery. Can humans understand the answer? - Science.org](https://www.science.org/content/article/ai-may-have-solved-math-s-greatest-mystery-can-humans-understand-answer)
- [An unreleased Anthropic model made progress on one of math's biggest unsolved problems - TechCrunch](https://techcrunch.com/2026/08/11/an-unreleased-anthropic-model-made-progress-on-one-of-maths-biggest-unsolved-problems/)
- [AI is changing math - Axios](https://axios.com/2026/09/08/ai-math-anthropic-openai-google)
