---
title: "[바이브코딩 동향] 2026-08-21"
date: 2026-08-21
tags: [AI이슈]
excerpt: 앤트로픽이 기업 고객 데이터 보존 정책을 뒤집어 자체 인프라 보관 옵션을 열었고, 오픈AI는 곧바로 "제로 데이터 보존"을 앞세운 맞불 카드를 꺼냈다. 여기에 클로드 API의 파일스 API·어드민 API가 나란히 정식 출시됐다.
---

**작성: 2026-08-21 09:00 (KST)**

## 앤트로픽, 기업 데이터 보존 정책 뒤집는다

앤트로픽이 최상위 모델(Fable 5, Mythos 5)을 쓰는 기업 고객 대상 데이터 보존 정책을 바꾸기로 했다. 기존에는 사이버 공격 대응을 이유로 앤트로픽 서버에 데이터를 무조건 30일 보관해야 했는데, 앞으로는 같은 30일 보관 기간을 유지하되 고객이 직접 통제하는 클라우드 인프라에 저장할 수 있는 선택지가 생긴다. Databricks, 마이크로소프트 같은 기업들과 이미 파일럿을 돌리고 있고, 세일즈포스를 포함한 100개 이상 고객사와 몇 달째 이 방안을 조율해왔다고 한다. 9월에 더 넓게 공개할 예정이라니 다음 달 소식도 챙겨봐야겠다.

## 오픈AI, "우린 데이터 아예 안 남긴다"로 맞불

앤트로픽 발표가 나온 다음 날, 오픈AI는 "프라이빗 세이프티 프로세싱"이라는 자체 시스템을 일부 고객 대상으로 시범 운영 중이라고 밝혔다. 여러 상호작용에 걸친 오남용 패턴은 감지하되, 실제 프롬프트나 응답 내용은 오픈AI에 전혀 넘기지 않고 좁게 정의된 "안전 신호"만 전달하는 방식이라고 한다. 데이터는 고객 인프라에 두거나, 오픈AI가 보관하더라도 암호화 키는 고객이 쥐는 구조다. 기술 백서는 9월 공개 예정. 결국 "장기 위험 탐지를 위해 데이터는 봐야 한다"는 앤트로픽과 "제로 리텐션을 지키면서도 탐지는 하겠다"는 오픈AI가 같은 문제를 정반대 방식으로 풀고 있는 셈인데, 기업 고객 유치 경쟁이 이제 성능이 아니라 "데이터를 얼마나 안 보이게 다루느냐"로 옮겨간 느낌이다.

## 클로드 API, 파일스 API·어드민 API 나란히 정식 출시

개발자 쪽 소식도 있다. 클로드 API의 파일스 API(Files API)가 정식(GA) 전환되면서 `files-api-2025-04-14` 베타 헤더 없이도 `/v1/files` 엔드포인트와 파일을 참조하는 Messages API 요청을 쓸 수 있게 됐다. 조직당 1TB 저장 용량에 분당 500 요청 제한이 표준으로 붙는다. 같은 시기에 클로드 엔터프라이즈(claude.ai)의 어드민 API 사용자 관리 엔드포인트(멤버·초대·그룹·커스텀 역할)도 정식 출시돼 베타 헤더가 더 이상 필요 없다. 둘 다 화려한 발표는 아니지만, 회사 단위로 클로드를 굴리는 팀 입장에서는 베타 딱지 떼고 안심하고 쓸 수 있게 됐다는 점에서 은근히 반가운 소식이다.

## 오늘의 생각

이번 주는 새 모델이나 화려한 기능보다 "신뢰"와 "데이터 통제권"을 둘러싼 움직임이 두드러졌다. 바이브코딩으로 뭔가를 빠르게 만드는 재미도 좋지만, 그 결과물이 기업 환경에 들어가는 순간 결국 이런 데이터 거버넌스 이슈가 발목을 잡는다는 걸 새삼 느낀다. 이 블로그야 개인 프로젝트라 당장 상관없는 얘기지만, 나중에 GitHub API로 글을 커밋하는 지금 구조를 팀 단위로 확장한다면 이런 정책들을 눈여겨봐야 할 것 같다.

---

**출처**
- [Anthropic Plans to Change Data Retention Policy for Advanced AI - Bloomberg](https://www.bloomberg.com/news/articles/2026-08-20/anthropic-plans-to-change-data-retention-policy-for-advanced-ai)
- [OpenAI previews zero-retention safety system as Anthropic requires data logs - Axios](https://www.axios.com/2026/08/19/openai-previews-zero-retention-safety-system-as-anthropic-requires-data-logs)
- [OpenAI chases Anthropic's biz customers with zero data retention pledge - The Register](https://www.theregister.com/ai-and-ml/2026/08/20/openai-chases-anthropics-biz-customers-with-zero-data-retention-pledge/5290609)
- [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)
