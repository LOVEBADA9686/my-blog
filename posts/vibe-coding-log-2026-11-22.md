---
title: "[바이브코딩 동향] 2026-11-22"
date: 2026-11-22
tags: [AI이슈]
excerpt: 클로드 코드 2.1.328이 오토 모드를 기본값으로 바꾸고 /code-review와 /simplify를 완전히 분리했다. 사흘 전 나스닥에 데뷔한 앤트로픽 주가는 34% 급등 출발 후 하루 만에 숨이 꺾였다.
---

**작성: 2026-11-22 09:00 (KST)**

이번 주말은 클로드 코드 패치 하나와, 지난 목요일(11/19) 있었던 앤트로픽 나스닥 데뷔의 뒷이야기를 정리해봤다. 둘 다 "커졌다"는 공통점이 있는데, 하나는 도구가 손대는 범위가 커진 이야기고 다른 하나는 돈의 규모가 커진 이야기다.

## 클로드 코드 2.1.328 — 오토 모드가 기본값이 되고, /code-review와 /simplify가 완전히 갈라졌다

11/19에 나온 2.1.328은 패치 하나치고는 변화가 꽤 묵직하다. 가장 눈에 띄는 대목은 오토 모드 확장이다. 오퍼스 4.6과 소닛 4.6에 한해 아마존 베드록, 구글 클라우드의 에이전트 플랫폼, 마이크로소프트 파운드리, 그리고 클로드 앱스 게이트웨이에서도 오토 모드를 쓸 수 있게 됐고, 더 중요한 건 권한 모드를 따로 지정하지 않은 인터랙티브 세션이 이제 기본적으로 오토 모드로 시작한다는 점이다. 그동안 오토 모드는 명시적으로 켜야 하는 옵션이었는데, 이번부터는 "아무것도 지정하지 않으면 오토"로 기본값 자체가 바뀐 셈이다. 두 번째로 이 블로그 작업 흐름과도 맞닿아 있는 변화가 하나 있다. `/code-review`가 이제 대부분의 모델에서 버그와 CLAUDE.md 위반만 보고하도록 범위가 좁아졌고, 재사용성·단순화·효율성 쪽 정리는 `/simplify`가 전담하게 바뀌었다. 지금까지는 `/code-review` 한 번으로 버그 지적과 스타일 제안이 뒤섞여 나왔는데, 이제는 "진짜 문제"와 "정리하면 좋은 것"이 명확히 분리된 거다. 그 외에 MCP 툴 훅에 `onFailure: "block"` 옵션이 추가돼 훅 호출이 실패하면 해당 동작을 막을 수 있게 됐고, 권한 프롬프트를 건너뛰는 세션에서 보낸 메시지가 클라우드 세션에서 누락될 수 있다는 경고 문구도 새로 생겼다.

## 앤트로픽 나스닥 데뷔, 역대 최대 IPO가 하루 만에 숨 고르기

사흘 전 목요일(11/19), 앤트로픽이 티커 ANT로 나스닥에 입성했다. 공모가는 희망 밴드(70~78달러)보다 높은 83달러로 정해졌고, 거래 첫날 시가는 111.50달러로 공모가 대비 34% 뛰며 출발했다. 장중 한때 시가총액이 2.1조 달러를 넘기며 스페이스X의 지난 6월 상장 기록을 뛰어넘는 역대 최대 IPO로 기록됐다. 공모 규모 자체도 980M주를 팔아 약 813억 달러를 조달하며 역시 역대 최대였다. 다만 상승분이 끝까지 가지는 못했다. 거래 시작 20분 만에 100달러 아래로 밀렸고, 보도마다 차이는 있지만 종가는 95~97달러대, 즉 공모가 대비 15~17% 상승으로 마감한 것으로 전해진다. 이날 S&P500이 0.9%, 나스닥100이 0.7% 빠지는 약세장이었다는 점을 감안하면 그 자체로 나쁜 성적은 아니지만, "장중 34% 급등"이라는 헤드라인과 "하루 만에 반 토막 난 상승분"이라는 결과 사이의 간극이 꽤 크게 느껴진다.

## 오늘의 생각 — 범위는 넓어지고, 흥분은 가라앉고

오늘 두 소식을 나란히 놓고 보니 비슷한 패턴이 보인다. 오토 모드가 기본값이 된다는 건 "사람이 매번 확인하지 않아도 되는 범위"가 넓어진다는 뜻이고, 2.1조 달러짜리 데뷔는 "이 기술에 베팅하는 돈의 범위"가 넓어졌다는 뜻이다. 둘 다 처음 숫자만 보면 숨이 턱 막히는데, 막상 하루를 지나고 보면 오토 모드도 결국 권한 모드를 명시하면 그대로 피할 수 있는 기본값일 뿐이고, 주가도 장중 흥분이 걷히고 나니 "그래도 공모가보다는 15% 높다"는 담담한 숫자로 가라앉았다. 바이브 코딩 쪽 글을 매일 쓰다 보면 이런 "처음엔 과장되게 들리던 숫자가 하루 이틀 지나면 평범해지는" 패턴을 자주 보게 되는데, 그게 기술이든 주가든 결국 비슷하게 작동하는 것 같다.

---

**출처**
- [Claude Code CLI 2.1.328 changelog - Claude Code Changelog (X/Twitter)](https://x.com/ClaudeCodeLog/status/2123227004879192138)
- [Release Claude Code v2.1.328 - GitHub (marckrenn/claude-code-changelog)](https://github.com/marckrenn/claude-code-changelog/releases/tag/v2.1.328)
- [claude-code-2-1-328 - claudekit](https://claudekit.io/en/updates/claude-code-2-1-328/)
- [Anthropic starts trading in the US after blockbuster IPO - Al Jazeera](https://www.aljazeera.com/economy/2026/11/19/anthropic-starts-trading-in-the-us-after-blockbuster-ipo)
- [Anthropic IPO: Claude Maker Opens at $111.50 in Record Nasdaq Debut - TechRepublic](https://www.techrepublic.com/article/news-anthropic-ipo-nasdaq-trading-debut/)
- [Anthropic opens 34% above IPO price - StockAnalysis.com](https://stockanalysis.com/news/anthropic-opens-34-percent-above-ipo-price/)
- [Anthropic stock sputters after historic IPO - Futurism](https://futurism.com/artificial-intelligence/anthropic-stock-sputters-after-historic-ipo)
