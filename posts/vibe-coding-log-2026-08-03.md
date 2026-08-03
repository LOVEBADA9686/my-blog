---
title: "[바이브코딩 동향] 2026-08-03"
date: 2026-08-03
tags: [AI이슈]
excerpt: 클로드 코워크 5시간 한도 2배 확대가 이틀 뒤 종료되고, 클로드 코드 주간 한도 50% 확대는 8월 19일까지 재연장이 확정됐다. 여기에 소닛 5 프로모션 가격 종료(8/31)와 같은 날 벌어지는 오픈AI의 GPT-5.4 은퇴까지, 8월에 몰린 마감일들을 정리했다.
---

**작성: 2026-08-03 09:00 (KST)**

지난주에 이어 이번 주도 "마감 캘린더" 얘기를 안 할 수가 없다. 클로드 요금제를 쓰고 있다면 이번 달에만 한도 확대 종료일이 두 번, 가격 인상이 한 번 겹쳐 있어서, 오늘은 8월 안에 챙겨야 할 일정을 날짜순으로 정리해본다.

## 클로드 코워크 한도 2배 확대, 8월 5일 밤에 종료

지난 6월 5일부터 적용된 클로드 코워크(Cowork)의 5시간 세션 한도 100% 확대가 이틀 뒤인 8월 5일 밤 11시 59분(태평양시간)에 끝난다. Pro·Max·Team·레거시 시트 기반 엔터프라이즈 플랜이라면 별도 신청 없이 자동으로 적용돼 있었는데, 이 프로모션은 클로드 코드의 주간 한도 확대와는 완전히 별개라서 헷갈리기 쉽다. 코워크로 긴 백그라운드 작업을 자주 돌리고 있었다면, 8월 6일부터는 평소보다 한도가 절반으로 줄어든다는 걸 감안해 이번 주 안에 밀린 작업을 정리해두는 게 좋겠다.

## 클로드 코드 주간 한도 50% 확대, 8월 19일까지 재연장 확정

반대로 클로드 코드 쪽 주간 사용량 50% 확대는 원래 만료 예정이었던 날짜를 넘겨 8월 19일까지 한 달 더 연장됐다. Pro, Max, Team, 시트 기반 엔터프라이즈 사용자 전체에 적용되며, 5월 13일부터 시작된 이 프로모션이 벌써 세 번째 연장이다. 두 한도(코워크 100%, 코드 50%)가 종료일이 다르다는 점, 그리고 프로모션이 끝나면 별도 공지 없이 플랜 기본값으로 조용히 돌아간다는 점은 다시 한번 기억해둘 만하다.

## 소닛 5 프로모션 가격 8월 31일 종료, 같은 날 오픈AI도 구모델 퇴역

7월에 출시된 클로드 소닛 5의 프로모션 가격(입력 $2/출력 $10, 100만 토큰당)이 8월 31일로 끝나고 9월 1일부터 표준 가격인 $3/$15로 오른다. 문제는 가격표상 인상폭(50%)보다 체감 인상폭이 더 클 수 있다는 점인데, 소닛 5의 새 토크나이저가 같은 영어 텍스트를 이전 모델보다 최대 40% 안팎 더 많은 토큰으로 쪼개기 때문이다. 즉 토큰 단가 인상과 토큰 수 증가가 겹쳐서, 똑같은 프롬프트를 돌려도 청구서는 그보다 훨씬 많이 뛸 수 있다.

공교롭게도 같은 8월 31일, 오픈AI도 챗GPT 로그인 사용자 기준으로 Codex에서 GPT-5.4·GPT-5.4 mini를 퇴역시키고 GPT-5.6 시리즈(테라·루나)로 강제 이전시킨다. API 키로 붙인 세션은 영향이 없다지만, 두 회사가 나란히 8월의 마지막 날을 "구모델 정리 데드라인"으로 잡은 걸 보면 이제 프론티어 코딩 모델 업계 전체가 비슷한 리듬으로 움직이고 있다는 인상을 받는다.

## 오늘의 생각

한 달 안에 코워크 한도(8/5), 코드 한도(8/19), 소닛 5 가격(8/31)까지 세 개의 서로 다른 마감일이 순서대로 지나간다. 각각 성격이 다르다는 게 재밌는데, 코워크 쪽은 "쓰던 여유가 조용히 줄어드는" 문제고, 소닛 5 쪽은 "월말 청구서가 예상보다 크게 뛰는" 문제다. 바이브코딩 도구를 업무에 깊이 박아둘수록 이런 프로모션 종료일이 예산에 미치는 영향이 커지는 셈이라, 이번 달만큼은 캘린더에 8/5·8/19·8/31 세 줄을 따로 적어두려 한다. 이 블로그를 자동으로 굴리는 파이프라인도 토큰 비용이 9월부터 얼마나 늘어날지 한 번 계산해봐야겠다.

---

**출처**
- [Anthropic just doubled Claude Cowork limits at no charge - The New Stack](https://thenewstack.io/anthropic-claude-cowork-promotion/)
- [Claude Fable 5 Ends Free Access & Grants $100 Credit, But Code and Cowork Limits Just Got a Temporary Boost](https://justbeingresourceful.com/2026/07/21/claude-fable-5-ends-free-access-grants-100-credit-but-code-and-cowork-limits-just-got-a-temporary-boost/)
- [Claude Sonnet 5 costs 50 per cent more from 1 September - aivy](https://aivy.com.au/news/claude-sonnet-5-price-rise/)
- [Sonnet 5 Counts 30% More Tokens. Its Discount Ends Aug 31. - Automation Labs](https://medium.com/@automation.labs/sonnet-5-counts-30-more-tokens-its-discount-ends-aug-31-dee15db1f45d)
- [Codex Models - OpenAI Developers](https://developers.openai.com/codex/models)
