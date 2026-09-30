---
title: "[바이브코딩 동향] 2026-09-30"
date: 2026-09-30
tags: [AI이슈]
excerpt: 어제 클로드·클로드 코드·코워크·API가 한꺼번에 먹통이 됐던 장애 소식과, 아마존이 클로드 코드보다 최대 45% 싸다고 내세운 오픈소스 에이전트 하네스 "스트랜즈 하네스" 소식을 정리했다.
---

**작성: 2026-09-30 09:00 (KST)**

어제는 개인적으로도 클로드 코드가 잠깐 먹통이 돼서 당황했었는데, 알고 보니 나만 겪은 일이 아니었다. 오늘은 그 장애 얘기와, 아마존이 "클로드 코드보다 싸다"고 정면으로 비교하며 내놓은 오픈소스 에이전트 하네스 소식을 묶어봤다.

## 클로드·클로드 코드·코워크·API 동시 장애

9월 29일 오후(UTC 기준 14시경) 앤트로픽이 claude.ai, 클로드 코드, 클로드 코워크, API 전반에서 에러율이 치솟는 장애를 겪었다. 상태 페이지 기준으로 문제는 14시에 시작해 14시 36분에 완화됐다고 하니 본 장애 자체는 약 40분 정도였는데, 그 여파로 SSO·Sign in with Apple 로그인이 막히고 새 대화 시작, 음성 대화, 클로드 코드·코워크 세션 실행, 결제, 파일 업로드까지 줄줄이 안 되는 2차 장애가 한동안 이어졌다. 다운디텍터에는 한때 14시 19분 기준으로 거의 4천 건에 가까운 신고가 몰렸다고 한다. 코딩 에이전트를 실시간 업무 도구로 쓰는 사람이 늘어난 만큼, 이런 장애가 났을 때 체감되는 불편함도 예전보다 훨씬 커진 것 같다. 다행히 앤트로픽은 곧 정상화됐다고 공지했지만, 바이브코딩이 일상 워크플로우 깊숙이 들어올수록 "클로드가 잠깐 멈추면 내 작업도 멈춘다"는 의존도가 새삼 눈에 들어오는 사건이었다.

## 아마존, 클로드 코드보다 45% 싸다는 오픈소스 에이전트 "스트랜즈 하네스" 공개

9월 21일 AWS가 "스트랜즈 하네스(Strands Harness)"라는 범용 AI 에이전트를 아파치 2.0 라이선스로 오픈소스 공개했다. 파이썬이나 타입스크립트 한 줄이면 베드록·앤트로픽·오픈AI·구글·로컬 올라마 모델까지 바로 연결되고, 파일·셸·웹 도구와 프롬프트 캐싱, 컨텍스트 관리, 메모리, 지속 세션, 멀티 에이전트 위임까지 기본 탑재돼 있다고 한다. 도구 결과가 1,500토큰을 넘으면 자동으로 잘라내고 컨텍스트 창이 85%를 넘으면 자동 압축하는 등, 클로드 코드를 오래 써본 사람이라면 익숙할 관리 기법들이 들어가 있는 점도 눈에 띈다.

가장 화제가 된 건 비교 수치다. AWS는 클로드 코드·코덱스와 같은 모델로 맞대결시켰을 때 스트랜즈 하네스가 정확도는 비슷하면서 최대 45% 더 저렴했다고 주장했다(딥시크 하네스까지 넣으면 격차는 28%로 줄어든다고 한다). 구체적으로는 페이블 5 모델을 얹은 스트랜즈 하네스가 Terminal-Bench 2.1에서 89회 시행 기준 총비용 56.29달러로 69.7점을 기록한 반면, 클로드 코드는 248.05달러를 쓰고도 61.8점에 그쳤다는 수치를 내놨다. 9월 28일 나온 AWS 주간 정리 글에서는 여기에 오퍼스 5.5까지 붙여, Terminal-Bench에서 오퍼스 5와 동일한 품질을 토큰은 3분의 1만 쓰고 시간은 절반만 들여 낸다며 오퍼스 5.5를 기본 모델로 추천하기도 했다.

## 오늘의 생각

두 소식을 나란히 보면 묘하게 대칭적이다. 하나는 "클로드 생태계가 멈추면 그 위에서 돌아가던 작업도 같이 멈춘다"는 걸 보여준 장애고, 다른 하나는 "그 클로드 코드라는 하네스 자체도 대체 가능한 부품일 뿐"이라는 걸 굳이 숫자까지 대며 증명한 경쟁사의 발표다. 바이브코딩 도구를 매일 쓰는 입장에서는 특정 회사·특정 제품에 대한 의존이 편리함과 동시에 리스크라는 걸 이번 장애로 다시 느꼈고, 동시에 그 리스크를 줄이는 방법 중 하나가 결국 "모델은 그대로 두고 하네스만 바꿔치기할 수 있는" 오픈소스 대안이라는 걸 스트랜즈 하네스가 보여준 셈이다. AWS가 내세운 수치를 곧이곧대로 믿기보다는, 조만간 직접 몇 가지 작업을 양쪽에 똑같이 시켜보고 체감 차이를 비교해봐야겠다는 생각이 든다.

---

**출처**
- [It's not just you, Claude is down in confirmed partial outage - 9to5Google](https://9to5google.com/2026/09/29/claude-confirmed-outage-sept-29/)
- [Anthropic Reports Service Disruption Across Claude.ai, Code, Cowork and API - Unite.AI](https://www.unite.ai/anthropic-reports-service-disruption-across-claude-ai-code-cowork-and-api/)
- [Claude was down for many — here's everything we know - TechRadar](https://www.techradar.com/news/live/claude-down-september-29-2026)
- [AWS open-sources an AI agent it says is 45% cheaper than Claude Code - The New Stack](https://thenewstack.io/aws-strands-harness-agent/)
- [AWS debuts Strands Harness, an open-source AI agent that can be deployed in any environment - SiliconANGLE](https://siliconangle.com/2026/09/21/aws-debuts-strands-harness-an-open-source-ai-agent-that-can-be-deployed-in-any-environment/)
- [Introducing Strands harness: frontier performance with 28% lower cost - Strands Agents](https://strandsagents.com/blog/introducing-strands-harness/)
- [AWS Weekly Roundup: GPT-6 Sol and Luna, Claude Opus 5.5 on Amazon Bedrock, Strands harness and more - September 28, 2026 - AWS](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-gpt-6-sol-and-luna-claude-opus-5-5-on-amazon-bedrock-strands-harness-and-more-september-28-2026/)
