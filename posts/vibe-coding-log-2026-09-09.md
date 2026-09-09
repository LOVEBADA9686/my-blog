---
title: "[바이브코딩 동향] 2026-09-09"
date: 2026-09-09
tags: [AI이슈]
excerpt: 아무 공지 없이 일부 계정에만 조용히 풀린 클로드 코드의 미문서화 명령어 "/limit-reset"과, 세일즈포스가 자사 CRM 제품명에 처음으로 "포스"를 붙여 만든 앤트로픽과의 새 파트너십 "Claudeforce"를 정리했다.
---

**작성: 2026-09-09 09:00 (KST)**

오늘은 성격이 완전히 다른 소식 두 개를 나란히 놓아본다. 하나는 클로드 코드를 매일 쓰는 개발자라면 반가울 작은 명령어 하나, 다른 하나는 앤트로픽이 엔터프라이즈 시장에서 얼마나 몸집을 불리고 있는지 보여주는 대형 파트너십 소식이다.

## 아무도 공지 안 했는데 등장한 "/limit-reset" 명령어

이번 주 일부 클로드 코드 사용자들 사이에서 `/limit-reset`이라는 명령어가 조용히 눈에 띄기 시작했다. 문제는 이 명령어가 앤트로픽의 공식 릴리스 노트나 체인지로그 어디에도 언급된 적이 없다는 것이다. 5시간짜리 세션 한도에 걸린 상태에서 이 명령어를 실행하면 "세션 한도가 초기화됐습니다 · 다음 초기화 가능 시점 9월 4일 오후 2시 · 주간 한도는 여전히 적용됩니다" 같은 메시지가 뜬다고 한다. 즉 일주일에 한 번 5시간 세션 한도만 풀어주는 기능이고, 클로드 코드 구독 플랜에 걸려 있는 또 다른 축인 "주간 한도"에는 손을 대지 않는다. 더 흥미로운 건 같은 명령어를 쳐도 어떤 계정은 초기화가 승인되고 어떤 계정은 거부된다는 점이다. 명령어 자체는 전체 사용자에게 뿌려진 것 같은데, 실제로 작동 여부를 가르는 기준이 무엇인지는 앤트로픽 쪽에서 아무 설명이 없다. 몰래 흘려보낸 실험 기능인지, 문서화가 릴리스보다 늦게 따라오는 흔한 경우인지 아직 판단하기 이르지만, 한도에 자주 걸리는 헤비 유저 입장에서는 당장 눈에 띌 수밖에 없는 변화다.

## 세일즈포스, 자사 제품명에 처음으로 "포스"를 앤트로픽에 붙였다

8월 26일 세일즈포스와 앤트로픽이 "Claudeforce"라는 이름의 확장된 전략적 파트너십을 발표했다. 세일즈포스가 자사 브랜드의 상징인 "포스" 접미사를 외부 AI 모델 이름에 붙인 건 이번이 처음이라, 발표 형식 자체가 꽤 이례적이었다. 핵심은 세일즈포스의 데이터·워크플로·거버넌스를 클로드가 직접 들여다보고 행동할 수 있게 여는 것이다. 우선 세일즈에 특화된 사전 구축 스킬 37종을 담은 "Salesforce in Claude" 플러그인이 파일럿 고객 대상으로 열렸고, 반대 방향으로는 클로드가 에이전트포스의 추론 엔진(Atlas Reasoning Engine)에 들어가 에이전트포스 바이브스와 에이전트포스 코워커의 기본 모델 역할을 맡는다. 마크 베니오프는 "클로드의 뛰어난 추론 능력과 모든 기업이 이미 쓰고 있는 신뢰할 수 있는 데이터·워크플로·거버넌스를 결합해, 생각하고 추론하고 행동하는 동적 인터페이스를 제공한다"고 밝혔고, 다리오 아모데이는 "기업들이 수십 년간 세일즈포스에 쌓아온 고객 정보와 비즈니스 맥락에 클로드를 바로 붙여 실제로 사업을 운영하고 키우는 데 쓸 수 있다"고 말했다. 세일즈포스는 2026년 한 해 동안 앤트로픽 토큰에 약 3억 달러를 추가로 투자할 계획이라고 하니, 말뿐인 협력이 아니라 실제 돈이 오가는 딜이다. "Salesforce in Claude"의 오픈 베타는 9월 중 열릴 예정이다.

## 오늘의 생각

한쪽은 개발자 몇 명이 눈치채고 커뮤니티에 공유하면서 알려진 조용한 변화고, 다른 쪽은 두 CEO가 방송에 나와 발표한 요란한 딜이다. 그런데 결국 둘 다 앤트로픽이 "누구에게 얼마나 열어줄 것인가"를 계속 실험하고 있다는 같은 이야기로 읽힌다. 한도 초기화 명령어는 개인 사용자 단위에서, Claudeforce는 기업 단위에서 접근 권한과 사용량을 조율하는 방식을 계속 바꿔가고 있는 셈이다. 블로그 하나 굴리는 입장에서 3억 달러짜리 딜에 낄 일은 없지만, 언제 내 계정에도 `/limit-reset`이 조용히 나타날지는 계속 지켜볼 만하다.

---

**출처**
- [Claude Code's New /limit-reset Command, Explained - explainx.ai](https://www.explainx.ai/blog/claude-code-limit-reset-command-september-2026)
- [Claude Code: the 'weekly' usage limit resets every 72 hours, not 7 days - GitHub Gist](https://gist.github.com/monperrus/3ac4b303a84946bbeaf2b1123ee99491)
- [Salesforce and Anthropic Announce Claudeforce: The #1 AI Meets the #1 AI CRM - Salesforce](https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/)
- [Salesforce is putting Claude at the centre of its products, and itself inside Claude - TNW](https://thenextweb.com/news/salesforce-anthropic-claudeforce-partnership)
- [Salesforce reveals 'Claudeforce' in major new Anthropic AI deal as CEO Marc Benioff pushes back against SaaSpocalypse - TechRadar](https://www.techradar.com/pro/salesforce-reveals-claudeforce-in-major-new-anthropic-ai-deal-as-ceo-marc-benioff-pushes-back-against-saaspocalypse)
- [CNBC Exclusive: Transcript — Marc Benioff and Dario Amodei speak with Jim Cramer - CNBC](https://www.cnbc.com/2026/08/26/cnbc-exclusive-transcript-salesforce-chair-ceo-marc-benioff-and-anthropic-co-founder-ceo-dario-amodei-speak-with-cnbcs-jim-cramer-on-closing-bell-overtime-today.html)
