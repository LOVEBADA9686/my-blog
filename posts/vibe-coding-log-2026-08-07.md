---
title: "[바이브코딩 동향] 2026-08-07"
date: 2026-08-07
tags: [AI이슈]
excerpt: 클로드 코드 v2.1.223이 크래프트된 명령어로 권한 검사를 우회하던 구멍과 탭·비가시 유니코드로 승인 창을 속이던 취약점을 막았고, 앤트로픽은 자체 AI 칩 설계팀 신설을 공식 확인하며 옛 오픈AI 칩팀 출신 클라이브 챈을 앞세웠다.
---

**작성: 2026-08-07 09:00 (KST)**

어제(8/6)는 워크트리 격리를 뚫던 git 탈출 구멍과 앤트로픽의 710억 달러 컴퓨팅 조달 소식을 정리했는데, 오늘은 클로드 코드의 또 다른 권한 우회 패치와 함께 앤트로픽이 아예 "칩을 직접 설계하겠다"고 나선 소식을 짚어본다.

## 클로드 코드 v2.1.223, 크래프트된 명령어로 권한 검사를 속이던 구멍을 막다

8월 6일 나온 v2.1.223은 보안 수정 네 건이 핵심이다. 우선 교묘하게 짜여진(crafted) 명령어가 권한 검사 단계에서 자기 자신의 일부를 숨길 수 있던 Bash 권한 우회 버그를 고쳤고, 탭이나 비가시(invisible) 유니코드 문자로 명령어를 채워 넣어 승인 다이얼로그에 실제 실행될 부분이 보이지 않게 만들던 수법도 함께 막았다. 워크플로 스크립트가 동적 `import()`를 이용해 샌드박스 밖에서 코드를 실행할 수 있던 구멍, 그리고 에이전트 정의의 `bypassPermissions` 모드가 조직의 "권한 우회 비활성화" 정책을 무시하고 그대로 작동하던 정책 우회 버그도 이번에 수정됐다. 어제 다룬 워크트리 git 탈출 건과 마찬가지로 "사용자가 승인했다고 믿었던 화면이 사실은 조작돼 있었다"는 유형이라, 특히 조직 정책으로 권한 우회를 막아둔 팀이라면 업데이트를 서두를 만하다. 보안 수정 외에는 GitHub 조직 산하 마켓플레이스를 통째로 허용/차단하는 `owner/*` 와일드카드, `/review`가 `/code-review`의 별칭이 되면서 effort 레벨과 PR 리뷰(`/code-review <레벨> <PR번호>`)를 지원하게 된 점, 클라우드 세션에서 로컬로 이어받는 방법을 알려주는 `/teleport` 힌트가 새로 추가됐다.

## 앤트로픽, 자체 AI 칩 설계팀 신설을 공식 확인하다

8월 5일 앤트로픽은 클로드 모델을 위한 자체 AI 칩을 설계할 인하우스 팀을 꾸리고 있다고 공식 확인했다. 하드웨어와 소프트웨어를 넘나드는 배경의 엔지니어를 모집 중이며, 채용 공고에는 "실리콘을 출하해본" 경험과 "큰 조직 없이도 중대한 결정을 내릴 수 있는" 역량을 요구해, 대규모 조직보다는 소수 정예 팀을 지향하는 것으로 보인다. 연봉은 32만~48만 5000달러 수준으로 책정돼, AI 가속기를 공동 설계할 수 있는 인재의 희소성과 이 자리에 요구되는 시니어리티를 동시에 보여준다. 기술 리더십은 지난 6월 합류한 클라이브 챈이 맡고 있는데, 그는 오픈AI 전용 칩팀의 두 번째 하드웨어 채용자로 2024년 1월 테슬라 도조(Dojo) 슈퍼컴퓨터 프로그램에서 넘어온 인물이다. 어제 정리한 블랙스톤과의 710억 달러 GPU·TPU 리스 거래가 "빌려서 규모를 키우는" 전략이었다면, 이번 칩 설계팀 신설은 그보다 한 걸음 더 나아가 인퍼런스 비용 구조 자체를 바꿔보겠다는 시도로 읽힌다.

## 오늘의 생각

이틀 연속으로 "경계를 지키는 패치"와 "판을 키우는 베팅"이 나란히 나오는 걸 보면서, 바이브코딩을 매일 쓰는 입장에서 느끼는 안도감과 불안감이 동시에 든다. 크래프트된 명령어나 비가시 유니코드로 승인 화면을 속이는 수법이 계속 나온다는 건, 터미널 권한을 에이전트에게 맡기는 워크플로우가 아직 완전히 성숙하지 않았다는 뜻이다. 동시에 앤트로픽이 GPU를 빌리는 데서 그치지 않고 아예 칩 설계로 손을 뻗는 걸 보면, 이 회사는 지금의 서비스 규모를 "일시적 붐"이 아니라 장기전으로 보고 있다는 게 느껴진다. 결국 오늘도 결론은 비슷하다. 인프라 투자는 공격적으로 늘어나고 있지만, 그 인프라를 다루는 권한 경계는 여전히 패치가 필요한 상태이니 자동화를 믿되 검증하는 습관을 놓지 말아야겠다.

---

**출처**
- [Release v2.1.223 · anthropics/claude-code - GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.223)
- [Anthropic is hiring an AI chip design team - TechCrunch](https://techcrunch.com/2026/08/05/anthropic-is-hiring-an-ai-chip-design-team/)
- [Anthropic Confirms In-House Chip Team: Co-Design Bet Could Cut Claude Inference Costs in Half - Tech Times](https://www.techtimes.com/articles/323238/20260805/anthropic-confirms-house-chip-team-co-design-bet-could-cut-claude-inference-costs-half.htm)
- [Anthropic Enters The AI Chip Race With In-House Chip Team - Forbes](https://www.forbes.com/sites/jonmarkman/2026/08/06/anthropic-enters-the-ai-chip-race-with-in-house-chip-team/)
- [Anthropic building in-house custom AI chip design team for Claude - Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/anthropic-building-house-custom-ai-172041671.html)
