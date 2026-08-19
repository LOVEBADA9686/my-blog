---
title: "[바이브코딩 동향] 2026-08-19"
date: 2026-08-19
tags: [AI이슈]
excerpt: 클로드 코드가 GitLab 머지 리퀘스트를 정식 지원하고 사용량 한도 도달 시 자동 재개 체크박스를 붙였다. 한편 앤트로픽은 8월 17일부로 구버전 Workbench와 실험용 프롬프트 API를 완전히 종료했다.
---

**작성: 2026-08-19 09:00 (KST)**

## 클로드 코드, GitLab 머지 리퀘스트 정식 지원 + 자동 재개 체크박스

8월 14일 나온 클로드 코드 2.1.233 버전부터 GitLab 워크플로 지원이 눈에 띄게 좋아졌다. `--worktree` 플래그와 에이전트 뷰에서 GitLab 머지 리퀘스트 URL을 바로 다룰 수 있게 됐고, `!N` 형식으로 표시된다. 저장소 리모트가 GitLab이고 `glab` CLI에 로그인돼 있으면 하단 상태줄과 풋터에 MR 배지가 뜨는데, draft·pending·초록불 상태까지 한눈에 보여준다. 그동안 GitHub PR 위주로만 잘 맞물렸던 느낌이라, GitLab 쓰는 팀 입장에서는 반가운 소식일 듯하다.

비슷한 시기에 데스크톱 앱에는 사용량 한도 도달 시 "자동 재개" 체크박스도 추가됐다. 켜두면 5시간 세션 한도에 걸려도 한도가 풀리는 순간 알아서 컨텍스트를 다시 붙여 이어서 진행해준다. 다만 이건 어디까지나 "타이밍을 대신 챙겨주는" 편의 기능이지 한도 자체가 늘어나는 건 아니다 — 진짜 병목이 주간(7일 롤링) 한도 쪽이라면 자동 재개를 켜도 결국 같은 벽에 다시 부딪히게 된다는 지적이 나온다.

## 구버전 Workbench·실험용 프롬프트 API, 8월 17일부로 완전 종료

앤트로픽이 7월 17일 릴리스 노트에서 예고했던 대로, 8월 17일 자로 콘솔의 구버전 Workbench와 세 개의 실험용 프롬프트 엔드포인트(`/v1/experimental/generate_prompt`, `improve_prompt`, `templatize_prompt`)를 완전히 종료했다. 예고 기간이 31일로, 앤트로픽이 보통 모델 폐기 때 지키는 60일 이상 공지 기간보다 훨씬 짧았다는 점이 지적받고 있다. 종료 전에 저장된 프롬프트·변수·평가 설정을 내보내지 않은 조직은 데이터를 되돌릴 방법이 없다고 한다. 종료 후 해당 엔드포인트로 요청을 보내면 그냥 에러가 난다.

새로 나온 Workbench는 서버에 아무것도 저장하지 않는 상태 비저장(stateless) 방식으로 바뀌었다 — 작성 중인 내용은 브라우저에만 남고, 요청을 코드로 내보낼 수 있는 구조다. 가볍게 모델을 테스트해보는 용도로는 오히려 깔끔해졌지만, 예전처럼 "저장해두고 나중에 이어서 편집"하던 습관이 있던 사람이라면 워크플로를 바꿔야 할 것 같다.

## 오늘의 생각

오늘 두 소식 다 "미리 안 챙기면 나중에 곤란해진다"는 결이 비슷하다. GitLab MR 지원이나 자동 재개 체크박스는 켜두기만 하면 되는 편의 기능이라 부담이 없지만, Workbench 종료는 사전에 내보내기를 안 해뒀으면 그냥 데이터가 사라지는 쪽이라 훨씬 매몰차다. 릴리스 노트를 매번 챙겨보는 사람이 아니고서야 31일이라는 공지 기간을 알아채기도 쉽지 않았을 것 같다. 이 블로그처럼 매일 자동으로 돌아가는 파이프라인을 만들다 보니, "언젠가 조용히 사라질 수도 있는 API"에 너무 깊이 의존하지 않는 게 중요하다는 생각이 다시 든다.

---

**출처**
- [Claude Code 2.1.233 — GitLab merge requests - AI/TLDR](https://ai-tldr.dev/releases/anthropic-claude-code-gitlab-support/)
- [Claude Code v2.1.234 (Aug 17, 2026) — Every Release, Summarized - Havoptic](https://www.havoptic.com/tools/claude-code)
- [Claude Code Auto-Continue Checkbox Explained (Aug 2026) - explainx.ai](https://explainx.ai/blog/claude-code-desktop-auto-continue-usage-limit-august-2026)
- [Anthropic Kills Claude Workbench Today: Saved Prompts Gone, API Pipelines Broken - Tech Times](https://www.techtimes.com/articles/324669/20260817/anthropic-kills-claude-workbench-today-saved-prompts-gone-api-pipelines-broken.htm)
- [Claude Developer Platform Updates by Anthropic - August 2026 - Releasebot](https://releasebot.io/updates/anthropic/claude-developer-platform)
