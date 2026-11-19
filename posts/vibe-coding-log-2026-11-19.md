---
title: "[바이브코딩 동향] 2026-11-19"
date: 2026-11-19
tags: [AI이슈]
excerpt: 앤트로픽이 공모가를 밴드 위인 주당 83달러로 확정하며 오늘 나스닥(ANT)에서 거래를 시작한다. 그리고 클로드 코드 2.1.325의 zstd 보안 패치와 서브에이전트 개선 소식도 함께 정리했다.
---

**작성: 2026-11-19 09:00 (KST)**

어제 "오늘 밤 가격이 확정될 것"이라고 썼는데, 정말로 어제(미국 시간 11/18) 밤 사이에 숫자가 나왔다. 그 소식과 함께, 지난 며칠 묻혀 있던 클로드 코드 2.1.325 업데이트도 같이 정리해본다.

## 앤트로픽 IPO, 공모가 83달러로 확정 — 오늘 나스닥 데뷔

결국 밴드(70~78달러) 위로 책정됐다. CNBC가 소식통을 인용해 보도한 바에 따르면 앤트로픽의 공모가는 주당 83달러로 확정됐고, 한국 시간으로 오늘 밤(미국 동부시간 11/19 개장) 나스닥에서 티커 "ANT"로 거래를 시작한다. 이 가격 기준으로 완전희석 밸류에이션은 1조 4000억 달러를 넘는 것으로 추산된다.

다만 세부 숫자는 여전히 보도마다 다르다. CNBC 쪽 소식통은 공모 규모가 기존 계획보다 커진 약 9억 7960만 주로, 조달액이 813억 달러에 이른다고 전했고, 키플링거는 8억 2500만 주, 약 685억 달러 조달이라는 다른 수치를 냈다. 야후 파이낸스는 사전 수요가 6~7배 오버부킹됐고, 상장 전 파생상품 시장에서는 첫날 20~25% 정도 뛸 거란 전망이 돌았다고 전했는데, 이건 어디까지나 예측이라 실제 첫 거래가는 오늘 밤이 지나야 알 수 있다. 지난 며칠 이 블로그에서 계속 다룬 "밴드 위냐 아니냐" 논쟁은 일단 이렇게 정리됐고, 내일은 실제 ANT 첫 거래 결과를 전해야 할 것 같다.

## 클로드 코드 2.1.325 — zstd 보안 패치와 서브에이전트 개선

지난주 조용히 나온 클로드 코드 2.1.325을 다시 들여다봤다. 가장 눈에 띄는 건 zstd 압축 해제 과정의 보안 취약점을 막은 패치다. 구체적인 공격 시나리오는 공개되지 않았지만, 압축 데이터를 다루는 경로에 문제가 있었던 걸로 보인다. 그 외에도 서브에이전트가 상황에 맞는 모델을 더 똑똑하게 고르도록 손봤고, 서드파티 게이트웨이를 쓰는 환경에서 그동안 제대로 안 되던 컨텍스트 압축(compaction)이 이제 정상 동작한다고 한다. 샌드박스 안에서 돌리는 Bash 명령도 이제 기본적으로 일반 명령과 똑같은 권한 승인 절차를 따르도록 바뀌었는데, 샌드박스라고 느슨하게 넘어가던 부분을 좀 더 엄격하게 만든 셈이다. 그 밑으로는 로그인·MCP 서버·텔레메트리·터미널 UI 관련 소소한 버그 수정이 길게 이어진다.

## 오늘의 생각 — 숫자 뒤에 숨은 1년

어제도 썼지만, "바이브 코딩"이라는 말이 생긴 지 딱 1년이 지났다. 그 1년 동안 이 단어를 쓰던 회사가 오늘 나스닥에 상장한다는 게 묘하게 상징적으로 느껴진다. 83달러라는 숫자, 1조 4000억 달러라는 밸류에이션 — 이런 큰 숫자들이 뉴스를 장식하지만, 정작 이 블로그에서 매일 다루는 건 클로드 코드의 작은 보안 패치 하나, 플러그인 버전 범위 하나 같은 미시적인 변화들이다. 거시적인 숫자(상장, 밸류에이션)와 미시적인 변화(패치, 기능 하나)가 같은 회사 안에서 같은 주에 동시에 일어나고 있다는 게, 이 바닥이 지금 얼마나 빠르게 굴러가고 있는지를 보여주는 것 같다. 오늘 밤 ANT의 첫 거래가가 어떻게 나올지, 내일 이 자리에서 이어서 정리하겠다.

---

**출처**
- [Anthropic prices IPO at $83 per share, above expected range, source tells CNBC - CNBC](https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html)
- [Anthropic Prices IPO at $83, Nasdaq Trading to Begin Thursday - KuCoin](https://www.kucoin.com/news/flash/anthropic-prices-ipo-at-83-nasdaq-trading-to-begin-thursday)
- [Anthropic IPO live: Company said to price stock at $83, begin trading Thursday - Yahoo Finance](https://finance.yahoo.com/technology/live/anthropic-ipo-live-company-set-to-price-stock-between-70-and-78-as-trading-starts-thursday-174130523.html)
- [Anthropic's IPO set for blastoff this week in key test for AI boom - CBS News](https://www.cbsnews.com/news/anthropic-ipo-ai-boom-nasdaq-debut/)
- [Claude Code v2.1.325 - Havoptic](https://www.havoptic.com/r/claude-code-2.1.325)
- [Claude Code 2.1.325: fixes to zstd decoding, permission, MCP bugs - Meteora Web](https://meteoraweb.com/en/news/claude-code-2-1-325-fixes-zstd-decoding-permission-mcp-bugs)
- [Claude Code 2.1.321-2.1.325 (2026) - SmartScope](https://smartscope.blog/en/blog/claude-code-2-1-321-2-1-325-2026/)
