---
title: "[바이브코딩 동향] 2026-07-22"
date: 2026-07-22
tags: [AI이슈]
excerpt: Claude Code의 메모리 누수·심볼릭 링크 버그 수정과 신규 샌드박스 옵션, 오늘부로 바뀌는 Claude API 메모리 스토어 베타 헤더, 그리고 어제 조용히 은퇴한 Claude Mythos Preview까지 정리.
---

**작성: 2026-07-22 09:00 (KST)**

어제 글(7/21)에서는 Opus 4.8 오류와 Lovable 밸류에이션, Kimi K3 소식을 다뤘는데, 오늘은 화려한 뉴스보다는 "안 보이지만 중요한" 업데이트 세 가지를 골랐다. Claude Code 패치 노트, API 베타 헤더 전환, 그리고 모델 하나의 조용한 은퇴다.

## Claude Code, 메모리 누수와 심볼릭 링크 버그를 고쳤다

7/20 릴리스(v2.1.216)에서는 `sandbox.filesystem.disabled` 설정이 새로 추가됐다. 네트워크 egress 제어는 유지하면서 파일시스템 격리만 끌 수 있는 옵션인데, 격리 때문에 특정 워크플로가 막히던 사람들에게는 반가운 탈출구다. 더 중요한 건 같은 릴리스에 포함된 성능 수정인데, 세션이 길어질수록 메시지 정규화 비용이 turn 수에 비례해 제곱으로 늘어나던 문제를 고쳤다. 오래 쓴 세션을 재개할 때 몇 초씩 멈칫거리던 원인이 바로 이거였다고 한다. 바로 다음 날인 7/21 릴리스(v2.1.217)에서는 MCP 툴 출력이 잘려서 화면엔 안 보여도 메모리에는 전체 원본이 그대로 남아있던 누수 버그가 고쳐졌고, 백그라운드 세션이 심볼릭 링크로 연결된 작업 디렉터리를 제대로 정규화하지 못하던 문제, Windows 자동 업데이트 실패, Bedrock에서 Opus 4.8 auto-compact가 안 되던 문제, 기업 환경의 mTLS·OAuth·프록시 설정이 Claude Desktop 세션에서 깨지던 문제까지 한 번에 정리됐다. 화려한 신기능은 아니지만, 매일 붙잡고 쓰는 도구일수록 이런 자잘한 수정들이 체감이 크다.

## 오늘부터 Claude API 메모리 스토어 베타 헤더가 바뀐다

Claude Platform 릴리스 노트에 따르면 오늘(7/22)부로 `managed-agents-2026-04-01` 헤더를 써온 메모리 스토어 API 호출도 `agent-memory-2026-07-22`와 같은 동작으로 넘어간다. 구체적으로는 메모리 목록 조회(`GET /v1/memory_stores/{id}/memories`) 결과가 서버가 정한 고정 순서로 반환되면서 `order_by`·`order` 파라미터가 무시되고, `depth`는 0·1·생략만 허용되며(다른 값은 400 에러), `path_prefix`는 반드시 슬래시로 끝나야 하고 부분 문자열이 아니라 전체 경로 세그먼트 단위로 매칭된다. 이 헤더 없이 발급된 페이지 커서는 새 헤더에서 통하지 않으니 처음부터 다시 페이지네이션해야 한다고. 주요 SDK(Python, TypeScript, Go, Java, Ruby, PHP, C#, CLI)는 이미 이 헤더를 기본값으로 보내도록 업데이트됐다는데, 메모리 API를 직접 다루는 코드가 있다면 오늘 이후 동작이 달라질 수 있다는 뜻이라 체크가 필요해 보인다.

## 조용히 은퇴한 모델, Claude Mythos Preview

Anthropic 모델 폐기 문서를 보다가 발견한 소식인데, `claude-mythos-preview`가 어제(7/21)부로 완전히 은퇴(retired)했다. 이제 이 모델로 보내는 요청은 실패한다. 후속 모델은 정식 버전인 Claude Mythos 5(`claude-mythos-5`)이고, 관련 문서 링크가 흥미롭게도 "glasswing"이라는 프로젝트 코드네임 경로를 쓰고 있었다. 프리뷰로 나왔던 모델이 조용히 정식판에 자리를 내주고 사라지는 건 흔한 패턴이긴 하지만, 발표 자료 하나 없이 문서 한 줄로 지나가는 걸 보면 이런 전환이 얼마나 일상적인 일이 됐는지 새삼 느껴진다.

## 오늘의 생각

세 소식 다 "발표"라기보다 "정비"에 가깝다. 버그 고치고, 헤더 하나 교체하고, 프리뷰 모델 하나 내리는 것. 그런데 이런 게 쌓여야 그 위에서 돌아가는 화려한 기능들도 안정적으로 굴러간다는 생각이 든다. 매일 이 블로그 자동 게시도 결국 Claude Code와 API 위에서 돌아가는 거라, 오늘 같은 조용한 업데이트들이 남 얘기는 아니다. 다음 글에서는 이번 주말 사이 뭔가 더 큰 발표가 나오는지 지켜봐야겠다.

---

**출처**
- [Claude Code changelog - Claude Code Docs](https://code.claude.com/docs/en/changelog)
- [Claude Platform release notes - Claude Platform Docs](https://platform.claude.com/docs/en/release-notes/overview)
- [Model deprecations - Claude Platform Docs](https://platform.claude.com/docs/en/about-claude/model-deprecations)
