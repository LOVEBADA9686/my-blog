---
title: "[바이브코딩 동향] 2026-09-10"
date: 2026-09-10
tags: [AI이슈]
excerpt: 비밀번호 없이 브라우저 세션만 훔쳐 클로드 계정의 토큰을 몰래 써버리는 인포스틸러 악성코드 경고와, 구글이 코세라 AI 자격증에 "바이브코딩" 트랙을 정식으로 추가한 소식을 정리했다.
---

**작성: 2026-09-10 09:00 (KST)**

오늘은 결이 다른 두 소식이다. 하나는 "내 계정이 나도 모르게 쓰이고 있다"는 좀 섬뜩한 보안 경고고, 다른 하나는 "바이브코딩"이라는 단어가 이제 대학 강의실이 아니라 취업 자격증 커리큘럼까지 들어왔다는 소식이다.

## 비밀번호 없이도 뚫린다 — 클로드 계정을 노리는 인포스틸러

지난 8월 초, AI 컨설턴트 그랜트 드 스와르트는 자기가 아무 작업도 하지 않았는데 클로드 맥스 20x 계정의 토큰 사용량이 계속 올라가는 걸 발견했다. 원인을 추적해보니 비밀번호를 훔친 게 아니라, 브라우저에 저장된 "로그인 세션" 자체를 훔치는 인포스틸러 악성코드가 범인이었다. 로그인할 때마다 브라우저가 저장해두는 세션 쿠키만 있으면 비밀번호나 2단계 인증 없이도 이미 로그인된 상태 그대로 계정에 들어갈 수 있다는 점을 악용한 것이다. 앤트로픽은 이런 방식으로 계정이 탈취된 사례들을 확인하고, 의심스러운 활동이 잡힌 계정을 강제 로그아웃시켜 탈취된 세션을 무효화하고, 등록된 결제 수단을 삭제해 추가 결제를 막았으며, 이미 도난 카드로 결제가 발생한 경우엔 환불까지 진행했다고 밝혔다. 다만 앤트로픽 쪽은 "이 악성코드가 클로드와 관련이 있거나 클로드를 통해 설치됐거나 사용자가 클로드에서 한 어떤 행동과 관련이 있다고 볼 근거는 없다"고 선을 그었다. 즉 클로드 자체의 보안 결함이 아니라, PC에 이미 깔린 범용 인포스틸러가 브라우저에 남아 있던 세션을 그냥 주워간 것에 가깝다. 그래도 결과적으로 내 구독 한도가 남 좋은 일에 소모되는 건 똑같아서, 계정을 공유 PC나 낯선 확장 프로그램이 깔린 브라우저에서 열어둔 적이 있다면 한 번쯤 세션을 점검해볼 만한 소식이다.

## 구글, 코세라 "AI 자격증"에 바이브코딩 트랙을 정식으로 얹었다

8월 11일 구글이 코세라에서 운영하는 "Google AI Professional Certificate"에 바이브코딩을 다루는 새 트랙을 정식으로 추가했다. 이 자격증은 올해 2월 출시된 이후 코세라 역사상 가장 인기 있는 생성형 AI 자격증으로 자리 잡았는데, 여기에 "누구나 만드는 사람이 될 수 있다"는 문구를 내걸고 일상 언어로 아이디어를 설명해 실제로 배포까지 되는 앱을 만드는 법 — 기획, 테스트, 디버깅, 배포 — 을 가르치는 과정을 얹은 것이다. 구글은 근거로 구글 트렌드 데이터를 들었는데, 미국 내 "vibe coding" 검색량이 작년 대비 평균 140% 늘었다고 한다. 이번 트랙은 완전히 새로 만든 게 아니라, 지난 6월 구글과 캐글이 함께 연 5일짜리 무료 강좌 "AI Agents: Intensive Vibe Coding Course"의 연장선이기도 하다. 그 강좌엔 35만 3천 명이 넘게 등록했다고 하니, 얼마나 많은 사람이 "코드를 안 배우고 앱을 만드는 법"에 관심을 갖고 있는지 짐작이 간다. 개발자 커뮤니티에서는 여전히 바이브코딩의 품질·보안 문제를 놓고 논쟁 중인데, 그 논쟁과는 별개로 이 단어가 이제 빅테크의 정규 교육 커리큘럼에 이름을 올릴 정도로 대중화됐다는 사실 자체가 눈에 띈다.

## 오늘의 생각

한쪽은 계정 보안이 뚫리는 이야기, 다른 한쪽은 "누구나 개발자가 될 수 있다"는 낙관적인 이야기라 어울리지 않아 보이지만, 사실 같은 흐름의 양면 같다. 바이브코딩이 자격증 커리큘럼에 들어갈 정도로 진입장벽이 낮아지는 동안, 그만큼 더 많은 사람이 클로드 같은 도구에 계정을 만들고 카드를 등록하고 로그인 상태를 브라우저에 남겨둔다 — 그리고 그게 바로 인포스틸러가 노리는 표면이다. 도구가 쉬워질수록 "안전하게 쓰는 습관"도 같이 배워야 한다는 걸 오늘 두 소식이 나란히 보여주는 셈이다.

---

**출처**
- [Hackers are stealing Claude tokens from subscribers - TechCrunch](https://techcrunch.com/2026/09/08/hackers-are-stealing-claude-tokens-from-subscribers/)
- [Anthropic Warns Hackers Are Stealing Claude Sessions To Hijack Accounts - Search Engine Journal](https://www.searchenginejournal.com/anthropic-warns-hackers-are-stealing-claude-sessions-to-hijack-accounts/587566/)
- [Infostealers are hijacking Claude accounts at users' expense - Malwarebytes](https://www.malwarebytes.com/blog/news/2026/09/infostealers-are-hijacking-claude-accounts-at-users-expense)
- [Anthropic Warning: Infostealer Malware Is Hijacking Claude Sessions, Draining Accounts - eSecurity Planet](https://www.esecurityplanet.com/threats/news-claude-session-hijacking-infostealer-malware/)
- [Expanding the Google AI Professional Certificate with vibe coding - Google Blog](https://blog.google/company-news/outreach-and-initiatives/grow-with-google/vibe-coding-course/)
- [Google adds vibe coding course to AI Professional Certificate - EdTech Innovation Hub](https://www.edtechinnovationhub.com/news/google-adds-vibe-coding-course-to-ai-professional-certificate)
