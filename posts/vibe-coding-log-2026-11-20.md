---
title: "[바이브코딩 동향] 2026-11-20"
date: 2026-11-20
tags: [AI이슈]
excerpt: 어제 나스닥에 데뷔한 앤트로픽(ANT)이 첫날 17% 급등 마감했고, 클로드 코드 2.1.326은 에이전트 팀에서도 Code Mode를 쓸 수 있게 하며 샌드박스 권한 검사도 손봤다.
---

**작성: 2026-11-20 09:00 (KST)**

어제 "오늘 밤 ANT 첫 거래 결과를 전해야 할 것 같다"고 썼는데, 정말로 결과가 나왔다. 그 소식과 함께, 클로드 코드의 최신 패치도 같이 정리한다.

## 앤트로픽(ANT), 나스닥 데뷔 첫날 17% 급등 마감

공모가 83달러로 확정된 앤트로픽 주식은 어제(현지시간 11/19) 나스닥에서 티커 "ANT"로 첫 거래를 시작했다. 첫 거래는 개장 후 한참 지난 오전 11시 48분경 111.50달러에 체결됐고, 장중 한때 115달러 선까지 올랐다가 92달러대까지 밀리는 등 변동성이 컸다. 결국 정규장은 97.17달러로 마감했는데, 공모가 대비 17% 오른 수준이다.

시가총액 집계는 매체마다 조금씩 다르다. 폴프파이낸셜 등은 종가 기준 시가총액을 약 1조 2700억~1조 2800억 달러로 추산했고, 블룸버그 라이브 블로그는 1조 7700억 달러라는 눈에 띄게 높은 수치를 내놨는데, 이건 완전희석 기준인지 집계 방식이 다른 건지 명확하지 않아 다른 매체 수치와 바로 비교하긴 어렵다. 어느 쪽이든 공모가 기준 밸류에이션(약 1조 4000억 달러)보다 시장이 더 쳐준 셈이다. 사전에 돌던 "첫날 20~25% 상승" 전망과 비교하면 다소 못 미치지만, 메가캡 IPO로서는 무난한 데뷔로 보인다.

## 클로드 코드 2.1.326 — 에이전트 팀도 Code Mode로

지난주 소개한 "Code Mode"(클로드가 도구를 직접 호출하는 대신 자바스크립트 코드를 써서 호출하게 하는 실험 기능)가 이번 2.1.326 패치로 에이전트 팀 기능과 함께 쓸 수 있게 됐다. 기존에는 둘 중 하나만 켤 수 있었는데, 이제는 Code Mode가 켜진 세션에서 에이전트 팀을 켜면 팀원 에이전트들도 자동으로 Code Mode로 시작한다. 그만큼 샌드박스 쪽 권한 검사도 더 꼼꼼해졌다. 샌드박스 안에서 실행되는 명령이 홈 폴더 민감 경로나 클로드 로그인 정보 파일에 접근하지 못하게 막았고, 더 많은 명령이 확인 절차를 거치거나 거부되도록 바뀌었다. 그 외에 오토 모드가 오래된 저장값 때문에 로컬 분류기에서 멈춰버리는 버그도 고쳤고, 리모트 컨트롤 응답이 휴대폰이나 브라우저로 실시간 스트리밍되는 개선도 들어갔다.

## 오늘의 생각 — 상장 다음 날의 체감

어제는 "숫자 뒤에 숨은 1년"이라는 제목으로 상장 자체의 상징성을 이야기했는데, 오늘은 그 숫자가 실제로 찍히는 걸 봤다. 17% 급등이라는 결과는 화려하지만, 사실 더 눈에 들어온 건 장중 115달러에서 92달러대까지 출렁인 변동성 쪽이었다. 메가캡 IPO라고 해서 안정적으로 움직이는 게 아니라는 걸 보여주는 사례다. 그리고 그날 저녁 바로 이어진 건 거시적인 주가 얘기가 아니라 다시 미시적인 클로드 코드 패치 노트였다. Code Mode와 에이전트 팀을 합친다는 건 작은 기능 조합처럼 보이지만, 실제로는 "코드로 도구를 호출하는 에이전트 여러 개가 동시에 돌아간다"는 꽤 복잡한 그림이다. 샌드박스 권한을 그만큼 더 조이는 패치가 같은 릴리스에 같이 들어간 것도 당연한 수순으로 보인다. 상장 첫날의 소란이 가라앉으면, 결국 이 회사를 평가하는 잣대는 다시 이런 작은 패치들이 쌓인 결과물, 즉 클로드 코드 자체가 될 것 같다.

---

**출처**
- [Anthropic Stock (ANT) Closes at $97.17: Price Prediction - FinanceFeeds](https://financefeeds.com/anthropic-ant-stock-closes-debut-97-17-price-prediction/)
- [Anthropic ANT Closes at $97.17, Up 17% on Its First Day of Trading - Invezz](https://invezz.com/news/2026/11/19/anthropic-stock-first-day-close-2026-11-19/)
- [Anthropic IPO Live: ANT's First Day of Trading, Updated Step by Step - StockTitan](https://www.stocktitan.net/articles/anthropic-ipo-live-ant-first-trading-day-2026)
- [Anthropic Market Cap After Day One: $1.28 Trillion - CryptoTicker](https://cryptoticker.io/en/anthropic-market-cap-first-day-close-ant-stock/)
- [Anthropic IPO Full Coverage: Shares Close First Trading Day Up 17% - Bloomberg](https://www.bloomberg.com/news/live-blog/2026-11-19/anthropic-trading-debut-live-updates)
- [Key Updates in Claude Code v2.1.326 - Changes to Auto Mode Allow Rules and Sandbox Write Destinations - Classmethod](https://dev.classmethod.jp/en/articles/20261117-cc-updates-v2-1-326/)
- [Claude Code 2.1.326 — Code Mode works with agent teams, sandbox tightens - ai-tldr.dev](https://ai-tldr.dev/releases/anthropic-claude-code-2-1-326/index.md)
