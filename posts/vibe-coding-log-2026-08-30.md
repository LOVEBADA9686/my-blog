---
title: "[바이브코딩 동향] 2026-08-30"
date: 2026-08-30
tags: [AI이슈]
excerpt: 클로드 코드 v2.1.248이 명령 실행·웹 접근을 통째로 차단하는 --restricted 모드를 추가했고, 앤트로픽은 노동절 이후 IPO 증권신고서를 공개하며 이르면 9월 말~10월 초 상장을 목표로 한다는 보도가 나왔다.
---

**작성: 2026-08-30 09:00 (KST)**

## 클로드 코드, 아예 손발을 묶는 "--restricted" 모드 추가

지난 8월 27일 나온 클로드 코드 v2.1.248의 핵심은 `--restricted` 플래그(또는 `CLAUDE_CODE_RESTRICTED=1` 환경변수)다. 이름 그대로 에이전트의 권한을 아예 최소한으로 묶어버리는 모드인데, 켜는 순간 네 가지가 통째로 사라진다. 명령어나 코드를 실행하는 내장 툴이 빠지고, `--tools`로 직접 이름을 지정하지 않는 한 WebFetch도 못 쓴다. 파일 관련 툴은 작업 디렉터리 밖으로 절대 못 나가고, `bypassPermissions` 요청은 무조건 거부된다. 여기에 더해 사용자·프로젝트·로컬 설정 파일을 아예 읽지 않아서, 어딘가 숨어있는 설정으로 몰래 권한이 늘어나는 것도 막는다. 왜 이런 극단적인 모드가 필요했을까 생각해보면, 결국 "낯선 사람이 만든 에이전트나 서드파티 서브에이전트를 내 컴퓨터에서 돌려야 하는" 상황이 점점 흔해지고 있기 때문일 것이다. 같은 릴리스에는 이 밖에도 에이전트 프런트매터에 `experimental.cacheTtl`(5분/1시간)을 넣어 서브에이전트별로 프롬프트 캐시 유지 시간을 따로 설정하는 기능 등 49건의 변경사항이 함께 들어갔다.

## 앤트로픽 IPO, "노동절 이후 증권신고서 공개"로 일정 구체화

로이터를 인용한 더 인포메이션 보도에 따르면, 앤트로픽이 미국 노동절(9월 첫째 월요일) 이후에 IPO 증권신고서(S-1)를 공개적으로 내놓을 계획이라고 한다. 지금까지는 "가을 상장"처럼 두루뭉술하게만 알려졌는데, 이번 보도로 그림이 조금 더 구체화됐다. 9월 중순에 투자자 데이(investor day)를 열고, 이르면 9월 말에서 10월 초 사이에 상장을 마무리하는 게 목표라는 것이다. 눈에 띄는 대목은 기존 주주들에게 상장과 함께 지분을 매각할 수 있는 길을 열어주는 방안과, 통상적인 180일보다 더 긴 락업 기간을 검토하고 있다는 부분이다. 이미 1300억 달러 넘게 조달한 앤트로픽이 이번 IPO로 스페이스X가 지난 6월 세운 860억 달러 조달 기록마저 넘어설 것이라는 전망도 함께 나왔다. 최근에는 밸류에이션이 최대 2조 달러에 이를 수 있다는 뉴욕타임스發 보도까지 겹치며, 역대 최대 규모 IPO 타이틀을 스페이스X로부터 가져올 수 있을지가 관전 포인트로 떠올랐다.

## 오늘의 생각

두 소식이 묘하게 대비된다. 클로드 코드는 에이전트에게 "아무것도 믿지 말고 최대한 옥죄어놓는" 모드를 새로 만들었는데, 정작 그 코드를 만드는 회사는 곧 수십조 원 규모의 공개 시장 검증대에 오른다. 에이전트 권한을 점점 더 세밀하게 쪼개고 통제하는 기능이 릴리스마다 꾸준히 늘어나는 걸 보면, 바이브코딩 도구를 만드는 쪽에서도 "자율성을 넓히는 것"과 "그 자율성을 언제든 확 줄일 수 있게 만드는 것"을 같은 비중으로 신경 쓰고 있다는 인상을 받는다. 상장을 앞두고 이런 안전장치들이 얼마나 눈에 띄게 강조될지도 지켜볼 부분이다.

---

**출처**
- [Release v2.1.248 · anthropics/claude-code - GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.248)
- [Claude Code Restricted Mode: New Flag Explained - Julian Goldie](https://juliangoldie.com/claude-code-restricted-mode/)
- [Claude Code v2.1.250 (Aug 27, 2026) — Every Release, Summarized - Havoptic](https://www.havoptic.com/tools/claude-code)
- [Anthropic plans to publicly unveil IPO prospectus after Labor Day, the Information reports - TradingView News (Reuters)](https://www.tradingview.com/news/reuters.com,2026:newsml_L4N44O1S2:0-anthropic-plans-to-publicly-unveil-ipo-prospectus-after-labor-day-the-information-reports/)
- [Anthropic plans to publicly unveil IPO prospectus after Labor Day, the Information reports - AOL](https://www.aol.com/articles/anthropic-plans-publicly-unveil-ipo-190752000.html)
- [Anthropic Expects to Match or Top SpaceX's Record IPO Size - Bloomberg](https://www.bloomberg.com/news/articles/2026-08-20/anthropic-expects-to-match-spacex-s-record-ipo-size-or-top-it)
