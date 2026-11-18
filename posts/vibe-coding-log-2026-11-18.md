---
title: "[바이브코딩 동향] 2026-11-18"
date: 2026-11-18
tags: [AI이슈]
excerpt: 앤트로픽 IPO는 오늘 가격 확정을 앞두고 밴드(70~78달러) 위로 책정될 수 있다는 보도가 나왔고, 클로드 코드는 지난주 2.1.323에서 "Code Mode"라는 실험적 기능을 선보였다. 그리고 사이먼 윌리슨의 "게임 바이브코딩 변곡점" 에세이도 짚어본다.
---

**작성: 2026-11-18 09:00 (KST)**

드디어 앤트로픽 IPO 가격이 확정되는 날이다. 그 소식과 함께, 지난 며칠 묻혀 있던 클로드 코드의 꽤 흥미로운 신기능 하나, 그리고 "바이브 코딩"이라는 단어 자체에 대한 생각할 거리를 하나 묶어봤다.

## 앤트로픽 IPO, 밴드(70~78달러) 위로 책정될 수도

오늘(11/18)이 바로 가격 확정일이다. 지난 10일 공개된 희망 밴드는 주당 70~78달러, 완전희석 기준 밸류에이션 1조 4040억 달러였는데, 파이낸셜타임스가 "사정을 아는 관계자 5명"을 인용해 보도한 바에 따르면 주관사들이 수요가 워낙 강해서 이 밴드보다 높은 가격을 검토하고 있다고 한다. 이렇게 되면 밸류에이션이 1조 5000억 달러 이상으로 올라갈 수 있다는 분석도 함께 나왔다. CNBC도 11월 16일자 가이드 기사에서 "18일 가격 확정, 19일 나스닥(티커 ANT)에서 거래 시작" 일정을 재확인했다.

재미있는 건 숫자가 보도마다 조금씩 다르다는 점이다. 한 차례 "정정된" 공시에서는 8억 6700만 주를 70~80달러에 판매해 최대 693억 달러를 조달한다는 내용이 돌았다가 이후 철회되기도 했다는 보도도 있어서, 최종 수치는 역시 오늘 밤(미국 시간) 가격이 확정돼야 정리될 것 같다. 지난 며칠 이 블로그에서 계속 "오버부킹 몇 배"를 다뤘는데, 오늘은 그 숫자 게임의 마지막 라운드인 셈이다. 내일 이 시간쯘엔 실제 공모가와 ANT의 첫 거래가를 비교하는 이야기를 쓰게 될 것 같다.

## 클로드 코드 2.1.323 — "Code Mode"라는 실험적 기능

지난 12일 나온 클로드 코드 2.1.323을 다시 들여다봤다. 가장 눈에 띄는 건 "Code Mode"라는 실험적(옵트인) 기능이다. 지금까지 클로드 코드는 도구(tool)를 한 번에 하나씩 호출하는 방식이었는데, Code Mode를 켜면 클로드가 자신의 도구들을 호출하는 자바스크립트 코드를 직접 "작성"해서 한꺼번에 실행하게 된다. 여러 도구 호출을 코드 한 덩어리로 묶어 처리하는 방식이라, 반복적인 멀티스텝 작업에서 왕복 횟수를 줄여줄 걸로 보인다. 조직 단위로 이 기능을 끌 수 있는 옵션도 같이 들어갔다.

그 외에도 플러그인 `plugin.json`에 `engines["claude-code"]`로 지원 버전 범위를 명시할 수 있게 됐고(범위 밖 버전에서는 설치·업데이트·로드가 안 됨), 알 수 없는 모델 ID의 기본 컨텍스트 창이 20만 토큰에서 100만 토큰으로 바뀌는 변화도 있었다(`/autocompact`나 환경변수로 이전 동작으로 되돌릴 수 있다고 한다).

## 오늘의 생각 — "바이브 코딩"이라는 말, 벌써 1년

사이먼 윌리슨이 10월 말에 쓴 글을 뒤늦게 챙겨봤다. 지난 몇 주간 클로드로 "바이브 코딩"한 게임을 네 개나 만들었는데 전부 진짜로 즐길 만했다는 내용이었다. 그중 하나인 커맨드앤컨커 스타일 RTS "Battle Drones"는 코딩 에이전트가 321번의 커밋과 12차례 큰 반복을 거쳐 완성했고, 그가 던진 프롬프트 중 "그냥 훨씬 더 재밌게 만들어줘(Make it a LOT more fun)"가 의외로 잘 먹혔다고 적었다. 그는 자신의 작업 시간은 네 시간을 넘지 않았다고도 덧붙였다.

생각해보니 "바이브 코딩"이라는 말이 콜린스 사전의 올해의 단어로 뽑힌 게 작년 11월 6일이었다. 딱 1년이 지난 지금, 처음엔 "일단 되게만 만들고 코드는 안 본다"는 다소 가벼운 뉘앙스였던 이 단어가 이제는 게임 하나를 통째로 완성하는 수준까지 와 있다는 게 체감이 된다. 숫자(IPO 밸류에이션)로 증명되는 쪽과, 실제로 뭔가가 "재밌어졌다"로 증명되는 쪽이 같은 1년 안에 동시에 일어나고 있다는 게 오늘 정리하면서 든 생각이다.

---

**출처**
- [Anthropic Bankers Reportedly Weigh Higher IPO Price on Heavy Demand - LetsDataScience](https://letsdatascience.com/news/anthropic-bankers-reportedly-weigh-higher-ipo-price-on-heavy-dcc7eee7)
- [Anthropic's bankers weigh pricing its IPO above range - Finimize](https://finimize.com/content/anthropics-bankers-weigh-pricing-its-ipo-above-range)
- [Anthropic IPO guide: The price range, date and more - CNBC](https://www.cnbc.com/2026/11/16/anthropic-ipo-date-price-range.html)
- [Anthropic sets IPO price range of $70 to $78 per share to reach an implied valuation of $1.404 trillion - TechCrunch](https://techcrunch.com/2026/11/10/anthropic-sets-ipo-price-range-of-70-to-78-per-share-to-reach-an-implied-valuation-of-1-404-trillion/)
- [Anthropic Retracts Reported $70–$80 IPO Price Range, Says Pricing Update Is Coming - Stocktwits](https://stocktwits.com/news-articles/markets/equity/anthropic-retracts-reported-70-80-ipo-price-range-says-pricing-update-is-coming-listing-expected-next-week/cNGud3sR970)
- [Key Updates in Claude Code v2.1.322–v2.1.323 - Code Mode and Fixes to Bash Permission Checks - dev.classmethod.jp](https://dev.classmethod.jp/en/articles/20261113-cc-updates-v2-1-323/)
- [Claude Code 2.1.323 — Code Mode lets Claude call its tools from JavaScript - ai-tldr.dev](https://ai-tldr.dev/releases/anthropic-claude-code-2-1-323/index.md)
- [The October inflection point for vibe game development - Simon Willison's Weblog](https://simonwillison.net/2026/oct/28/vibe-game-development)
- [Simon Willison ships vibe-coded RTS in 321 agent commits - AI Weekly](https://aiweekly.co/alerts/simon-willison-ships-vibe-coded-rts-in-321-agent-commits)
