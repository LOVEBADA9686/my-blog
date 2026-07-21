---
title: "[바이브코딩 동향] 2026-07-21"
date: 2026-07-21
tags: [AI이슈]
excerpt: 어제 발생한 Claude Opus 4.8 오류와 Fable 5 청구 혼선, 6개월 만에 몸값이 두 배로 뛴 Lovable의 132억 달러 밸류에이션 추진, 그리고 프론트엔드 코딩 아레나에서 Fable 5를 제친 Kimi K3까지 정리.
---

**작성: 2026-07-21 09:00 (KST)**

어제 글(7/20)에서는 Fable 5 요금제 전환과 Claude Code 안정성 업데이트, 그리고 Anthropic IPO 소식을 다뤘는데, 공교롭게도 바로 그날 서비스 장애까지 겹쳤다. 오늘은 그 장애 뒷이야기와 함께, 바이브코딩 시장에서 벌어지고 있는 자금·경쟁 소식 두 건을 골랐다.

## 어제 벌어진 클로드 오류, 그리고 Fable 5 청구 혼선

7/20 Anthropic 공식 상태 페이지에 장애 기록이 여러 건 남았다. 먼저 Claude Opus 4.8에서 오류율이 치솟는 문제가 있었는데, UTC 14:41에 조사를 시작해 16:07에 원인을 특정했고 16:16에 수정 적용 후 모니터링에 들어갔다. 비슷한 시간대에 별도 이슈도 하나 더 있었는데, 이건 15:09에 수정이 적용되고 15:33에 모니터링이 재개됐다. 그리고 하필 바로 전날 글에서 다룬 Fable 5 요금제 전환과 맞물려서, Max 플랜 사용자 일부가 원래 플랜에 포함된 Fable 5 사용량인데도 크레딧을 쓰라는 잘못된 안내를 받는 문제까지 발생했다. 다운디텍터 기준으로 최근 24시간 동안 72건의 사용자 신고가 접수됐고 미 동부 시간 오전 10시 2분경 신고가 몰렸다고 한다. 지금은 모두 해결된 상태. 요금제를 막 바꾼 다음 날 바로 청구 관련 혼선이 났다는 게 타이밍상 좀 아쉽다.

## Lovable, 6개월 만에 몸값 두 배 — 132억 달러 밸류에이션 추진

바이브코딩 플랫폼 Lovable이 3억 달러 규모 신규 투자를 논의 중인데, 이번 라운드가 성사되면 기업가치가 132억 달러가 된다. 작년 12월 3억 3000만 달러 시리즈B 당시 66억 달러였던 걸 감안하면 딱 6개월 만에 두 배다. 주도 투자사는 최근 30억 달러 규모 신규 펀드를 결성한 멘로벤처스로 알려졌다. 스웨덴에서 시작한 이 회사는 창업 3년이 채 안 됐는데 지난 6월 기준 연환산매출(ARR)이 5억 달러를 찍었다고 한다. 작년 7월 18억 달러 밸류에이션으로 시리즈A(2억 달러)를 받은 뒤 딱 1년 만에 벌어진 성장 곡선인 셈이다. 지난주 글에서 다룬 Emergent(15억 달러 밸류에이션) 소식과 나란히 놓고 보면, 바이브코딩 플랫폼들의 몸값이 유독 빠르게 부풀고 있다는 게 체감된다.

## Kimi K3, 프론트엔드 코딩 아레나에서 Fable 5를 제쳤다

중국 문샷AI가 7/16 공개한 Kimi K3도 눈여겨볼 소식이다. 2.8조 파라미터 규모의 MoE(전문가 혼합) 모델로 컨텍스트 윈도우가 100만 토큰에 달하고, 896개 전문가 중 토큰당 16개만 활성화하는 구조라고 한다. 채팅·에이전트용 K3 Max와 대규모 병렬 처리용 K3 Swarm Max 두 버전이 Kimi Code와 Kimi 앱에 동시에 올라왔다. 가장 눈에 띄는 건 성적표인데, 프론트엔드 코드 아레나에서 Elo 1679점으로 1위에 올라서며 Claude Fable 5를 앞질렀다. 이전 버전 K2.6이 18위였던 걸 감안하면 한 번에 17계단을 뛰어오른 셈이고, 7개 프론트엔드 세부 영역 중 6개에서 1위를 차지했다. 가격은 입력 100만 토큰당 3달러, 출력 100만 토큰당 15달러로 대략 Claude Sonnet 급이고, 캐시 적중 시 입력 단가는 0.3달러까지 떨어진다. 게다가 7/27까지 전체 가중치를 오픈소스로 공개하겠다고 예고한 상태라, 자체 호스팅까지 가능해질 전망이다(다만 2.8조 파라미터를 돌릴 하드웨어가 있어야겠지만).

## 오늘의 생각

세 소식을 함께 보니 지금 이 시장이 얼마나 빠듯하게 돌아가는지 느껴진다. Anthropic은 이제 막 자리 잡으려던 요금제에서 하루 만에 장애를 겪었고, 그 와중에 경쟁 오픈소스 모델이 프론트엔드 코딩 벤치마크에서 앞서 나갔다. 동시에 플랫폼 쪽에서는 6개월 만에 몸값이 두 배로 뛰는 회사가 나온다. 안정성, 성능, 자본이 세 축에서 동시에 요동치고 있는 느낌이랄까. 다음 글에서는 Kimi K3 오픈소스 공개(7/27 예정)가 실제로 이뤄지는지, 그리고 그게 Claude Code 같은 도구들의 가격 정책에 영향을 주는지 지켜봐야겠다.

---

**출처**
- [Is Claude / Anthropic AI down? [July 20, 2026] - DesignTAXI Community](https://community.designtaxi.com/topic/33483-is-claude-anthropic-ai-down-july-20-2026/#comment-35717)
- [Claude Status](https://status.claude.com/)
- [Lovable reportedly in talks to double its valuation to $13.2B - TechCrunch](https://techcrunch.com/2026/07/08/lovable-reportedly-in-talks-to-double-its-valuation-to-13-2b/)
- [Lovable in Talks to Raise $300M at $13.2B Valuation, Doubling in Six Months - MLQ News](https://mlq.ai/news/lovable-in-talks-to-raise-300m-at-132b-valuation-doubling-in-six-months/)
- [What Is Kimi K3? Moonshot's 2.8T, 1M-Context Flagship - Kie.ai](https://kie.ai/blog/what-is-kimi-k3)
- [Moonshot's Kimi K3 pushes Chinese AI into Fable-level territory - Fortune](https://fortune.com/2026/07/16/moonshots-kimi-k3-pushes-chinese-ai-into-fable-level-territory/)
