---
title: "[바이브코딩 동향] 2026-08-09"
date: 2026-08-09
tags: [AI이슈]
excerpt: 클로드 코드 v2.1.225·v2.1.226이 게이트웨이 지출 한도 표시와 플러그인 로딩 버그를 연달아 고쳤고, 앤트로픽은 캘리포니아 대법관 출신 티노 쿠에야르를 첫 최고글로벌정책책임자로 영입했다.
---

**작성: 2026-08-09 09:00 (KST)**

어제(8/8)는 v2.1.224의 셀프 호스팅 러너와 영국 AISI의 에이전트 무단 행동 리포트를 정리했는데, 그 사이 클로드 코드는 벌써 두 버전(v2.1.225, v2.1.226)이 더 나왔다. 오늘은 이 업데이트들과 함께, 앤트로픽이 처음으로 만든 "글로벌 정책" 임원 자리에 누가 앉았는지도 짚어본다.

## 클로드 코드 v2.1.225·v2.1.226, 엔터프라이즈 관리 기능과 버그 수정

8월 7일 나온 v2.1.225는 기업용 게이트웨이를 쓰는 조직을 겨냥한 변화가 중심이다. 사용량 경고 메시지에 게이트웨이 지출 한도(spend-limit)를 표시하도록 해서, 한도에 걸렸을 때 상한선·리셋 시각·관리자가 남긴 메시지까지 한 번에 보여준다. 신뢰되지 않은 디렉터리에서 `claude agents`를 실행할 때도 기존 `claude` 명령과 동일하게 워크스페이스 신뢰 확인 프롬프트가 뜨도록 맞췄다. 이 밖에 저장된 로그인의 단기 토큰이 장기 `CLAUDE_CODE_OAUTH_TOKEN`을 슬쩍 덮어써 헤드리스 세션이 재시작 전까지 끊기던 버그, macOS에서 키체인 읽기가 타임아웃되면 MCP OAuth 서버가 인증이 전혀 안 된 것처럼 401 에러를 쏟아내던 버그, 오토 모드가 세이프티 필터의 자체 권한 거부까지 "연속 차단" 횟수에 잘못 합산하던 버그도 함께 고쳐졌다.

바로 다음 날인 8월 8일에는 v2.1.226이 나왔는데, 이번엔 순전히 안정성 패치다. `--settings` CLI 플래그로 활성화한 플러그인이 로드되지 않던, v2.1.181부터 이어진 회귀 버그를 잡았고 `/install-github-app`과 `/mcp` 설정 메뉴가 에이전트 뷰 세션에서 막혀 있던 것도 터미널이 붙지 않은 백그라운드 세션에서만 제한되도록 범위를 좁혔다. 이틀 사이 두 버전이 나온 걸 보면 최근 셀프 호스팅 러너처럼 큰 기능을 낸 다음엔 이렇게 자잘한 뒷수습 패치가 며칠 이어지는 패턴이 반복되는 듯하다.

## 앤트로픽, 첫 최고글로벌정책책임자로 티노 쿠에야르 영입

앤트로픽이 정책·국제 협력·각국 정부와의 관계를 총괄할 첫 최고글로벌정책책임자(Chief Global Affairs Officer)로 티노 쿠에야르(Mariano-Florentino "Tino" Cuéllar)를 영입했다고 발표했다. 캘리포니아주 대법관을 지냈고 최근까지 카네기국제평화재단 총재로 있었으며, 백악관과 연방 기관에서도 세 개 행정부에 걸쳐 일한 이력이 있는 인물이다. 스탠퍼드 로스쿨 교수로 AI 관련 강의를 거의 10년째 해오고 있고, 올해 1월부터는 앤트로픽의 장기이익신탁(Long-Term Benefit Trust) 트러스티로도 참여해온 만큼 회사와는 이미 인연이 있었다. 앤트로픽 대니엘라 아모데이 사장에게 직접 보고하는 자리다. 공교롭게도 이 발표 직전인 지난주 백악관은 앤트로픽·오픈AI·구글·메타·마이크로소프트 등을 불러 프런티어 모델의 사이버 위험을 정부가 사전 점검하는 프레임워크를 비공개로 논의했는데, AISI의 에이전트 무단 행동 리포트가 나온 지 며칠 안 된 시점이라 규제 대응 조직을 서둘러 갖추는 모양새로도 읽힌다.

## 오늘의 생각

기능 업데이트는 이틀 만에 두 버전씩 나올 정도로 빠른데, 정책·안전 쪽 대응은 그보다 한 박자 느리게 뒤따라오는 인상이다. 새 임원을 앉히고 정부와 프레임워크를 논의하는 일은 하루아침에 되는 게 아니니 당연하다면 당연하지만, 그 사이 에이전트한테 넘기는 실행 권한은 셀프 호스팅 러너·게이트웨이 지출 한도처럼 계속 넓어지고 있다는 게 눈에 띈다. 개인 프로젝트 수준에서야 크게 체감할 일은 아니지만, 회사 인프라에 에이전트를 들이는 팀이라면 이번 주 나온 정책 조직 개편 소식도 기능 업데이트만큼 챙겨볼 가치가 있어 보인다.

---

**출처**
- [Release v2.1.225 · anthropics/claude-code - GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.225)
- [Releases · anthropics/claude-code - GitHub](https://github.com/anthropics/claude-code/releases)
- [Claude Code Changelog (August 2026) - Gradually](https://www.gradually.ai/en/changelogs/claude-code/)
- [Claude Code v2.1.226 (Aug 8, 2026) — Every Release, Summarized - Havoptic](https://www.havoptic.com/tools/claude-code)
- [Tino Cuellar joins Anthropic as Chief Global Affairs Officer - Anthropic](https://www.anthropic.com/news/tino-cuellar)
- [Harvard Corporation Member Tino Cuéllar Named Anthropic's First Global Affairs Chief - The Harvard Crimson](https://www.thecrimson.com/article/2026/8/4/cuellar-anthropic-global-affairs/)
- [White House to host AI companies Tuesday to review new model-testing framework - CNBC](https://www.cnbc.com/2026/08/03/white-house-ai-companies-voluntary-framework-meeting.html)
