---
title: "[바이브코딩 동향] 2026-10-12"
date: 2026-10-12
tags: [AI이슈]
excerpt: 앤트로픽이 Claude Haiku 5.5를 내놓으며 가격을 75% 낮췄고, 펜타곤은 6개월 전환 기간을 끝내고 클로드 사용을 공식적으로 멈췄다고 밝혔다. 한쪽에선 더 싸고 빠른 모델로 승부하고, 다른 쪽에선 신뢰 문제로 발을 빼는 모습이 같은 주에 겹쳤다.
---

**작성: 2026-10-12 09:00 (KST)**

어제 포스팅에서 앤트로픽이 클로드의 '사고' 사례들을 자진 공개한 이야기를 다뤘는데, 이번 주 흐름을 쭉 따라가 보니 같은 시기에 완전히 다른 방향의 뉴스 두 개가 같이 돌고 있었다. 하나는 "더 싸고 빠르게"를 외치는 제품 발표, 다른 하나는 신뢰가 깨져서 발을 빼는 고객 이야기다.

## Claude Haiku 5.5, 가격을 75% 낮췄다

10월 7일 앤트로픽은 경량 모델 Claude Haiku 5.5를 출시했다. 가장 눈에 띄는 건 가격이다. 10만 토큰 이하 기준으로 입력 100만 토큰당 0.10달러, 출력 100만 토큰당 0.50달러로, 기존 Haiku 4.5(입력 1달러/출력 5달러)보다 평균 75% 저렴하다고 밝혔다. 다만 프롬프트가 10만 토큰을 넘어가면 가격이 입력 0.50달러/출력 2.50달러로 올라간다. 이번 출시엔 'effort' 조절 기능도 같이 들어갔는데, 쉽게 말해 작업 난이도에 따라 모델이 얼마나 "힘을 들일지"를 조절할 수 있게 한 것이다. 동시에 Sonnet 5.5의 캐시 읽기 가격도 100만 토큰당 0.20달러에서 0.10달러로 반으로 내렸고, Max/Team 요금제 사용자에게는 매달 API 크레딧을 추가로 얹어준다고 한다.

바이브코딩 하는 입장에서 보면 이건 꽤 체감되는 소식이다. 간단한 리팩터링이나 반복적인 코드 리뷰처럼 "비싼 모델까지는 필요 없는" 작업을 저가 모델로 돌리는 조합이 점점 더 저렴해지고 있다는 뜻이라서다. 에이전트를 여러 개 띄워 역할을 나누는 멀티 에이전트 워크플로우에서, 비용 걸림돌이 하나씩 줄어드는 느낌이다.

## 펜타곤, "클로드 사용 완전히 중단했다"

반대쪽에는 완전히 다른 흐름이 있다. 트럼프 대통령이 연방기관에 앤트로픽 기술 사용을 중단하라고 지시한 뒤 6개월의 전환 기간이 주어졌는데, 이번 주 미국 국방부(펜타곤) 측이 "앤트로픽 제품 사용을 중단했다"고 공식적으로 밝혔다. 배경은 지난 2월부터 이어진 갈등이다. 펜타곤은 클로드를 기밀망에서 "모든 합법적 목적"으로 쓰고 싶어 했지만, 앤트로픽은 자율무기 운용과 미국 시민 대상 대규모 감시 두 가지는 레드라인으로 걸고 양보하지 않았다. 국방장관 측이 2억 달러 규모 계약 해지 가능성까지 언급했다는 보도도 있었다. BBC 취재에 따르면 실제로는 불과 지난주까지도 이란 관련 군사 작전 등에서 클로드가 쓰이고 있었다는 얘기도 나와, "완전 중단"이 선언과 현실 사이에 다소 시차가 있었던 것으로 보인다.

## 오늘의 생각

같은 주에 "더 싸고 빠른 모델로 시장을 넓히겠다"는 뉴스와 "안전 기준 때문에 큰 고객을 잃었다"는 뉴스가 동시에 나온 게 묘하게 상징적이다. 에이전트에게 권한을 더 많이, 더 싸게 줄 수 있게 되는 흐름과, 바로 그 권한의 범위를 두고 신뢰가 깨지는 흐름이 같은 회사에서 동시에 벌어지고 있는 셈이다. 바이브코딩을 하는 입장에서는 결국 비용보다 "어디까지 믿고 맡길 것인가"의 기준을 각자 더 명확히 세워야 하는 시기로 들어선 것 같다. 모델이 싸지는 건 좋은 일이지만, 권한의 경계를 흐릿하게 둔 채로 더 많은 일을 맡기면 어제 글에서 다룬 것 같은 사고가 더 쉽게, 더 자주 터질 수 있다는 걸 이번 주 뉴스 두 개가 같이 보여준 셈이다.

---

**출처**
- [Anthropic Releases Claude Haiku 5.5 With Lower Prices and Effort Controls](https://letsdatascience.com/news/anthropic-releases-claude-haiku-55-with-lower-prices-and-eff-f698c663)
- [Anthropic Claude Haiku 5.5 - The New Stack](https://thenewstack.io/anthropic-claude-haiku-5-5/)
- [Pentagon says it has stopped using Anthropic's Claude after a six-month phaseout](https://runtimewire.com/article/pentagon-stops-anthropic-claude-use-maven-phaseout)
- [Pentagon 'close to cutting ties' with AI firm Anthropic amid frustration over restrictions - South China Morning Post](https://www.scmp.com/news/world/united-states-canada/article/3343775/pentagon-close-cutting-ties-ai-firm-anthropic-amid-frustration-over-restrictions)
