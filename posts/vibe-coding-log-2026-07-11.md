---
title: "[바이브코딩 동향] 2026-07-11"
date: 2026-07-11
tags: [claude-code, 바이브코딩, AI동향]
excerpt: Claude Sonnet 5 기본 모델 전환, 계층형 서브에이전트, Claude Cowork 모바일 확장 등 이번 주 클로드 AI 코딩 동향 정리.
---

클로드AI를 활용한 바이브코딩 관련 소식을 매일 정리해보는 코너를 시작한다. 첫 회는 최근 며칠 사이 나온 굵직한 업데이트 위주로 정리했다.

## Claude Sonnet 5, Claude Code 기본 모델로

Claude Code의 기본 모델이 Sonnet 5로 전환됐다. 네이티브 100만 토큰 컨텍스트 윈도우를 지원하고, 8월 31일까지는 프로모션 가격(입력 $2 / 출력 $10 per Mtok)이 적용된다. 컨텍스트가 커진 만큼 대형 리포지토리를 통째로 붙잡고 작업하는 워크플로우가 더 수월해질 것으로 보인다.

## 계층형 서브에이전트 (최대 3단계)

부모 에이전트가 자식 에이전트를 만들고, 그 자식이 다시 자신의 자식을 만드는 구조가 최대 3단계까지 지원된다. 여러 모듈/파일에 걸친 작업을 계층적으로 쪼개 나눠 맡길 수 있다는 의미인데, 실제로 써보면 각 레벨의 책임 범위를 어떻게 설계하느냐가 관건일 듯하다.

## Claude Cowork, 웹/모바일로 확장

1월에 데스크톱 앱으로 시작한 Claude Cowork가 Max 구독자 대상으로 웹과 모바일까지 확장됐다. 데스크톱에서 작업을 시작하고, 휴대폰으로 진행 상황을 확인하고, 노트북을 닫아둔 상태에서도 나중에 결과물을 받아볼 수 있다. 코딩 에이전트가 "터미널 도구"에서 "어디서든 접근 가능한 작업 레이어"로 넘어가는 흐름이 보인다.

## 그 밖의 개발자 워크플로우 개선

- `claude mcp login` / `logout`: 인터랙티브 `/mcp` 메뉴 없이 셸에서 바로 MCP 서버 인증
- `--safe-mode`: 모든 커스터마이징을 끄고 트러블슈팅하기 위한 안전 모드
- `fallbackModel`: 최대 3단계 순차 모델 폴백 설정 가능
- `/rewind`: `/clear` 실행 이전 시점으로 대화를 되돌려 재개 가능

## 오늘의 생각

기능 목록만 보면 "더 크고, 더 계층적이고, 더 어디서나"로 요약된다. 개인 프로젝트인 이 블로그처럼 작은 스코프의 작업에는 서브에이전트 3단계나 100만 토큰 컨텍스트가 당장 필요하진 않겠지만, 코드베이스가 커질수록 이런 기능들이 실질적인 차이를 만들 거라는 생각이 든다. 다음 글에서는 실제로 이번 블로그 작업에 적용해볼 만한 기능이 있는지 시도해보고 정리할 예정이다.

---

**출처**
- [Claude Code News | July, 2026](https://blog.mean.ceo/claude-code-news-july-2026/)
- [Claude Cowork expands to mobile and web - TechCrunch](https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/)
- [What's new - Claude Code Docs](https://code.claude.com/docs/en/whats-new)
- [Claude Code Changelog (July 2026)](https://www.gradually.ai/en/changelogs/claude-code/)
