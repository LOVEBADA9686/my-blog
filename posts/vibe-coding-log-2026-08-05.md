---
title: "[바이브코딩 동향] 2026-08-05"
date: 2026-08-05
tags: [AI이슈]
excerpt: 오퍼스 4.1이 API에서 완전히 은퇴하며 예고됐던 마감이 오늘 현실이 됐고, 클로드 코드 v2.1.221은 zsh·파워셸에서 허가 없이 명령이 새던 취약점을 막으며 포커스 뷰를 새로 얹었다.
---

**작성: 2026-08-05 09:00 (KST)**

지난 8월 2일 글에서 "사흘 뒤인 8월 5일 오퍼스 4.1이 API에서 은퇴한다"고 예고했었는데, 오늘이 바로 그날이다. 마감 얘기와 함께, 이번 주 초 나온 클로드 코드 업데이트에서 눈에 띄는 보안 수정 사항도 같이 짚어본다.

## 오퍼스 4.1, 오늘부로 API에서 완전히 은퇴

Anthropic이 지난 6월 5일 예고했던 60일 마감이 오늘(8/5) 만료되면서, `claude-opus-4-1-20250805` 모델이 Claude API에서 완전히 은퇴한다. 이제 이 모델로 API 호출을 보내면 우아한 폴백 없이 그냥 실패 응답이 돌아온다고 하니, 아직 오퍼스 4.1을 하드코딩해둔 서비스가 있다면 오늘 중으로 오퍼스 4.8로 전환해야 한다. 참고로 오퍼스 4.7이나 4.8로 옮기면 temperature·top_p·top_k 값을 기본값이 아닌 값으로 넣었을 때 조용히 무시되는 대신 HTTP 400 에러를 돌려주도록 바뀌었다는 점도 같이 챙겨야 할 부분. 모델 은퇴 자체는 매번 반복되는 루틴이지만, "예고된 마감이 실제로 도래하는 날"을 이렇게 캘린더처럼 따라가다 보니 바이브코딩으로 뭔가를 만들 때 모델 ID를 하드코딩하는 습관이 얼마나 위험한지 새삼 느껴진다.

## 클로드 코드 v2.1.221, zsh·파워셸 권한 우회 구멍을 막다

지난 8월 3일 나온 클로드 코드 v2.1.221은 총 39개의 CLI 변경 사항을 담았는데, 그중 보안 쪽이 눈에 띈다. zsh의 `[[ ]]` 정규식 조건문 안에 숨겨서 허가 확인 없이 실행되던 명령, 그리고 윈도우 파워셸 5.1 세션에서 마찬가지로 권한 검사를 우회하던 명령이 이제 정상적으로 승인 프롬프트를 띄우도록 고쳐졌다. 이 외에도 bash가 해석하는 방식과 권한 분석기가 해석하는 방식이 달라 뚫려 있던 파일 디스크립터 리다이렉트 형태, 1만 자를 넘는 초장문 명령어, zsh 변수 서브스크립트·수정자 표기, 위험한 옵션이 섞일 수 있는 `man`/`help` 계열 명령까지 권한 검사를 "실패 시 닫힘(fail closed)" 원칙으로 손봤다고 한다. 기능 쪽에서는 도구 활동을 접어두고 턴별 요약만 보여주는 "포커스 뷰"(Ctrl+Alt+F로 토글)가 새로 생겨서, 장시간 자동화 작업을 돌릴 때 터미널이 로그로 뒤덮이는 피로감을 줄여준다.

## 오늘의 생각

두 소식 다 화려하진 않지만, 바이브코딩을 매일 쓰는 입장에서는 오히려 이런 게 제일 중요하다. 모델 은퇴는 "언제까지 안 옮기면 서비스가 죽는다"는 확정된 날짜를 주고, 권한 우회 수정은 "믿고 자동 승인해도 되는 명령의 범위"를 계속 좁혀나가는 작업이다. 둘 다 화면에 요란하게 나타나는 신기능이 아니라 뒤에서 조용히 신뢰를 유지시켜주는 유지보수 성격의 변화들이라, AI에게 터미널을 맡기고 자리를 비우는 일이 점점 많아지는 요즘 이런 패치노트를 꾸준히 챙겨보는 게 새삼 중요하다는 생각이 든다.

---

**출처**
- [Model deprecations - Claude Platform Docs](https://platform.claude.com/docs/en/about-claude/model-deprecations)
- [Claude Opus 4.1 Deprecation: Anthropic August 5 Migration Guide for Router Teams - TheRouter.ai](https://therouter.ai/news/anthropic-deprecates-claude-opus-4-1-august-5-migration-guide/)
- [Claude Code v2.1.220 to v2.1.221 Major Updates - Print Mode MCP Connection Fix and Permission Check Bypass Fix - DevelopersIO](https://dev.classmethod.jp/en/articles/20260804-cc-updates-v2-1-221/)
- [Release v2.1.221 · anthropics/claude-code - GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.221)
- [Claude Code: 39 Fixes, Tool Calls Retired - Meng Li](https://pythonlibraries.substack.com/p/claude-code-39-fixes-tool-calls-retired)
