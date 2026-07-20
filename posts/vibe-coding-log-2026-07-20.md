---
title: "[바이브코딩 동향] 2026-07-20"
date: 2026-07-20
tags: [AI이슈]
excerpt: 오늘부터 바뀌는 Claude Fable 5 요금제, EndConversation 툴을 포함한 Claude Code 안정성 업데이트, 그리고 골드만삭스·모건스탠리가 붙은 Anthropic IPO 투자자 미팅 소식까지 정리.
---

**작성: 2026-07-20 09:00 (KST)**

지난 글(7/19)에서는 Claude 내부의 "J-스페이스"와 삼성 커스텀 칩 논의를 다뤘는데, 오늘은 훨씬 더 "체감되는" 소식들이다. 바로 오늘부터 적용되는 요금제 변경, 개발자 도구 안정성 업데이트, 그리고 규모가 남다른 IPO 소식까지 세 가지를 골랐다.

## 오늘부터 달라지는 Claude Fable 5 요금제

지난 며칠간 계속 연장되던 Fable 5 무료 포함 기간이 오늘(7/20)부로 정말 끝난다. 다만 완전히 막히는 건 아니고 플랜별로 갈린다. Max와 Team Premium 사용자는 앞으로도 Fable 5를 쓸 수 있지만, 기존 사용 한도의 50%까지만 포함되고 그 이상은 별도 크레딧을 구매해야 한다. 반면 Pro와 Team Standard 사용자는 정규 플랜 한도 안에서는 더 이상 Fable 5를 쓸 수 없고, 대신 사용량만큼 과금되는 크레딧 방식으로 전환된다. 대상자에게는 일회성으로 100달러 크레딧이 지급된다고 한다. 크레딧 소진 후 가격은 입력 토큰 100만 개당 10달러, 출력 토큰 100만 개당 50달러. Anthropic 측은 "Fable 수요를 예측하기가 어려워서 단계적으로 확대하며 몇 차례나 연장했다"고 설명했는데, 거꾸로 말하면 이제 서버 여유가 어느 정도 확보됐다는 뜻으로 읽힌다. 그동안 무료 기한 연장 소식만 계속 전했는데, 드디어 요금제가 "정착"되는 느낌이다.

## Claude Code, 안정성·보안 업데이트에 EndConversation 툴까지

Claude Code 쪽도 지난 이틀 사이 꽤 묵직한 업데이트가 있었다. 7/18자 릴리스(v2.1.214)는 "안정성·보안 업데이트"라는 이름답게 자잘하지만 실무에 영향을 주는 수정이 많다. 예를 들어 `Edit(src/**)` 같은 단일 세그먼트 허용 규칙이 의도한 디렉터리 밖까지 자동 승인해버리던 버그, bash가 10,000자 넘는 명령어를 잘못 판단해 위험한 명령도 자동 실행하던 문제, PowerShell 5.1에서 권한 체크가 우회되던 문제 등이 고쳐졌다. 동시에 claude.ai에서 이미 쓰이던 `EndConversation` 툴이 Claude Code에도 도입돼, 심하게 악의적인 사용자나 탈옥(jailbreak) 시도가 있을 때 Claude가 세션을 스스로 종료할 수 있게 됐다. 오래 걸리는 백그라운드 작업이 조용히 멈춰 있는 것처럼 보이던 문제도 주기적인 "진행 중" 신호(progress heartbeat)로 개선됐다. 그리고 바로 다음 날인 7/19자 릴리스(v2.1.215)에서는 `/verify`, `/code-review` 스킬을 Claude가 자동으로 실행하지 않고 사용자가 직접 호출해야만 실행되도록 바뀌었다. 자동으로 검증·리뷰를 돌려주는 게 편할 때도 있었지만, 원치 않는 타이밍에 끼어드는 게 오히려 불편했던 사람들에게는 반가운 변화일 듯하다.

## Anthropic IPO, 골드만삭스·모건스탠리·JP모건이 붙었다

이제 정말 몸집이 커지는구나 싶은 소식. 블룸버그와 CNBC 보도에 따르면 Anthropic이 대형 IPO를 앞두고 투자자 미팅을 준비 중이라고 한다. 주관사로는 골드만삭스, 모건스탠리, JP모건체이스 등 월가 최대 은행들이 참여하고 있고, 빠르면 10월 상장도 검토되고 있다는 보도다. 마지막 비상장 기업가치가 9,650억 달러였는데, 상장 시 시가총액이 1조 달러를 넘어설 거라는 전망까지 나온다. AI 기업들의 상장 러시 속에서도 규모 자체가 남다르다. 요금제 조정이나 툴 업데이트 같은 "일상적인" 소식들과 나란히 놓고 보면, 이 회사가 지금 얼마나 다른 속도로 몸집을 키우고 있는지 새삼 체감된다.

## 오늘의 생각

세 소식을 하루 안에 놓고 보니 묘하게 앞뒤가 맞는다. 무료 혜택을 걷어내고 유료 크레딧 구조로 정리하는 것도, Claude Code 내부 권한 체크를 촘촘히 고치는 것도, 결국 회사를 "지속 가능하게, 그리고 투자자 앞에 내놓을 수 있게" 다듬는 과정처럼 보인다. IPO를 준비하는 회사는 화려한 발표보다 이런 자잘한 정비를 훨씬 많이 한다는 걸 새삼 느낀다. 다음 글에서는 이 요금제 변화가 실제 사용자들 사이에서 어떤 반응으로 이어지는지 지켜봐야겠다.

---

**출처**
- [Beginning July 20, Claude Fable 5 will be included in all Max and Team Premium plans... - Claude (X/Twitter)](https://x.com/claudeai/status/2078302415804379218)
- [Claude Access Plans: Key July 20 Changes Explained - SquaredTech](https://www.squaredtech.co/claude-access-plans-key-questions-over-july-20-changes)
- [Claude Fable 5 access changes from July 20: new limits and usage credits explained - Tech2](https://www.tech2.com/tech2/claude-fable-5-access-changes-from-july-20-new-limits-and-usage-credits-explained-text-ws-kl-10221773.html)
- [Claude Code changelog - Claude Code Docs](https://code.claude.com/docs/en/changelog)
- [Anthropic Plans IPO Investor Meetings as Mega-Listing Nears - Bloomberg](https://www.bloomberg.com/news/articles/2026-07-15/anthropic-is-said-to-plan-ipo-investor-meetings-as-listing-nears)
- [Anthropic moves closer to mega-IPO as bankers line up investor meetings - CNBC](https://www.cnbc.com/2026/07/15/anthropic-ipo-banks-investor-meetings.html)
