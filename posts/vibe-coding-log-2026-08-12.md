---
title: "[바이브코딩 동향] 2026-08-12"
date: 2026-08-12
tags: [AI이슈]
excerpt: 클로드 코드 v2.1.227이 GitHub Actions Bash 실행 오류와 /tui 되감기 버그를 고쳤고, 앤트로픽은 매쿼리·GIC와 손잡고 데이터센터 전용 투자 플랫폼 "테세우스 인프라스트럭처"를 띄웠다.
---

**작성: 2026-08-12 09:00 (KST)**

이틀 뒤(8/14)로 다가온 오토 모드 기본화 얘기는 최근 며칠 계속 다뤘으니 오늘은 잠시 쉬고, 그사이 조용히 나온 클로드 코드 버그 픽스 릴리스와 앤트로픽의 대형 인프라 투자 소식을 정리한다.

## 클로드 코드 v2.1.227, GitHub Actions·되감기 버그 픽스

8월 10일 배포된 v2.1.227은 눈에 띄는 신기능보다는 그동안 쌓인 자잘한 버그를 잡는 데 집중한 릴리스다. 가장 실사용에 영향이 컸을 법한 건 `claude-code-action`을 `allowed_non_write_users`와 함께 GitHub 호스팅 러너에서 쓸 때 Bash 명령이 전부 실패하던 버그다. CI 파이프라인에 클로드 코드를 붙여둔 팀이라면 며칠간 워크플로가 통째로 막혔을 수 있는 문제라, 조용히 넘어갈 릴리스는 아니었다. 이 외에도 로그인 토큰이 만료된 채로 세션을 시작하면 구독 등급을 제대로 못 읽어와 맥스 요금제 사용자한테도 페이블 사용 크레딧 활성화를 권하던 버그, `/tui`가 첫 메시지 이전으로 되감았던 대화를 되살려버리던 버그를 고쳤다. 슬래시 커맨드 메뉴도 손봤는데, 선택된 행에만 파란색을 주고 일치하는 글자는 색 대신 볼드로 강조하며 이모지·악센트 붙은 이름의 글리프도 그대로 유지하도록 다듬었다. 그 밖에 파일 없음 제안이나 at-mention 크기 체크 시 이벤트 루프가 멈칫하던 부분도 개선해 체감 반응 속도가 살짝 나아졌다고 한다.

## 앤트로픽, 매쿼리·GIC와 데이터센터 전용 투자사 "테세우스" 출범

같은 날인 8월 10일, 앤트로픽은 매쿼리 자산운용(Macquarie Asset Management), 싱가포르 국부펀드 GIC와 함께 "테세우스 인프라스트럭처(Theseus Infrastructure)"라는 데이터센터 전용 플랫폼을 세운다고 발표했다. 매쿼리 산하 펀드와 GIC가 이 플랫폼의 지분 대부분을 소유하고 각 프로젝트의 자금을 대며, 앤트로픽은 장기 계약을 통해 이 시설들을 임차하는 앵커 테넌트 역할을 맡는다. 즉 앤트로픽이 데이터센터를 직접 짓고 소유하는 대신, 부동산·인프라 투자 전문 파트너에게 자본 조달과 운영을 맡기고 자신은 컴퓨팅 확보에만 집중하는 구조다. 1차 대상 지역은 미국이고, 이 발표는 회사가 지난해 밝힌 미국 내 데이터센터에 500억 달러를 투자하겠다는 계획의 연장선이라고 한다. 눈에 띄는 대목은 이 시설들 때문에 주변 지역 전기요금이 오르면 그 인상분을 앤트로픽이 부담하겠다고 못 박은 부분인데, 최근 몇 달 사이 앤트로픽이 반복해온 "전기요금 인상 흡수" 약속의 연장선으로 보인다.

## 오늘의 생각

두 소식을 같이 보면 규모의 층위가 확 다르다는 게 재밌다. 한쪽은 CI 러너에서 Bash 명령이 막히던 버그 하나를 고치는, 매일 코드를 짜는 개발자한테나 체감되는 수준의 릴리스고, 다른 한쪽은 국부펀드까지 끌어들여 데이터센터를 통째로 짓는 조 단위 자본 이야기다. 그런데 결국 둘 다 같은 목적을 향해 있다는 생각이 든다 — 클로드 코드가 CI에서 막힘없이 돌아가려면 안정적인 소프트웨어가 필요하고, 그 소프트웨어를 돌릴 모델은 결국 어딘가의 GPU 위에서 돌아가야 하니까. 최근 몇 주 동안 앤트로픽이 볼타 인프라, AMD, 이번 매쿼리·GIC까지 컴퓨팅 확보 계약을 거의 매주 하나씩 발표하는 걸 보면, 이 회사가 지금 얼마나 공격적으로 "다음 세대 모델을 돌릴 데이터센터"를 미리 깔아두고 있는지 실감이 난다.

---

**출처**
- [Claude Code changelog](https://code.claude.com/docs/en/changelog)
- [Anthropic, Macquarie Asset Management, and GIC announce strategic partnership to develop dedicated data center infrastructure at scale - Macquarie Group](https://www.macquarie.com/au/en/about/news/2026/anthropic-mam-gic-data-centre-infrastructure-partnership.html)
- [Anthropic, Macquarie and GIC Form Venture for AI Data Centers - Bloomberg](https://www.bloomberg.com/news/articles/2026-08-10/anthropic-macquarie-and-gic-form-venture-for-ai-data-centers)
- [GIC and Macquarie form Theseus Infrastructure to serve Anthropic's data center needs - Data Center Dynamics](https://www.datacenterdynamics.com/en/news/gic-and-macquarie-form-theseus-infrastructure-to-serve-anthropics-data-center-needs/)
