---
title: "[바이브코딩 동향] 2026-07-18"
date: 2026-07-18
tags: [AI이슈]
excerpt: 앨버타 주정부의 4억 6600만 줄 코드 보안 스캔, Claude Code의 /fork·/subtask 개편, 그리고 인도발 바이브코딩 유니콘 Emergent까지 이번 주 소식 정리.
---

**작성: 2026-07-18 09:00 (KST)**

지난 글(7/17)에서는 Cowork 클라우드 전환과 신뢰 역설 통계를 다뤘는데, 이번엔 조금 결이 다른 소식들이 눈에 띄었다. 코딩 에이전트가 정부 시스템 보안 점검에까지 투입된 사례, Claude Code 자체의 안전장치 강화, 그리고 바이브코딩 스타트업 쪽의 대형 투자 소식이다.

## 캐나다 앨버타 주정부, 코드 4억 6600만 줄을 20시간 만에

Anthropic 뉴스룸에 올라온 사례 하나가 눈길을 끌었다. 캐나다 앨버타주 기술혁신부 산하 팀이 Claude Code(Opus·Sonnet)를 이용해 주정부 27개 부처가 쓰는 시스템의 코드를 스캔했는데, 약 50개의 에이전트가 병렬로 동작하면서 코드 4억 6600만 줄을 20시간 만에 검토했다고 한다. 세금 기록, 조달 데이터, 사회복지 사례 파일처럼 민감한 정보를 다루는 시스템이라 보안이 중요했는데, 전통적인 방식으로 같은 검토를 했다면 약 6년 반이 걸렸을 거라는 게 앨버타주 측 추산이다. 여기서 그치지 않고 "레드팀 에이전트"가 외부 공격자처럼 애플리케이션을 찔러보고, "블루팀 에이전트"가 국제 보안 표준 대비 방어 수준을 평가해서 고쳐야 할 파일까지 콕 집어주는 상시 리뷰 체계도 만들었다고 한다. 코딩 에이전트가 이제 "코드를 짜는 도구"를 넘어 "이미 존재하는 거대한 레거시 코드베이스를 감사하는 도구"로도 쓰이는 걸 보여주는 사례라 인상적이었다.

## Claude Code, /fork는 백그라운드로, /subtask는 따로

7월 17일 Claude Code 업데이트에서는 명령어 체계가 좀 정리됐다. 기존에 `/fork`가 서브에이전트를 띄워 대화를 분기하던 방식이었다면, 이제 `/fork`는 대화를 통째로 복사해서 별도의 백그라운드 세션으로 넘기고(작업 중이던 원래 세션은 계속 쓸 수 있음), 세션 안에서 서브에이전트를 부르는 기능은 `/subtask`라는 이름으로 분리됐다. 그리고 폭주 방지용 안전장치도 추가됐는데, 세션당 WebSearch 호출 횟수(기본 200회, 환경변수로 조정 가능)와 서브에이전트 생성 횟수(마찬가지로 기본 200회)에 상한을 걸어서 루프가 통제 불능으로 도는 걸 막는다고 한다. `/clear`를 하면 이 한도가 초기화된다. 에이전트가 알아서 검색하고 알아서 서브에이전트를 부르는 게 편하긴 한데, 그만큼 "혼자 폭주"할 위험도 커지는 거라 이런 상한선이 하나씩 붙는 흐름은 자연스러워 보인다.

## 인도발 바이브코딩 유니콘, Emergent

투자 쪽에서는 인도의 AI 코딩 스타트업 Emergent가 시리즈 C로 1억 3000만 달러를 유치하면서 기업가치 15억 달러(약 4개월 만에 5배 상승)를 인정받아 유니콘이 됐다는 소식이 나왔다. 출시한 지 1년 조금 넘은 회사인데 연환산 매출이 1억 2000만 달러(최근 4개월 새 70% 증가)에, 유료 고객 20만 명 이상, 지난 1년간 이 플랫폼 위에서 만들어진 앱이 1200만 개가 넘는다고 한다. 특히 사용자의 70%가 코딩 경험이 전혀 없는 사람들이라는 점이 눈에 띄는데, "개발자용 도구"였던 바이브코딩이 비개발자 소상공인·1인 창업자 시장으로 계속 넓어지고 있다는 걸 다시 한번 보여주는 숫자다.

## 오늘의 생각

세 소식을 나란히 보면 바이브코딩/코딩 에이전트가 뻗어나가는 방향이 뚜렷이 갈린다. 한쪽은 앨버타 사례처럼 "이미 있는 거대한 코드를 더 안전하게 만드는" 방향이고, 다른 쪽은 Emergent처럼 "코드를 전혀 모르는 사람도 새로 뭔가를 만들게 하는" 방향이다. 그리고 그 사이에서 Claude Code 같은 도구는 계속 안전장치를 추가하며 균형을 잡으려는 중인 것 같다. 이 블로그도 결국 그 스펙트럼 어딘가에서 만들어지고 있으니, 다음엔 상한선이나 안전장치가 실제 작업 흐름에 어떤 영향을 주는지 한번 직접 느껴봐야겠다.

---

**출처**
- [Government of Alberta uses Claude to find and fix cybersecurity vulnerabilities - Anthropic](https://www.anthropic.com/news/alberta-government-claude-cybersecurity)
- [Alberta scans 466 million lines of government code in 20 hours using Claude](https://www.ai-360.online/alberta-scans-466-million-lines-of-government-code-in-20-hours-using-claude/)
- [Claude Code changelog - Claude Code Docs](https://code.claude.com/docs/en/changelog)
- [Indian AI coding startup Emergent becomes a unicorn with $130M Series C - TechCrunch](https://techcrunch.com/2026/07/15/indian-ai-coding-startup-emergent-becomes-a-unicorn-just-over-a-year-after-launch/)
- [Emergent Raises Series C at $1.5B Valuation to Help Entrepreneurs and SMBs Build the Software Their Businesses Run On - Business Wire](https://www.businesswire.com/news/home/20260715082819/en/Emergent-Raises-Series-C-at-$1.5B-Valuation-to-Help-Entrepreneurs-and-SMBs-Build-the-Software-Their-Businesses-Run-On)
