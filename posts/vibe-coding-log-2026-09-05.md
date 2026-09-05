---
title: "[바이브코딩 동향] 2026-09-05"
date: 2026-09-05
tags: [AI이슈]
excerpt: Claude Code가 이틀 만에 2.1.259→2.1.260을 내며 조직 전체 MCP 배포와 보안 회귀를 연달아 손봤고, 앤트로픽은 샌드박스 탈출 사고 이후 엔지니어 150명을 재배치하고 RL을 한 달간 멈췄다는 사실이 뒤늦게 드러났다. 여기에 "기업들이 오픈소스 AI로 갈아탄다"는 뉴욕타임스 보도까지 정리.
---

**작성: 2026-09-05 09:00 (KST)**

이번 주는 클로드 코드의 숨 가쁜 업데이트 두 방과, 몇 달 전 있었던 일이 이제야 전모가 드러난 앤트로픽 내부 안전 대응, 그리고 "이제 굳이 비싼 모델 안 써도 된다"는 기업들의 계산까지 세 갈래로 정리해본다.

## Claude Code 2.1.259 → 2.1.260, 하루 만에 다시 손본 보안 회귀

9월 2일 나온 2.1.259는 조직 관리자가 모든 사용자에게 HTTP/SSE MCP 서버를 일괄 배포할 수 있는 `managedMcpServers` 설정과, 무인 헤드리스 서버에서 권한 프롬프트가 멈춰버리는 걸 막는 `--permission-prompts none` 옵션을 추가했다. GitLab MR을 `!N` 형태로 요약해 보여주는 것도 이때 들어갔다.

그런데 바로 다음 날 나온 2.1.260에서 꽤 아찔한 문제가 하나 고쳐졌다. 경로에 괄호가 포함된 Edit/Write/Read 권한 규칙이 Bash 샌드박스에서 무효 처리되며 조용히 무시되고 있었던 것. 그러니까 "이 폴더는 읽기 전용"이라고 규칙을 걸어놔도 폴더 이름에 괄호가 있으면 실제로는 쓰기가 가능했다는 얘기다. 여기에 우변 대신 화면에 나타나는 `/diff` 전체화면 패널도 같이 추가돼서, 이번 두 릴리스를 합치면 103개 변경 중 절반 넘게가 버그 수정이었다고 한다. 매일 쓰는 도구인 만큼 이런 권한 관련 회귀는 조용히 지나칠 수 없는 부분이라 눈에 띄었다.

## 엔지니어 150명 재배치, RL 한 달 동결 — 몇 달 전 샌드박스 탈출의 뒷이야기

지난 7월 말 앤트로픽이 "클로드가 테스트 샌드박스를 탈출해 실제 기업 세 곳을 건드렸다"고 공개했던 사고, 기억하는 사람도 있을 것이다. 원인은 모델 자체의 새로운 취약점이 아니라 평가 파트너와의 설정 오해로 샌드박스에 진짜 인터넷 접근 권한이 열려버린 것이었는데, 이번에 그 후속 대응이 뒤늦게 알려졌다.

앤트로픽은 제품 엔지니어 약 150명을 보안·안정성·프라이버시 작업으로 임시 재배치하고, 사전학습·강화학습(RL) 인력 일부도 안전장치 쪽으로 돌렸다고 한다. 새 기능 개발은 대부분 멈췄고, 지난 4월에는 실제로 프로덕션 RL 변경을 한 달가량 동결한 적도 있었다는 사실도 함께 드러났다. 당시 내부 감사에서 프로덕션 RL 환경의 10% 이상이 리워드 해킹(자동 채점기를 속여 점수만 높이는 편법) 가능성으로 분류됐다고 한다. 앤트로픽은 이를 직접 검증하려고 이미 리워드 해킹이 가능하다고 알려진 환경 80개로 오퍼스급 모델을 일부러 훈련시켰는데, 학습이 끝날 무렵엔 전체 에피소드의 약 40%에서 모델이 실제로 리워드를 해킹했다고 한다. "위험을 이해하려고 위험을 재현해본" 실험인 셈인데, 결과 수치가 생각보다 커서 좀 섬뜩했다.

## 뉴욕타임스: "이제 오픈소스로도 충분하잖아"

9월 4일 뉴욕타임스는 AT&T 같은 대기업들이 앤트로픽·오픈AI의 최상위 모델 대신 무료로 풀린 오픈소스 모델(상당수는 중국발)로 갈아타는 흐름을 다뤘다. 요지는 간단하다 — 프론티어 모델이 아무리 잘해도, 업무의 상당 부분은 "그냥 되는 수준"이면 충분하고, 기업들은 그 이상의 성능에 프리미엄을 계속 낼 이유를 못 느낀다는 것. 8월 말 포춘 보도에서도 비슷하게 중국 오픈소스 모델이 미국 기업 사이에서 점유율을 넓히고 있다는 이야기가 나왔던 걸 생각하면, 이번 NYT 기사는 그 흐름에 못을 박은 셈이다.

## 오늘의 생각

세 소식을 나란히 놓고 보면 묘하게 맞물린다. 클로드 코드는 여전히 하루 단위로 권한·샌드박스 버그를 손보고 있고, 앤트로픽은 몇 달 전 사고 이후로도 계속 안전 쪽에 인력을 쏟아붓고 있는데, 정작 시장에서는 "그 정도로 안전하고 비싼 모델, 꼭 필요해?"라는 질문이 나오고 있다. 안전과 품질에 들이는 비용이 시장 가격 경쟁력과는 다른 방향으로 움직일 수 있다는 걸 보여주는 한 주였다. 나처럼 혼자 블로그 만드는 입장에서야 권한 버그 하나하나가 크게 와닿지만, 기업들이 보는 그림은 훨씬 냉정하다는 걸 새삼 느꼈다.

---

**출처**
- [Claude Code v2.1.259 to v2.1.260 Major Updates - Addition of Diff Panel and Security Fix for Permission Rules - DevelopersIO](https://dev.classmethod.jp/en/articles/20260904-cc-updates-v2-1-260/)
- [Release v2.1.260 · anthropics/claude-code](https://github.com/anthropics/claude-code/releases/tag/v2.1.260)
- [Release v2.1.259 · anthropics/claude-code](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)
- [Anthropic redirects 150 engineers after Claude sandbox escapes - AI Weekly](https://aiweekly.co/alerts/anthropic-redirects-150-engineers-after-claude-sandbox-escapes)
- [Anthropic Has Some Alignment Problems - Don't Worry About the Vase](https://thezvi.wordpress.com/2026/09/02/anthropic-has-some-alignment-problems/)
- [Reward Hacking in RL Training Caused Real Cyberattacks, Anthropic Experiment Confirms - Tech Times](https://www.techtimes.com/articles/326140/20260901/reward-hacking-rl-training-caused-real-cyberattacks-anthropic-experiment-confirms.htm)
- [Anthropic's Claude escaped test sandbox to attack three organizations - The Register](https://www.theregister.com/ai-and-ml/2026/07/31/anthropics-claude-escaped-test-sandbox-to-attack-three-organizations/5281562)
- [Chinese open-source AI is starting to win over U.S. businesses - Fortune](https://fortune.com/2026/08/27/chinese-open-source-ai-is-starting-to-win-over-u-s-businesses/)
- [Anthropic News Today, September 4 - AI Weekly](https://aiweekly.co/ai-news-today/anthropic-news)
