---
title: "[바이브코딩 동향] 2026-08-10"
date: 2026-08-10
tags: [AI이슈]
excerpt: 클로드 코드가 8월 14일부터 프로·맥스·팀 요금제에 오토 모드를 기본값으로 켜면서 "89% 대 13.6%" 안전성 수치와 함께 개발자 커뮤니티의 찬반 논쟁이 붙었고, 앤트로픽은 노르웨이에 데이터센터를 짓는 신생 클라우드 스타트업 볼타 인프라와 6년간 100억 달러 규모 컴퓨팅 계약도 맺었다.
---

**작성: 2026-08-10 09:00 (KST)**

어제(8/9)는 v2.1.225·v2.1.226 버그 수정과 앤트로픽의 첫 최고글로벌정책책임자 영입 소식을 정리했는데, 같은 날 더 큰 발표가 하나 더 있었다. 클로드 코드의 권한 승인 방식 자체를 바꾸는 "오토 모드 기본화" 소식이다. 여기에 지난주 있었던 100억 달러 규모 컴퓨팅 계약 소식도 아직 이 블로그에서 다루지 않아 함께 정리한다.

## 클로드 코드, 8월 14일부터 오토 모드가 기본값으로

앤트로픽이 8월 9일, 8월 14일부터 프로·맥스·팀 요금제의 새 클로드 코드 세션은 오토 모드로 시작한다고 발표했다. 지금까지는 셸 명령이나 파일 수정 같은 액션마다 사용자 승인을 받는 방식이 기본이었는데, 앞으로는 모든 액션이 별도의 분류기(classifier)를 거쳐 "돌이킬 수 없거나, 파괴적이거나, 사용자 환경 바깥을 겨냥한" 것으로 판단될 때만 승인을 요청한다. 이미 다른 기본값을 직접 설정해둔 사용자에게는 전환 여부를 묻는 1회성 프롬프트가 뜨고, 기본값을 고정(pin)해둔 경우는 그대로 유지된다. 앤트로픽은 유료 테스터 1,053명을 대상으로 한 테스트에서 사람이 위험한 명령을 걸러낸 비율은 13.6%에 그친 반면, 오토 모드 분류기는 89%를 걸러냈다는 수치를 근거로 들었다. 오토 모드 도입에 따른 분류기 토큰 비용도 프로·맥스·팀 사용자에게는 오늘부로 과금하지 않기로 했다. 다만 엔터프라이즈, API, AWS·구글 클라우드·마이크로소프트 파운드리 쪽은 아직 옵트인으로 남겨, 관리자들이 검토할 시간을 주는 모양새다.

발표 직후 개발자 커뮤니티 반응은 엇갈린다. 사이먼 윌리슨을 비롯한 여럿은 "어차피 개발자 다수가 승인 프롬프트를 성가셔서 꺼두고 있었으니 이번 결정이 현실을 인정한 것"이라는 냉정한 해석을 내놨고, The New Stack은 아예 "인간을 믿을 수 없어서(because humans can't be trusted)"라는 제목을 달았다. 반면 자동화 범위가 넓어질수록 에이전트가 실제로 뭘 하고 있는지 눈으로 확인할 기회가 줄고, 이 분류기가 공급망 공격처럼 간접적인 위협까지 잡아내는지는 검증되지 않았다는 지적도 나온다.

## 앤트로픽, 볼타 인프라와 6년간 100억 달러 컴퓨팅 계약

지난주(8/4) 앤트로픽은 올해 초 설립된 신생 클라우드 스타트업 볼타 인프라(Volta Infra)와 6년간 100억 달러 규모의 컴퓨팅 조달 계약을 맺었다고 밝혔다. 노르웨이에 133메가와트급 데이터센터를 짓고 엔비디아의 최신 칩 아키텍처인 베라 루빈(Vera Rubin) 시스템으로 채운다는 계획으로, 크립토 채굴 업체 비트디어(Bitdeer)가 시설 구축 파트너로 참여한다. 최근 몇 달 사이 블랙스톤과의 71억 달러 사모 신용 거래(8/6 정리), 자체 AI 칩 설계팀 신설(8/7 정리)에 이어 또 한 번의 대형 인프라 확보 소식이라, 앤트로픽이 얼마나 빠른 속도로 컴퓨팅 조달 채널을 다각화하고 있는지 보여주는 사례로 읽힌다.

## 오늘의 생각

오토 모드 기본화는 결국 "사람이 승인 버튼을 누르는 행위 자체가 안전장치로서 기능하지 않는다"는 걸 앤트로픽 스스로 데이터로 인정한 셈이다. 개인적으로는 매번 뜨는 승인 프롬프트를 반사적으로 눌러본 경험이 있는 사람이라면 이 결정이 크게 낯설지 않을 것 같다. 다만 분류기가 걸러주는 89%라는 숫자에 안심하다 보면, 정작 검토가 필요한 건 "무엇을 막았는가"가 아니라 "막지 못한 11%가 어떤 종류의 위험인가"라는 걸 잊기 쉽다. 인프라 쪽에서는 컴퓨팅 조달원이 계속 늘어나는 걸 보면, 에이전트에게 맡기는 실행 권한과 그걸 뒷받침하는 하드웨어 투자가 동시에 커지고 있다는 인상을 다시 한번 받는다.

---

**출처**
- [Auto mode is now the default in Claude Code for Pro, Max, and Team plans - Anthropic](https://claude.com/blog/auto-mode-default-in-claude-code)
- [Anthropic is turning Claude Code's auto mode on by default - TechCrunch](https://techcrunch.com/2026/08/09/anthropic-is-turning-claude-codes-auto-mode-on-by-default/)
- [Auto Mode will soon be the default in Claude Code — because humans can't be trusted - The New Stack](https://thenewstack.io/claude-code-auto-mode/)
- [Auto mode is now the default in Claude Code - Simon Willison](https://simonwillison.net/2026/Aug/8/auto-mode/)
- [PSA: Claude Code enabling auto mode as default next week, Anthropic says - 9to5Mac](https://9to5mac.com/2026/08/07/psa-claude-code-enabling-auto-mode-as-default-next-week-anthropic-says/)
- [Anthropic signs $10 billion deal with AI cloud startup Volta - TechCrunch](https://techcrunch.com/2026/08/04/anthropic-signs-10-billion-deal-with-ai-cloud-startup-volta/)
- [Anthropic Inks $10 Billion Computing Deal With New Cloud Startup - Bloomberg](https://www.bloomberg.com/news/articles/2026-08-04/anthropic-inks-10-billion-computing-deal-with-new-cloud-startup)
