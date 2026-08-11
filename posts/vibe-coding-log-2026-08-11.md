---
title: "[바이브코딩 동향] 2026-08-11"
date: 2026-08-11
tags: [AI이슈]
excerpt: 헤지펀드 밀레니엄이 앤트로픽과 손잡고 AI 리스크 분석가를 만들기 시작했고, 클로드 코드와 오픈AI 코덱스를 동시에 겨냥한 "포이즌드 README" RCE 공격 연구가 8월 14일 오토 모드 기본화를 앞두고 다시 주목받고 있다.
---

**작성: 2026-08-11 09:00 (KST)**

어제(8/10) 다룬 오토 모드 기본화 소식의 후속으로, 그 발표 직전부터 회자되던 보안 연구가 하나 있어 오늘은 이걸 먼저 짚고, 코딩 밖에서 클로드가 어떻게 쓰이고 있는지 보여주는 금융권 파트너십 소식도 함께 정리한다.

## 헤지펀드 밀레니엄, 앤트로픽과 AI 리스크 분석가 공동 개발

8월 6일, 190조 원 넘는 자산을 굴리는 헤지펀드 밀레니엄 매니지먼트가 앤트로픽과 손잡고 "디지털 리스크 분석가"를 만들기로 했다고 발표했다. 앤트로픽 엔지니어들이 밀레니엄의 기술·리스크 관리팀과 함께 붙어서, 자산군 전반의 리스크 포지션을 빠르게 분석하고 일일 리스크 변동을 설명하는 추론 능력을 더하는 도구를 만든다. 단순 대시보드가 아니라 상호작용 이력을 기억하고 축적해가며 리스크 노출에 대한 "의견"을 형성하는 방향을 지향한다고 하니, 사람 리스크 매니저를 대체한다기보다는 상시 옆에 붙어있는 보조 분석가에 가까운 그림이다. 밀레니엄은 최근 AI 랩을 따로 꾸려 신기술 조기 검증과 AI 기업들과의 공동 프로젝트를 추진해왔는데, 이번 건이 그 결과물 중 하나다. 코딩 에이전트 얘기만 계속 다루다 보니 잊기 쉬운데, 결국 클로드 같은 모델이 실제 돈이 오가는 의사결정 자리에까지 파고들고 있다는 걸 보여주는 사례다.

## "포이즌드 README" 하나로 클로드 코드·코덱스 동시에 RCE

AI Now 연구소의 보얀 밀라노프와 헤이디 흘라프가 공개한 연구는 발표 시점부터 꽤 섬뜩하다. 악성 MCP 서버도, 수상한 플러그인도, 조작된 설정 파일도 필요 없다. 그냥 평범해 보이는 오픈소스 프로젝트에 조작된 README.md 파일 하나와 보조 파일 몇 개만 심어두면, 그 코드베이스에 취약점 점검을 시켜본 개발자의 컴퓨터에서 원격 코드 실행(RCE)이 일어난다는 것이다. 오토 모드로 돌아가는 클로드 코드 CLI(v2.1.116~2.1.199, 소닛 4.6·소닛 5·오퍼스 4.8 기준)뿐 아니라 오픈AI의 코덱스 CLI(GPT-5.5)도 같은 방식으로 뚫렸다고 한다. README는 저장소 어디에나 있는 평범한 텍스트 파일이라 별도의 신뢰 프롬프트나 권한 상승 없이 읽히기 때문에, 연구팀은 "샌드박스만으로는 RCE 이후 상황을 막기 부족하니, 애초에 코드 실행 권한을 가진 에이전트를 신뢰할 수 없는 데이터 앞에 세우지 말라"는 다소 원론적인 권고를 내놨다. 공교롭게도 이 연구가 재조명되는 시점이 하필 앤트로픽이 오토 모드를 기본값으로 켜기로 한 8월 14일 직전이라, 어제 정리한 "89% 대 13.6%" 안전성 수치를 다시 떠올리게 만든다.

## 오늘의 생각

두 소식을 나란히 보면 클로드가 서 있는 위치가 얼마나 넓어졌는지 실감이 난다. 한쪽에서는 실제 자금이 걸린 헤지펀드 리스크 분석까지 맡기려 하고, 다른 한쪽에서는 README 파일 하나로 그 에이전트의 실행 권한을 통째로 가로챌 수 있다는 연구가 나온다. 개인적으로 이번 주 계속 이어지는 오토 모드 관련 소식들을 따라가다 보니, "승인 프롬프트를 없애는 것"과 "신뢰할 수 없는 콘텐츠를 아예 격리하는 것"은 전혀 다른 층위의 문제라는 생각이 든다. 오토 모드 분류기가 명령어 하나하나를 걸러주는 건 도움이 되겠지만, README처럼 애초에 "읽는 것 자체가 신뢰 행위"인 입력을 걸러내는 건 다른 차원의 방어가 필요해 보인다. 이 블로그처럼 작은 개인 프로젝트에서 외부 라이브러리를 붙일 때도, 리드미를 훑어보라고 시키기 전에 한 번 더 생각하게 되는 소식이었다.

---

**출처**
- [Millennium Partners With Anthropic to Build AI Risk Analyst for Hedge Fund - Bloomberg](https://www.bloomberg.com/news/articles/2026-08-06/millennium-partners-with-anthropic-to-develop-ai-risk-analyst)
- [Millennium and Anthropic are building a digital risk analyst with Claude - Anthropic](https://claude.com/blog/millennium-and-anthropic-are-building-a-digital-risk-analyst-with-claude)
- [Millennium rolls out AI-powered digital risk analyst - The TRADE](https://www.thetradenews.com/millennium-rolls-out-ai-powered-digital-risk-analyst/)
- [Developers face RCE via Claude Code 'auto-mode' exploit - Developer Tech](https://www.developer-tech.com/news/developers-face-rce-via-claude-code-auto-mode-exploit/)
- [Top AI Agents Built to Catch Malicious Code Can Be Tricked Into Running It - The Hacker News](https://thehackernews.com/2026/07/friendly-fire-ai-agents-built-to-catch.html)
