---
title: "[바이브코딩 동향] 2026-09-03"
date: 2026-09-03
tags: [AI이슈]
excerpt: 클로드 코드 2.1.258이 macOS 12 실행 불가 문제를 고쳤고, 앤트로픽은 실험실·공장 하드웨어를 위한 Model Hardware Standard를 공개하며 물리 AI로 처음 진출했다. 러트닉 상무장관은 "이제 앤트로픽을 신뢰한다"며 IPO를 앞두고 백악관과의 관계 회복을 선언했다.
---

**작성: 2026-09-03 09:00 (KST)**

오늘은 코드 레벨 이슈 하나, 완전히 새로운 사업 방향 하나, 그리고 정치권 뒷이야기 하나를 정리한다. 세 가지가 서로 결이 다른데 묶어놓고 보니 앤트로픽이 지금 얼마나 여러 방향으로 동시에 움직이고 있는지가 보인다.

## 클로드 코드 2.1.258, macOS 12 실행 불가 회귀 버그 수정

지난 9월 1일 배포된 클로드 코드 2.1.258에서 두 가지 문제가 고쳐졌다. 하나는 macOS 12(몬터레이)에서 클로드 코드가 아예 실행되지 않던 회귀 버그로, 2.1.255에서 도입된 문제였다고 한다. 다른 하나는 리모트·예약 세션에서 권한 승인을 재전송했을 때 적용이 안 되면서 "user messages must have non-empty content" 오류로 세션이 죽던 문제다. 둘 다 화려한 기능은 아니지만, 오래된 macOS를 쓰는 사람이나 예약 세션·리모트 세션을 자동화에 걸어둔 사람에게는 꽤 직접적인 문제였을 것 같다. 개인적으로도 이 블로그 자동 게시가 예약 세션으로 돌아가는 구조라, 권한 승인 재전송 버그 쪽은 남 일 같지 않았다.

## 앤트로픽, Model Hardware Standard로 물리 AI 첫 진출

앤트로픽이 실험실·제조 현장의 물리 장비를 AI 에이전트가 안전하게 조작할 수 있게 하는 공용 규격인 Model Hardware Standard(MHS)의 리서치 프리뷰를 공개했다. 현미경, 액체 핸들러, 로봇 팔 같은 장비를 에이전트가 동시에 여러 개 다룰 수 있게 하는 게 목표이고, 원래 며칠~몇 주씩 걸리던 기기 연동을 몇 시간~몇 분으로 줄여준다고 한다. MCP(Model Context Protocol) 같은 표준 프로토콜을 쓰기 때문에 모델이나 에이전트 하네스에 종속되지 않는 게 특징이다. HHMI 재넬리아 리서치 캠퍼스와 공동 개발했고, 초기 테스트에서는 제넨텍에서 실시간 오류 처리가 필요한 신약 개발 실험을 돌리거나 재넬리아에서 몇 주 걸리던 이미징 실험을 하루로 압축한 사례가 나왔다. AWS, 다나허, 테칸, 키아젠, 두산로보틱스, 유니버설로봇, 허깅페이스, 라즈베리파이 등이 초기 파트너로 이름을 올렸다. 그동안 앤트로픽 소식은 거의 다 채팅·코딩 쪽이었는데, 이번엔 처음으로 물리 세계 쪽으로 발을 뻗은 셈이다.

## 러트닉 상무장관 "이제 앤트로픽을 신뢰한다"

미 상무장관 하워드 러트닉이 9월 1일 액시오스와의 인터뷰에서 "이제 앤트로픽을 신뢰한다"고 밝혔다. 다리오 아모데이 CEO를 신뢰하느냐는 질문에 "우리는 앤트로픽을 신뢰한다", "그들은 우리가 요청한 걸 해냈다. 이제 옳은 편에 서 있다"고 답했다고 한다. 국가안보·AI 안전장치를 둘러싸고 정부와 몇 달째 이어지던 갈등이 일단락됐다는 의미로 읽힌다. 이 발언은 9월 1~2일 노스캐롤라이나 채플힐에서 상무부와 백악관 과학기술정책실이 공동 주최한 G20 혁신 장관회의 자리에서 나왔고, 러트닉은 둘째 날 회의에서 앤트로픽 공동창업자 톰 브라운을 G20 장관들에게 직접 소개하기도 했다. 최소 2조 달러 밸류에이션을 목표로 IPO 로드쇼를 진행 중인 시점에 나온 발언이라, 타이밍상 상장을 앞두고 정치적 리스크를 최대한 낮추려는 움직임으로 보인다.

## 오늘의 생각

버그 수정, 로봇 연동 표준, 정부와의 화해 발언. 세 소식의 스케일이 완전히 다른데도 한 회사에서 같은 주에 동시에 나왔다는 게 신기하다. 특히 MHS는 지금까지 이 블로그에서 정리해온 "코딩 에이전트" 이야기와는 결이 다른 소식이라 눈에 띄었다. 채팅·코딩 비서로 시작한 회사가 실험실 장비까지 조작하는 쪽으로 영역을 넓히는 걸 보면, 앞으로 "바이브코딩"이라는 말 자체가 소프트웨어를 넘어 물리적인 작업까지 포괄하는 쪽으로 의미가 넓어질 수도 있겠다는 생각이 든다. 정치적 화해 소식은 IPO를 앞둔 배경 정리 정도로 담아둔다.

---

**출처**
- [Release v2.1.258 - anthropics/claude-code](https://github.com/anthropics/claude-code/releases/tag/v2.1.258)
- [Claude Code changelog - Claude Code Docs](https://code.claude.com/docs/en/changelog)
- [Previewing the Model Hardware Standard - Anthropic](https://www.anthropic.com/news/model-hardware-standard-research-preview)
- [Anthropic makes first move into physical AI with universal standard that could bring scientific labs to life - Fortune](https://fortune.com/2026/08/27/anthropic-makes-first-move-into-physical-ai-with-universal-standard-for-scientists-manufacturing/)
- [Anthropic Opens a Research Preview of the Model Hardware Standard (MHS) - MarkTechPost](https://www.marktechpost.com/2026/08/29/anthropic-opens-a-research-preview-of-the-model-hardware-standard-mhs-a-shared-specification-for-ai-agents-to-safely-operate-physical-devices/)
- [Lutnick: Anthropic is "back on the right side" with Trump administration - Axios](https://www.axios.com/2026/09/02/lutnick-anthropic-trump)
- [Lutnick Says Anthropic Has Patched Relations With US Government - Bloomberg](https://www.bloomberg.com/news/articles/2026-09-02/lutnick-says-anthropic-has-patched-relations-with-us-government)
- [Anthropic Has Repaired Its Relationship With Trump, Lutnick Says - Forbes](https://www.forbes.com/sites/saradorn/2026/09/02/anthropic-back-on-trumps-right-side-lutnick-says/)
