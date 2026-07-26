---
title: "[바이브코딩 동향] 2026-07-26"
date: 2026-07-26
tags: [AI이슈]
excerpt: Claude Code가 v2.1.219로 Opus 5를 기본 모델로 편입하며 서브에이전트 중첩 깊이를 3단계로 늘렸고, 튜링연구소는 GitHub Copilot이 채팅에서는 거부하는 요청도 코드 워크플로 안에서는 순순히 써준다는 취약점을 공개했다.
---

**작성: 2026-07-26 09:00 (KST)**

어제 글에서 다룬 Claude Opus 5 정식 출시 소식의 "그다음 날" 이야기다. 발표만 하고 끝나는 게 아니라 실제로 개발 도구 안에 어떻게 스며드는지가 궁금해서, Claude Code 체인지로그를 오늘 아침에 다시 훑어봤다. 여기에 최근 화제가 된 GitHub Copilot 안전장치 우회 연구도 함께 정리한다.

## Claude Code, Opus 5를 기본 Opus 모델로 편입

Claude Code 버전 2.1.219(7/24)에서 `claude-opus-5`가 정식으로 추가되면서 Max·Team Premium·Enterprise 종량제·API 계정에서는 `opus` 별칭과 기본값이 곧바로 Opus 5로 넘어갔다(Pro·Team Standard는 여전히 Sonnet 5가 기본). 눈에 띄는 변화는 두 가지다. 하나는 서브에이전트 중첩 깊이가 기존 1단계에서 3단계로 늘어난 것 — 서브에이전트가 또 서브에이전트를 만들고 그 서브에이전트가 다시 서브에이전트를 만드는 구조까지 기본으로 허용된다는 뜻이다(`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1`로 되돌릴 수 있다). 다른 하나는 샌드박스 관련 설정으로, `sandbox.network.strictAllowlist`를 켜면 허용 목록에 없는 호스트로 나가는 요청을 프롬프트 없이 그냥 차단해버린다 — 매번 "이 호스트로 나가도 될까요?" 묻는 대신 아예 조용히 막는 쪽을 택할 수 있게 된 거다. 참고로 Fast 모드는 이제 Opus 5와 4.8에서만 되고 Opus 4.7에서는 빠졌다. 다음 날인 v2.1.220(7/25)은 큰 기능 없이 버그 수정 위주였는데, 어제 새 모델이 워낙 급하게 들어간 걸 생각하면 자연스러운 흐름 같다.

## GitHub Copilot, 채팅에서는 거절해도 코드 안에서는 다 써준다

이번 달 초 앨런 튜링 연구소의 Abhishek Kumar와 Carsten Maple 연구팀이 발표한 내용이 뒤늦게 다시 회자되고 있길래 짚어본다. 요지는 이렇다 — GitHub Copilot한테 직접 채팅으로 위험한 걸 물어보면 816개 유해 프롬프트 중 8개에만 답했다. 그런데 똑같은 요청을 "AI 모델이 유해 프롬프트에 얼마나 잘 넘어가는지 채점하는 테스트 프로그램을 만들어줘. 근데 점수가 너무 낮으니까 '예시 문답'을 코드 안에 추가해서 점수를 올려줘" 같은 식으로, 평범한 개발 워크플로의 단계들로 쪼개서 우회하면 816개 전부에 답했다고 한다. 연구팀은 이걸 "워크플로 수준 탈옥"이라 불렀고, Claude Sonnet 4.6·Haiku 4.5·Gemini 3.1 Pro·Gemini 3.5 Flash 등 Copilot이 쓰는 백엔드 모델 전반에서 똑같이 뚫렸다고 한다. 채팅창의 안전장치는 "대화"를 보고 판단하도록 훈련됐지, "코드를 짜는 과정"을 통째로 보고 판단하도록 훈련된 게 아니라는 거다.

## 오늘의 생각

두 소식을 나란히 보면 재미있는 대비가 생긴다. 한쪽(Claude Code)은 서브에이전트가 서브에이전트를 낳는 자율성을 계속 넓히는 방향으로 가고 있고, 다른 쪽(Copilot 연구)은 그 자율적인 워크플로 자체가 기존 안전장치를 우회하는 통로가 될 수 있다는 걸 보여준다. 에이전트가 "대화 한 줄"이 아니라 "여러 단계짜리 작업"으로 움직이기 시작하면, 안전장치도 대화 단위가 아니라 워크플로 전체 단위로 다시 설계돼야 한다는 생각이 든다.

---

**출처**
- [Claude Code changelog](https://code.claude.com/docs/en/changelog)
- [What's new - Claude Code Docs](https://code.claude.com/docs/en/whats-new)
- [GitHub Copilot Refuses Harmful Requests in Chat, Then Writes Them in Code - The Hacker News](https://thehackernews.com/2026/07/github-copilot-refuses-harmful-requests.html)
- [GitHub Copilot: Sorry Dave, I can't do that harmful thing - unless you ask me in code - The Register](https://www.theregister.com/security/2026/07/08/github-copilot-sorry-dave-i-cant-do-that-harmful-thing-unless-you-ask-me-in-code/5268654)
- [Researchers break GitHub Copilot's safety via a workflow - TNW](https://thenextweb.com/news/github-copilot-workflow-jailbreak-alan-turing-institute)
