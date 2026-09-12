---
title: "[바이브코딩 동향] 2026-09-12"
date: 2026-09-12
tags: [AI이슈]
excerpt: 내일(9/13) 끝나는 클로드 코드 주간 한도 +50% 프로모션과 9/14부터 시작되는 "영구 25% 인상"이 사실상 17% 순삭감이라는 계산이 나왔고, 앤트로픽은 클로드가 실제 사이버 범죄 15건에 툴체인으로 쓰였다는 첫 위협 인텔리전스 리포트를 공개했다.
---

**작성: 2026-09-12 09:00 (KST)**

내일부터 클로드 코드 지갑 사정이 조금 팍팍해진다는 소식과, 앤트로픽이 처음으로 "클로드가 실제 범죄에 얼마나 쓰였는지"를 사례 기반으로 공개한 소식을 오늘은 정리해본다.

## 클로드 코드 주간 한도, 내일(9/13) 프로모션 종료 → 9/14 "영구 25% 인상"의 실체는 17% 삭감

지난 5월 13일부터 유지돼 온 클로드 코드 주간 사용량 한도 +50% 프로모션이 내일 9월 13일 밤 11시 59분(태평양시간)을 끝으로 종료된다. 그리고 바로 다음 날인 9월 14일부터는 프로·맥스·팀, 그리고 좌석제 엔터프라이즈 플랜을 대상으로 "영구적인 25% 인상"이 적용된다. 언뜻 들으면 한도가 더 늘어나는 것 같지만, 실제 계산은 정반대다. 프로모션 이전 기준치를 100이라 하면 +50% 프로모션 적용 시 150이었는데, 9/14부터 적용되는 "영구 25% 인상"은 기준치의 125에 불과하다. 즉 원래 기준보다는 25% 높지만, 지금 쓰고 있는 프로모션 한도(150)보다는 16.7%, 대략 17% 줄어드는 셈이다. 무료 플랜과 사용량 기반 엔터프라이즈 좌석은 애초에 이 프로모션 대상이 아니었고, 이번 변경은 주간 한도에만 적용되며 5시간 세션 한도는 그대로다.

앤트로픽 공식 계정(ClaudeDevs)은 "9월 14일부터 프로·맥스·팀·좌석제 엔터프라이즈의 표준 주간 한도를 영구적으로 25% 인상한다. 그전까지는 현재의 50% 인상분이 유지된다"고만 짧게 공지했는데, 이 문구만 보면 순수한 혜택 확대처럼 읽힌다. 하지만 여러 매체가 지적하듯 실질은 "5월부터 누려온 임시 한도"에서 "그보다 낮은 영구 한도"로 넘어가는 구간이라, 헤비 유저 입장에서는 내일까지가 사실상 마지막 풍족한 한 주다.

## 앤트로픽, "클로드가 실제 사이버 범죄 15건에 쓰였다" 첫 사례 기반 위협 리포트 공개

9월 10일 앤트로픽은 2025년 12월부터 2026년 8월까지 자사가 탐지·차단한 클로드 오남용 사례를 담은 첫 "위협 인텔리전스 리포트"를 공개했다. 사이버 공격, 영향력 공작, 감시, 사기, 생물학적 오남용, 재래식 무기 개발, 증류(모델 추출) 등 7개 영역을 다뤘는데, 그중 가장 눈에 띄는 숫자는 클로드가 실제 툴체인의 일부로 쓰인 사이버보안 침해 사례가 15건에 달한다는 발표다. 앤트로픽이 이런 규모로 실제 침해 사고에서의 AI 관여를 공개한 건 이번이 처음이다.

리포트에 담긴 사례들도 구체적이다. 러시아 소행으로 추정되는 스파이 조직이 AI 에이전트를 시켜 보안 제품이 자기네 악성코드를 탐지하는지 계속 감시하다가, 탐지될 때마다 악성코드를 다시 만들어내는 방식으로 탐지를 회피한 사례가 실렸다. 또 데이팅 앱을 이용한 사기에서는 클로드가 4,700개가 넘는 가짜 데이팅 프로필을 운영하며 2026년 4월 두 주 동안 2만 5천 명 이상의 이용자와 236만 건의 메시지를 주고받은 사례도 공개됐다. 이번 리포트는 지난주(9/9) 공개된 "클로드의 네 번째 사이버보안 사고" 알라인먼트 평가 보고서와는 별개로, 앤트로픽이 자사 모델의 실제 오남용 실태를 훨씬 더 세세하게 드러내기 시작했다는 흐름으로 읽을 수 있다.

## 오늘의 생각

두 소식을 나란히 보면 묘하게 대비된다. 하나는 "돈 문제"고 하나는 "안전 문제"인데, 둘 다 결국 같은 회사가 "실은 우리가 알려온 것보다 조건이 안 좋다"는 걸 스스로 인정하는 모양새다. 한도 이야기는 "영구 인상"이라는 마케팅 문구 뒤에 숨은 실질적인 축소를, 위협 리포트는 그동안 뭉뚱그려 말해온 "오남용 방지 노력" 뒤에 숨어있던 구체적인 피해 규모를 드러낸다. 매일 클로드 코드로 작업하는 입장에서는 당장 내일부터 체감 한도가 줄어드는 게 더 와닿긴 하지만, 장기적으로는 이런 투명성(혹은 뒤늦은 인정)이 쌓여야 이 도구를 계속 믿고 쓸 수 있겠다는 생각도 든다.

---

**출처**
- [Claude Code Limits: 25% Permanent Increase Starting September 14 - AI Catchup](https://aicatchup.com/news/claude-code-weekly-limits-permanent-25-percent-september-2026)
- [Claude Code +50% Weekly Limits Promo Extended Through September 13, 2026 - AI Catchup](https://aicatchup.com/news/claude-code-weekly-limits-50-percent-promo)
- [Anthropic is cutting Claude Code's current weekly limits by 17% - BleepingComputer](https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-is-cutting-claude-codes-current-weekly-limits-by-17-percent/)
- [Claude Code's Weekly Limits Drop 17% on September 14 - Digital Applied](https://www.digitalapplied.com/blog/claude-code-weekly-limit-reduction-september-14)
- [Countering misuse of AI: September 2026 - Anthropic](https://www.anthropic.com/threat-intelligence-report-september-2026)
- [Anthropic's New Threat Intelligence Report Reveals AI's Growing Role In Cybercrime, Influence Campaigns And State-Sponsored Operations - Metaverse Post](https://mpost.io/anthropics-new-threat-intelligence-report-reveals-ais-growing-role-in-cybercrime-influence-campaigns-and-state-sponsored-operations/)
- [Anthropic details Claude misuse in deception, surveillance, and malware - The Rundown AI](https://www.therundown.ai/news/anthropic-claude-misuse-threat-report-september-2026)
