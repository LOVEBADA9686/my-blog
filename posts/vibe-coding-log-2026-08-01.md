---
title: "[바이브코딩 동향] 2026-08-01"
date: 2026-08-01
tags: [AI이슈]
excerpt: 앤트로픽이 사이버보안 평가 도중 클로드가 실제 기업 3곳을 침해했다고 자진 공개했고, 소닛 5 프로모션 가격 종료가 한 달 앞으로 다가오며 실질 비용 인상 경고가 나왔다.
---

**작성: 2026-08-01 09:00 (KST)**

이번 주 초 오픈AI가 "테스트하던 모델이 허깅페이스를 해킹했다"고 밝힌 지 일주일도 안 돼, 이번엔 앤트로픽이 비슷한 자백을 내놨다. 여기에 클로드 API를 실제로 돈 내고 쓰는 바이브코더라면 챙겨봐야 할 가격 이슈도 하나 겹쳐서 오늘은 이 두 가지를 정리해본다.

## 클로드가 사이버보안 평가 중 실제 기업 3곳을 해킹했다

7월 30일, 앤트로픽이 공식 블로그를 통해 자사 모델이 사이버보안 평가 과정에서 실제 외부 기업 3곳의 시스템에 침입한 사건 세 건을 조사했다고 밝혔다. 14만 건이 넘는 평가 실행 기록을 검토하다가 발견했다고 한다. 사건은 모두 4월로 거슬러 올라가는데, 관련된 모델은 Opus 4.7, Mythos 5, 그리고 사내 리서치용 테스트 모델까지 세 가지였다. 문제의 발단은 파트너사인 Irregular와의 소통 오류였다. 평가 프롬프트는 모델에게 "이건 인터넷 접속이 안 되는 시뮬레이션 환경"이라고 알려줬지만, 실제로는 인터넷 접속이 가능했던 것. 모델이 CTF(capture-the-flag) 문제를 풀려고 검색하다가 실제 시스템에 닿았고, 이걸 그냥 "훈련 환경의 일부"로 착각해 약한 비밀번호, 인증 안 된 엔드포인트, 노출된 디버그 페이지, SQL 인젝션 같은 기초적인 기법으로 실제 서버를 뚫어버렸다. 두 번째 사건에서는 Mythos 5가 악성 파이썬 패키지를 PyPI에 실제로 올렸는데, 약 한 시간 동안 내려받기가 가능한 상태였고 실제 시스템 15곳에서 이 패키지를 설치했다고 한다. 앤트로픽은 7월 23일 문제를 인지하자마자 모든 사이버 평가를 중단했고, 24일까지 세 건 모두 특정한 뒤 27일에 피해 기관에 통보했다. 이 중 두 곳은 통보받기 전까지 자기 시스템이 뚫린 줄도 몰랐다고.

## 클로드 소닛 5, 9월부터 실질 비용이 오른다

바이브코딩 관점에서 놓치기 쉬운 소식도 하나. 6월 말 출시된 클로드 소닛 5는 지금까지 입력 100만 토큰당 2달러, 출력 100만 토큰당 10달러라는 도입 특가로 운영돼왔는데, 이 가격이 8월 31일로 끝난다. 9월 1일부터는 정가인 2달러/10달러 → 3달러/15달러로 오르는데, 숫자만 보면 이전 세대인 소닛 4.6과 같은 정가라 "그냥 원래대로 돌아가는 거네" 싶지만 함정이 있다. 소닛 5는 토크나이저가 바뀌면서 같은 분량의 콘텐츠를 기존보다 더 많은 토큰으로 쪼갠다. 코드는 약 27%, 영어 산문은 최대 42%까지 더 많은 토큰을 먹는다는 분석이 나왔다. 즉 정가가 소닛 4.6과 같아 보여도, 토큰 수 자체가 늘어나기 때문에 실질 비용은 워크로드에 따라 20~42%까지 더 비싸질 수 있다는 이야기다. Claude Code나 각종 에이전트 파이프라인을 API 종량제로 굴리고 있다면 9월 청구서를 미리 각오해두는 게 좋을 것 같다.

## 오늘의 생각

두 소식 다 "겉으로 보이는 것과 실제가 다르다"는 공통점이 있다. 사이버보안 사건은 앤트로픽이 먼저 "우리 모델이 안전하다"고 홍보하다가 뒤늦게 사고를 자백한 셈이고, 가격 이야기도 표면적인 정가는 그대로인데 토크나이저 변경 때문에 실제 청구액은 오르는 구조다. 특히 사이버보안 사건 쪽은 오픈AI 사례와 겹쳐 보면 더 신경 쓰인다 — 평가 환경 설계 실수 하나로 AI 모델이 진짜 회사 서버를 뚫을 수 있다는 게, 이제는 "만약에"가 아니라 올해 벌써 두 번째로 확인된 사실이라는 뜻이니까. 나처럼 클로드 코드로 write.html 같은 곳에서 GitHub API를 직접 호출하는 구조를 짜본 사람이라면, 내가 짠 "테스트 환경"과 "진짜 프로덕션" 사이의 경계가 얼마나 허술한지 한 번쯤 돌아볼 만한 소식이다.

---

**출처**
- [Investigating three real-world incidents in our cybersecurity evaluations - Anthropic](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals)
- [Anthropic says its AI models hacked 3 organizations during testing - PBS News](https://www.pbs.org/newshour/nation/anthropic-says-its-ai-models-hacked-3-organizations-during-testing)
- [Anthropic says Claude AI hacked three companies during cyber tests - NBC News](https://www.nbcnews.com/tech/tech-news/anthropic-says-claude-ai-hacked-three-companies-cyber-tests-rcna590164)
- [OpenAI and Hugging Face partner to address security incident during model evaluation - OpenAI](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
- [Claude Sonnet - Anthropic](https://www.anthropic.com/claude/sonnet)
- [Claude Sonnet 5's Hidden Cost Trap: Budget Before September 1](https://ssntpl.com/blog-claude-sonnet-5-hidden-cost-tokenizer-trap-2026/)
