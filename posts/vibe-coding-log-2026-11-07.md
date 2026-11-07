---
title: "[바이브코딩 동향] 2026-11-07"
date: 2026-11-07
tags: [AI이슈]
excerpt: 지난주 다뤘던 클로드 코드의 "게임 복제 금지" 규칙이 선의의 개발자까지 막아버린 데 대한 후속 소식과, 앤트로픽이 나스닥 상장 티커를 "ANT"로 정하면서 드러난 창업자 초강력 의결권 구조를 정리했다.
---

**작성: 2026-11-07 09:00 (KST)**

이번 주는 지난주 다룬 소식 두 개가 각각 다음 단계로 넘어간 느낌이다. 하나는 "규칙을 만들었더니 선의의 사용자까지 막혔다"는 이야기의 후속편이고, 다른 하나는 "언제 상장하냐"는 질문에서 "어떤 회사로 상장하냐"는 질문으로 넘어간 이야기다.

## 클로드 코드의 "게임 복제 금지" 규칙, 결국 손봐야 했다

지난 11월 2일 글에서 다뤘던 클로드 코드의 게임 재현 금지 규칙, 기억날지 모르겠다. 10월 27일에 추가된 이 규칙은 특정 기존 게임을 그대로 베끼는 작업을 거절하도록 오퍼스 5.5 프롬프트에 두 문장을 심어넣은 것이었는데, 문제는 게임 제작과 무관한 작업까지 걸려 넘어진다는 점이었다. 톰스하드웨어와 우크라이나 매체 메자(Mezha) 보도에 따르면, 결국 앤트로픽은 이 규칙을 다시 손봤다. 이제는 사용자가 특정 게임을 복제해달라고 요청하면 클로드가 그냥 거절만 하는 게 아니라, 같은 장르의 "오리지널" 게임을 만들어주겠다고 먼저 제안하는 방식으로 바뀌었다고 한다.

그런데 이게 완전히 해결된 건 아닌 모양이다. 더넥스트웹 보도를 보면, 보드 워게임을 클라이언트 의뢰로 디지털화해주는 1인 스튜디오 "Conflict Simulations LLC"가 10월 30일 깃허브 이슈를 올렸는데, 요지는 "게임 저작권자 본인이 의뢰한 작업까지 서버 쪽 지시 때문에 거절당한다"는 것이었다. 즉 "복제냐 아니냐"를 가르는 기준이 "저작권자의 의뢰인지"까지는 구분하지 못한다는 얘기다. 앤트로픽의 애디 오스마니는 이 규칙이 하드 밴(hard ban)이 아니라 모델을 "조심스러운 방향으로 유도"하는 정도라고 설명하면서, 억울하게 막힌 작업이 있으면 직접 제보해달라고 공개적으로 요청한 상태다. 다만 이 완화 조치가 공식 릴리즈 노트에 명시됐는지는 매체들도 확인하지 못했다고 밝히고 있다.

## 앤트로픽 상장 티커는 "ANT"... 그런데 의결권 구조가 눈에 띈다

지난주 로드쇼 일정을 다뤘던 앤트로픽 IPO 이야기도 한 걸음 더 나갔다. 레츠데이터사이언스, 섁뉴스, 프리프레스저널 등 보도에 따르면 앤트로픽은 S-1 수정 신고를 통해 나스닥 글로벌셀렉트마켓에 "ANT"라는 티커로 상장하겠다고 공식화했다. 공모가나 공모 주식 수는 여전히 비어있는 상태라 아직 확정된 건 없다.

흥미로운 건 지배구조다. 보도들을 종합하면 앤트로픽은 나스닥 규정상 "지배기업(controlled company)"으로 분류되는데, 일반 투자자가 사는 클래스 A 주식은 1주당 1표인 반면 창업자들이 쥐고 있는 클래스 F 주식이 전체 의결권의 50.1%를 차지한다고 한다. 즉 상장을 해도 회사의 실질적인 의사결정권은 창업자 그룹이 그대로 가져가는 구조다. 공모 자금은 운영자금, 컴퓨트·인프라 투자, 인력 채용 및 유지에 쓰겠다고 밝혔고, 주관사는 골드만삭스와 모건스탠리를 포함해 22개 은행이 이름을 올렸다.

## 오늘의 생각

두 소식 모두 "원칙을 세우는 것"과 "그 원칙이 현실에서 깨지지 않게 다듬는 것" 사이의 간극을 보여준다는 점에서 닮아 있다. 게임 복제 금지 규칙은 좋은 의도로 만들어졌지만 저작권자 본인의 의뢰까지 걸러내지 못해 계속 다듬어지는 중이고, 세계 최대급 IPO를 준비하는 회사조차 "상장은 하되 의사결정권은 그대로 지킨다"는 식으로 원칙과 현실 사이에서 나름의 타협점을 찾고 있다. 바이브코딩 생태계를 지켜보는 입장에서는, 어떤 규칙이든 발표되는 순간의 문구보다 그 뒤에 쌓이는 깃허브 이슈와 피드백을 따라가는 게 실제로 뭐가 바뀌는지 파악하는 데 더 유용하다는 생각이 든다.

---

**출처**
- [Anthropic loosens Claude's game cloning ban — AI will now offer to build original games in the requested genre - Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-loosens-game-restrictions-claude-will-now-offer-to-build-original-game-in-same-genre-if-asked-to-copy)
- [Anthropic updates Claude's rule on copying games - Mezha.net](https://mezha.net/eng/news/mezha-4dbe1cd1ad8f0f67640d502d_anthropic_updates_claude-s/)
- [Developers say Claude Code now refuses work on recreating existing games - TheNextWeb](https://thenextweb.com/news/claude-code-game-recreation-refusals-developers)
- [Anthropic Files S-1 for Nasdaq IPO Under Ticker ANT - Let's Data Science](https://letsdatascience.com/news/anthropic-files-s-1-for-nasdaq-ipo-under-ticker-ant-d013b0b0)
- [Anthropic files S-1 with SEC, will IPO on NASDAQ and trade with ANT stock symbol - Shacknews](https://www.shacknews.com/article/151141/anthropic-claude-stock-ipo)
- [Anthropic Files S-1 With SEC For Proposed IPO, Plans Nasdaq Listing under 'ANT' - Free Press Journal](https://www.freepressjournal.in/tech/anthropic-files-s-1-with-sec-for-proposed-ipo-plans-nasdaq-listing-under-ant)
