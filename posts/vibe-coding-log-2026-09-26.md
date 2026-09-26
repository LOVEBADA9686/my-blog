---
title: "[바이브코딩 동향] 2026-09-26"
date: 2026-09-26
tags: [AI이슈]
excerpt: 클로드 코드 클라우드 세션이 리서치 프리뷰를 벗어나 정식 서비스가 되면서 Pro/Max 구독자에게 최대 250달러 크레딧이 풀렸고, 앤트로픽은 2000개 넘는 파트너를 한데 모은 '클로드 마켓플레이스'도 함께 열었다.
---

**작성: 2026-09-26 09:00 (KST)**

이번 주는 새 모델 소식보다는 "클로드를 어떻게 쓰게 만들 것인가"에 가까운 플랫폼 발표가 눈에 띄었다. 노트북을 덮어도 계속 돌아가는 클로드 코드 클라우드 세션이 정식 출시됐고, 같은 주에 플러그인·커넥터·에이전트를 한곳에 모은 마켓플레이스도 문을 열었다.

## 클로드 코드 클라우드 세션 정식 출시, Pro/Max에 최대 250달러 크레딧

9월 23일, 앤트로픽이 클로드 코드의 "클라우드 세션" 기능을 리서치 프리뷰에서 정식 서비스로 전환했다. 클라우드 세션은 앤트로픽이 관리하는 가상머신 위에서 클로드 코드를 돌리는 방식이라, 로컬 노트북을 닫거나 꺼도 작업이 계속 진행된다는 게 핵심이다. claude.ai/code, 클로드 모바일 앱의 Code 탭, 데스크톱 앱, 혹은 CLI에서 `claude --cloud` 명령으로 시작할 수 있고, 시작하려면 깃허브 계정 연동이 필요하다.

정식 전환을 기념해 기존 Pro/Max 구독자에게는 클라우드 세션 전용 일회성 크레딧을 나눠줬다. Pro는 100달러, Max는 250달러인데, 이 크레딧은 평소 구독 사용량 한도와는 별도로 잡히고 클라우드 세션에서만 쓸 수 있다. 크레딧은 10월 7일(미 서부시간 기준)까지 신청해야 하고, CLI에서 `/claim-credit` 명령으로 받거나 앤트로픽이 안내한 링크로 받을 수 있다고 한다. 크레딧 자체엔 11월 4일이라는 사용 만료일도 붙어 있다는 보도도 있으니, 신청만 해두고 안 쓰다 날리는 일이 없도록 주의가 필요해 보인다.

## 클로드 마켓플레이스 오픈, 2000개 넘는 파트너 한곳에

같은 주 9월 23일, 앤트로픽은 '클로드 마켓플레이스'도 함께 공개했다. 플러그인·커넥터, 파트너가 만든 제품·에이전트, 그리고 서비스 파트너까지 한 곳에서 찾아볼 수 있게 만든 허브다. 애틀라시안, 구글, 마이크로소프트, 노션, 세일즈포스 등 2000개가 넘는 플러그인·커넥터가 이미 올라와 있고, 커서·러버블·하비·리고라·스노우플레이크 같은 클로드 기반 소프트웨어 기업들의 제품도 함께 소개된다.

기업 고객은 앤트로픽에 약정한 지출(committed spend)의 일부를 이 마켓플레이스의 파트너 소프트웨어 결제에 쓸 수 있다는 점도 특징이다. 개발자 입장에서는 MCP(Model Context Protocol)나 Agent Skills 같은 오픈 표준으로 직접 커넥터·플러그인을 만들어 올릴 수 있는데, 마켓플레이스 발표 이틀 뒤인 9월 25일에는 이런 도구를 정식으로 등록할 수 있는 제출 포털도 따로 열렸다고 한다.

## 오늘의 생각

두 소식 다 새로운 모델의 능력 얘기가 아니라 "클로드를 하루 종일 돌아가게 하고(클라우드 세션), 그 위에 생태계를 얹는(마켓플레이스)" 쪽에 가깝다. 개인 개발자 입장에서 클라우드 세션은 당장 체감이 클 것 같은데, 특히 긴 리팩터링이나 백그라운드 작업을 노트북 배터리 걱정 없이 맡길 수 있다는 점이 크다. 다만 크레딧에 신청 마감일과 별도 사용 만료일이 겹쳐 있다는 보도가 있어서, 실제로 받아보고 조건을 직접 확인하기 전까지는 세부 조건을 100% 확정된 사실로 받아들이지 않는 게 좋을 것 같다. 마켓플레이스 쪽은 개인보다는 팀·기업 단위 도입에 더 맞춰진 발표라, 당장 바이브코딩 개인 워크플로에 큰 변화를 주진 않겠지만 커서 같은 코딩 툴이 이 마켓플레이스에 같이 올라온 걸 보면 "코딩 에이전트 생태계"가 앤트로픽 플랫폼 안으로 점점 편입되는 그림이 그려진다.

---

**출처**
- [Claude Marketplace: plugins and connectors, products and agents, and service partners - Claude by Anthropic](https://claude.com/blog/claude-marketplace)
- [Anthropic rolls out up to $250 in free Claude Code credits, but only for cloud sessions - BleepingComputer](https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-rolls-out-up-to-250-in-free-claude-code-credits-but-only-for-cloud-sessions/)
- [Anthropic launches Claude Code cloud sessions and hands out up to $250 in credit - Pasquale Pillitteri](https://pasqualepillitteri.it/en/news/17933/claude-code-cloud-sessions-credit-250-dollars)
- [Anthropic announces Claude Marketplace as hub for plugins and connectors - Cryptobriefing](https://cryptobriefing.com/claude-plugin-mcp-connector-submission-portal/)
