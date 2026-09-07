---
title: "[바이브코딩 동향] 2026-09-07"
date: 2026-09-07
tags: [AI이슈]
excerpt: NYSE가 앤트로픽 Project Glasswing으로 수십 년 묵은 보안 구멍을 찾아냈다는 의회 증언과, 오픈AI GPT-6 Astra가 "치명적" 사이버보안 문턱을 처음 넘었다는 소식을 나란히 정리했다. 여기에 클로드 코드 2.1.263 업데이트와 미국 중간선거 직전으로 조율되는 앤트로픽 IPO 일정까지.
---

**작성: 2026-09-07 09:00 (KST)**

오늘은 방어와 공격 양쪽에서 동시에 터진 AI 보안 소식 두 건을 중심으로 정리한다. 같은 주에 "AI로 수십 년 묵은 보안 구멍을 찾았다"는 얘기와 "AI가 처음으로 위험한 해킹 문턱을 넘었다"는 얘기가 나란히 나왔는데, 결국 같은 능력의 양면 같아서 흥미로웠다.

## NYSE, 클로드로 수십 년 묵은 보안 구멍을 찾아냈다

9월 2일 미국 하원 금융서비스위원회 청문회에서 뉴욕증권거래소(NYSE) 린 마틴 사장이 직접 증언한 내용이다. NYSE는 앤트로픽의 방어적 보안 이니셔티브 "Project Glasswing"을 통해 클로드 모델(초기 버전은 Claude Mythos 프리뷰)에 접근해 자사 시스템을 스캔했고, 그중 일부는 수십 년째 코드베이스에 잠들어 있던 결함이었다고 한다. 최근에는 인터콘티넨털 익스체인지(ICE)도 같은 프로그램에 합류했다. Project Glasswing은 AWS·애플·시스코·JP모건체이스·마이크로소프트·엔비디아 같은 파트너들에게 취약점 탐지 모델을 제공해왔고, 지금까지 6,200건이 넘는 고위험·치명적 등급 결함을 1,000개 이상의 오픈소스 프로젝트에서 찾아냈다고 한다. 국가 핵심 금융 인프라의 오래된 코드를 AI가 뒤늦게 훑어서 문제를 찾아낸다는 게, 한편으론 다행스러우면서도 "그동안 아무도 안 봤단 거잖아" 싶어서 묘하게 찜찜하기도 하다.

## 오픈AI GPT-6 Astra, "치명적" 사이버보안 문턱을 처음 넘다

9월 3~4일 공개된 오픈AI의 신모델 GPT-6 Astra는 자체 Preparedness Framework 기준으로 사이버보안 영역에서 "Critical(치명적)" 등급을 처음 넘긴 모델이다. 안전장치를 뺀 상태로 진행한 ExploitBench 테스트에서 100% 점수를 기록했는데, 이는 사람의 단계별 안내 없이도 실제 소프트웨어의 알려지지 않은 취약점을 찾아 작동하는 익스플로잇으로 만들어낼 수 있다는 뜻이다(전작 GPT-5.6 Sol은 78.5%였다). 일반 공개 버전은 익스플로잇 코드 생성 같은 고위험 작업을 거부하도록 막아뒀고, 정밀 검증을 거친 방어자들에게만 "Daybreak"라는 별도 프로그램으로 제한적 접근을 열 계획이라고 한다. 샘 올트먼은 이 모델이 "새로운 능력 단계"이며 자신의 업무 방식도 바꿔놨다고 언급했다.

## 그 외 소식: 클로드 코드 2.1.263, 그리고 IPO는 중간선거 직전으로

9월 6일 나온 클로드 코드 2.1.263은 새 기능 없이 버그 수정과 안정성 개선에만 집중한 조용한 릴리스다(하루 전 2.1.261은 조직 정책 진단용 `/status` 항목 추가, 인라인 출력 한도 128K자 확장, `/skill-doctor` 등 더 큼직한 변경을 담고 있었다). 한편 앤트로픽 IPO는 상장신고서 공개가 애초 예상보다 늦은 9월 말로, 로드쇼 시작은 10월 중순으로 밀렸는데, 최종 상장 시점이 11월 미국 중간선거 며칠 전이 될 가능성이 유력하게 거론되고 있다. 목표 밸류에이션은 여전히 2조 달러 안팎이다.

## 오늘의 생각

같은 주에 나온 두 보안 뉴스를 나란히 보면, 결국 "취약점을 찾아내는 AI"와 "취약점을 뚫는 AI"는 종이 한 장 차이라는 게 새삼 느껴진다. NYSE 사례처럼 방어 쪽에 먼저 풀리면 수십 년 묵은 구멍을 메우는 데 쓰이지만, GPT-6 Astra처럼 공격 능력이 먼저 검증되면 접근 통제와 "누구에게 얼마나 열어줄 것인가"가 곧바로 핵심 문제가 된다. 결국 모델 자체의 능력치보다, 그 능력을 누가 어떤 절차로 쓸 수 있게 하느냐가 더 중요한 질문이 되어가는 느낌이다. 블로그 코드 몇 줄 짜는 나한테는 먼 얘기 같지만, 매일 쓰는 코딩 도구들이 결국 같은 모델 계보에서 나온다는 걸 생각하면 완전히 남 일도 아니다.

---

**출처**
- [NYSE Used Anthropic's Project Glasswing to Find Cyber Flaws - Bloomberg](https://www.bloomberg.com/news/articles/2026-09-02/nyse-used-anthropic-s-project-glasswing-to-find-cyber-flaws)
- [Intercontinental Exchange Joins Anthropic's Project Glasswing - ICE](https://ir.theice.com/press/news-details/2026/Intercontinental-Exchange-Joins-Anthropics-Project-Glasswing/default.aspx)
- [Project Glasswing: An initial update - Anthropic](https://www.anthropic.com/research/glasswing-initial-update)
- [OpenAI launches GPT-6 Astra, its first model to cross a critical cybersecurity threshold - CSO Online](https://www.csoonline.com/article/4218679/openai-launches-gpt-6-astra-its-first-model-to-cross-a-critical-cybersecurity-threshold.html)
- [GPT-6 Astra Scores 100% on ExploitBench as OpenAI Blocks PoC Exploit Requests - The Hacker News](https://thehackernews.com/2026/09/gpt-6-astra-scores-100-on-exploitbench.html)
- [Claude Code Changelog - code.claude.com](https://code.claude.com/docs/en/changelog)
- [Anthropic IPO launch shifts toward mid-October: Reuters - CNBC](https://www.cnbc.com/2026/09/05/anthropic-ipo-launch-shifts-toward-mid-october-reuters.html)
- [Anthropic IPO May Land Just Before U.S. Midterm Elections - Seoul Economic Daily](https://en.sedaily.com/international/2026/09/06/anthropic-ipo-may-land-just-before-us-midterm-elections)
