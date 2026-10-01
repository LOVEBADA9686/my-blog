---
title: "[바이브코딩 동향] 2026-10-01"
date: 2026-10-01
tags: [AI이슈]
excerpt: 클로드 코드 v2.1.285가 WebFetch 끄기 옵션과 --desktop 플래그를 추가했고, 앤트로픽 IPO는 3분기 실적을 싣기 위해 10월에서 11월로 밀렸다. 여기에 바이브코딩 플랫폼 러버블의 연매출 6억 달러 돌파 소식까지 정리했다.
---

**작성: 2026-10-01 09:00 (KST)**

10월 첫날이다. 이번 달에는 앤트로픽 IPO 같은 큰 그림 이야기가 많이 들릴 것 같은데, 오늘은 그 얘기와 함께 어제 나온 클로드 코드 업데이트, 그리고 바이브코딩 시장의 체감 규모를 보여주는 러버블 소식을 묶어봤다.

## 클로드 코드 v2.1.285, WebFetch 끄기와 --desktop 플래그 추가

9월 29일 나온 클로드 코드 v2.1.285는 작지만 실무에 바로 쓸 만한 변화들을 담았다. 먼저 `CLAUDE_CODE_DISABLE_WEB_FETCH` 환경 변수가 추가돼 WebFetch 툴 자체를 끌 수 있게 됐다. 폐쇄망이나 보안이 민감한 환경에서 에이전트가 외부로 나가는 경로를 원천 차단하고 싶을 때 유용할 것 같다. 또 `claude --desktop`을 입력하면 현재 디렉터리나 `--continue`/`--resume <id>`로 지정한 세션을 그대로 데스크톱 앱에서 열 수 있게 됐는데, CLI로 시작한 작업을 GUI로 넘겨서 이어보는 흐름이 한결 매끄러워졌다. 여기에 머신 단위로 어떤 API 제공자를 쓸 수 있는지 제한하는 `allowedProviders` 설정도 생겨서, 조직에서 외부 호출 경로를 통제하기가 더 쉬워졌다. 사인인이 브라우저에서는 성공했는데 CLI는 영원히 기다리던 버그도 이번에 고쳐졌다고 한다. 거대한 신기능은 아니지만, 매일 클로드 코드를 켜놓고 사는 사람 입장에서는 이런 옵션 하나하나가 쌓여서 체감 편의가 올라가는 느낌이다.

## 앤트로픽 IPO, 10월에서 11월로 연기

월스트리트저널 보도에 따르면 앤트로픽의 나스닥 상장이 10월에서 11월로 미뤄졌다. 핵심 이유는 3분기 실적을 상장 자료에 싣기 위해서라는데, 오픈AI가 9월에 신모델 '아스트라'를 내놓으며 경쟁 구도가 달라진 상황에서 숫자로 경쟁력을 보여주려는 의도로 읽힌다. 투자자들은 최대 2조 달러 밸류에이션과 최대 1000억 달러 규모의 자금 조달을 기대하고 있는데, 이 정도 규모면 지난 6월 스페이스X가 세운 기록도 넘어선다. 높은 비용 구조와 오픈AI와의 경쟁, 금리 부담, 그리고 레드팀 테스트에서 드러난 보안 리스크 같은 요인들도 연기 배경으로 거론된다고 한다. 날짜 하나 미뤄진 것뿐이지만, 바이브코딩 생태계의 핵심 축인 회사가 상장을 준비하며 재무 체력을 더 꼼꼼히 다듬는 과정 자체가 업계 전체에 신호를 주는 느낌이다.

## 바이브코딩 플랫폼 러버블, 연매출 6억 달러 돌파

스웨덴 바이브코딩 스타트업 러버블이 암스테르담 HumanX 서밋에서 연환산 매출(ARR)이 6억 달러를 넘었다고 공개했다. 지난 6월 5억 달러였던 걸 감안하면 석 달 만에 1억 달러가 늘어난 셈이다. 러버블은 코드를 직접 보여주는 게 아니라 완성된 제품을 만들어주는 방식을 고수하면서 엔터프라이즈 쪽을 집중 공략했는데, 포춘 500대 기업 중 3분의 2에서 이미 임직원들이 이 제품을 쓰고 있고 마이크로소프트·엔비디아·도이치텔레콤도 고객사로 이름을 올렸다고 한다. 이 플랫폼에서 만들어진 앱들의 월간 조회수를 합치면 거의 10억 뷰에 달한다는 수치도 함께 나왔다.

## 오늘의 생각

세 소식을 묶어 보면 바이브코딩이 더 이상 "개발자들의 작은 신기능"이 아니라는 게 확실해진다. 클로드 코드처럼 매일 쓰는 도구는 환경 변수 하나까지 세심하게 다듬어지고 있고, 그 도구를 만드는 회사는 조 단위 밸류에이션을 놓고 상장 시점을 저울질하고, 그 옆에서는 "코드 없이 제품"을 내세운 플랫폼이 석 달 만에 매출을 20% 더 불리고 있다. 규모가 커질수록 각 플레이어의 숫자 하나하나가 곧 업계 전체의 체온계처럼 느껴진다.

---

**출처**
- [Claude Code CLI 2.1.285 changelog - Claude Code Changelog (X)](https://x.com/ClaudeCodeLog/status/2105020345254023549)
- [Claude Code 2.1.285 Adds WebFetch Off and --desktop - ccleaks.com](https://ccleaks.com/news/claude-code-2-1-285-sep-2026)
- [Anthropic delays IPO staging to November amid AI fears, WSJ says - Investing.com](https://www.investing.com/news/stock-market-news/anthropic-delays-ipo-staging-to-november-amid-ai-fears-wsj-says-4907941)
- [Anthropic IPO Slips To November As Retail Money Floods Pre-IPO Funds - Forbes](https://www.forbes.com/sites/jonmarkman/2026/09/23/anthropic-ipo-slips-to-november-as-retail-money-floods-pre-ipo-funds/)
- [Lovable's annualized revenue crosses $600M as vibe coding takes off - TechCrunch](https://techcrunch.com/2026/09/24/lovables-annualized-revenue-crosses-600m-as-vibe-coding-takes-off/)
