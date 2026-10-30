---
title: "[바이브코딩 동향] 2026-10-30"
date: 2026-10-30
tags: [AI이슈]
excerpt: 앤트로픽이 6개 신약개발 파트너사와의 협업 성과를 공개했는데, 클로드 코드로 CAR-T 치료제 설계를 70% 줄이거나 항체 3만5천 개를 한 달 만에 설계한 사례가 눈에 띈다. 같은 주 보안 업계에서는 클로드 코드·커서·코파일럿 같은 AI 코딩 툴의 로그인 토큰·SSH 키를 노리는 신종 악성코드 소식도 나왔다.
---

**작성: 2026-10-30 09:00 (KST)**

오늘은 "AI가 코드를 써서 할 수 있는 일"의 양극단을 보여주는 소식 두 개를 골랐다. 하나는 클로드가 신약 개발 현장까지 파고들어 실제 성과를 냈다는 얘기고, 다른 하나는 그 똑같은 AI 코딩 툴들이 공격자들의 새로운 먹잇감이 되고 있다는 얘기다.

## 클로드로 신약 개발 가속화: CAR-T 70% 압축, 항체 3만5천 개 설계

10월 27일 앤트로픽이 생명과학팀 명의로 6개 신약개발 파트너사와의 협업 초기 성과를 공개했다. 아직 대부분 전임상 단계지만 구체적인 숫자들이 꽤 인상적이다. 제너레이트 바이오메디신스에서는 과학자 6명이 클로드 코드를 써서 CAR-T 세포치료제(원래 혈액암에만 효과적이던 치료법)의 유전자 설계 일부를 다시 짰는데, 가장 좋은 결과물은 표준판보다 길이가 약 70% 짧으면서도 면역세포가 암을 알아보는 수용체를 10배 가까이 더 많이 만들게 했고, 종양세포를 더 효율적으로 죽이면서 면역세포 활성도 더 오래 유지시켰다. 다이버전스 랩스에서는 클로드가 거의 자율적으로 한 달 만에 항체 설계 약 3만5천 개를 생성했고, 그중 3개는 식품 알레르기 표준 치료제보다 IgE를 더 효과적으로 떼어내는 결과를 보였다. 빅햇 바이오사이언스에서는 클로드가 항체 변이체 약 1,010개를 10주 만에 제안·검증했는데, 기존에 쓰던 열안정성 측정 지표 자체가 잘못됐다는 걸 찾아내 새 지표를 제안하기도 했다고 한다. 엔베다에서는 제조 문서 1,061쪽을 검토시켰더니 사람 검토자가 찾은 문제 11건을 전부 찾아내고 7건을 추가로 더 찾았으며, 검토 시간은 25시간에서 3시간 이하로 89% 줄었다. 앤트로픽은 아예 미스릴 메디슨이라는 1인 회사를 인수해 직접 신약 개발에도 뛰어들었는데, 창업자가 클로드에게 11개 외부 연구실과의 계약·물류·실험 조율을 맡기면서 18개월 만에 희귀 근육병 치료 후보물질을 마우스 실험 단계까지 끌어올렸다고 한다.

## AI 코딩 툴 겨냥한 신종 악성코드 "아오키가하라" 등장

좋은 소식만 있는 건 아니다. 보안 업계에서는 10월 중순부터 클로드(코드·데스크톱)·챗GPT 데스크톱·코덱스·커서·윈드서프·깃허브 코파일럿·제미나이 CLI·젯브레인스 AI 어시스턴트 같은 AI 코딩 툴을 겨냥한 "아오키가하라(Aoki)"라는 정보 탈취형 악성코드 소식이 나왔다. 시만텍은 10월 15일, 체크포인트는 10월 23일에 각각 분석 리포트를 냈는데, 둘 다 이 악성코드가 브라우저·크립토 지갑·비밀번호 관리자뿐 아니라 AI 코딩 툴의 로그인 세션·설정 파일까지 노리는 전용 수집 모듈을 갖고 있다고 지적했다. 구체적으로는 `.claude.json`, 클로드 데스크톱 쿠키, 챗GPT 쿠키, 코덱스의 `config.toml`/`.env` 파일, 커서의 로컬 상태 데이터베이스(채팅 맥락·코드 스니펫이 담길 수 있음) 등을 훑는다고 한다. 연구자들은 소스코드 자체보다는 인증 토큰과 세션 데이터 탈취가 주목적이라고 보는데, 문제는 이런 토큰이 털리면 공격자가 개발자 신분으로 연결된 깃허브 저장소·클라우드 서비스·CI/CD·API 할당량까지 건드릴 수 있다는 점이다("LLM재킹"이라 부른다). 비슷한 시기에 "킨스(Kynx)"라는 또 다른 정보 탈취 악성코드도 클로드 코드·커서·코파일럿·윈드서프 등 8개 AI 코딩 툴을 노리는 전용 모듈("DevGrabber")을 갖고 있다는 리포트도 나왔다.

## 오늘의 생각

두 소식을 나란히 놓고 보면 "AI 코딩 에이전트가 진짜 일을 하기 시작했다"는 증거와 "그만큼 노려지는 표면도 늘었다"는 증거가 동시에 쌓이고 있다는 느낌이다. 신약 개발 사례들은 클로드 코드가 단순 자동완성을 넘어 몇 주·몇 달짜리 연구 사이클을 통째로 돌릴 수 있다는 걸 보여주는데, 그 힘이 로컬에 저장된 `.claude.json` 같은 설정 파일, 토큰, API 키에 담겨 있다 보니 공격자 입장에서도 당연히 매력적인 타깃이 되는 셈이다. 바이브코딩 하는 입장에서는 신약 개발 뉴스에 감탄만 하기보다, 내 컴퓨터에 깔린 AI 코딩 툴의 토큰·세션 파일이 얼마나 쉽게 털릴 수 있는지 한 번쯤 점검해보는 게 맞는 균형일 것 같다.

---

**출처**
- [Early progress on accelerating drug development with Claude - Anthropic](https://anthropic.com/research/early-progress-drug-development)
- [Anthropic partners with six companies to push Claude into drug discovery - Crypto Briefing](https://cryptobriefing.com/anthropic-claude-drug-discovery-partnerships/)
- [How Anthropic & Novo Will Use Claude AI for Drug Discovery - AI Magazine](https://aimagazine.com/news/how-anthropic-novo-will-use-claude-ai-for-drug-discovery)
- ['Aokigahara' Stealer Targets 'Developer Keyrings' & AI Assistants - Dark Reading](https://darkreading.com/endpoint-security/aokigahara-stealer-developer-keyrings-ai-assistants)
- [Aoki Infostealer Steals AI Assistant Credentials - Let's Data Science](https://letsdatascience.com/news/aoki-infostealer-steals-ai-assistant-credentials-07830031)
- [Kynx Infostealer Ships With Dedicated Module for Stealing Data From AI Coding Tools - Expert Insights](https://expertinsights.com/news/kynx-infostealer-stealing-data-from-ai-coding-tools)
