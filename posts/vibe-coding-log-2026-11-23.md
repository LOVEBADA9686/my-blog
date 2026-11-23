---
title: "[바이브코딩 동향] 2026-11-23"
date: 2026-11-23
tags: [AI이슈]
excerpt: 클로드 코드 2.1.329~2.1.330이 /tasks에 예약 작업·포크를 띄우고 엔터프라이즈 어드민 콘솔 조직 로그인과 "easel" 차트 목을 더했다. 그리고 "다시 묻지 않기"가 공개 깃허브 저장소에 비밀번호·키를 흘렸다는 아피로 보안 리포트를 다시 들여다봤다.
---

**작성: 2026-11-23 09:00 (KST)**

오늘은 클로드 코드 패치 두 개와, 몇 주 전부터 계속 입에 오르내리는 보안 이슈 하나를 정리했다. 하나는 "편의 기능이 늘어나는" 이야기고 다른 하나는 "그 편의 기능이 어떻게 사고로 이어지는가"에 대한 이야기라서, 같이 놓고 보면 묘하게 짝이 맞는다.

## 클로드 코드 2.1.329 / 2.1.330 — /tasks가 예약 작업까지 보여주고, 엔터프라이즈 조직 로그인이 들어왔다

지난 목요일(11/19)에 나온 2.1.329는 `/tasks` 화면을 확장한 패치다. 이제 예약된 작업(scheduled tasks)과 루프 웨이크업, 포크된 서브에이전트까지 한 화면에서 볼 수 있고, `/status`에는 마켓플레이스가 자동 업데이트되고 있는지 보여주는 행이 추가됐다. 폴더의 훅이 어디서 선언됐는지를 경고하는 신뢰 다이얼로그도 이때 들어왔는데, 프로젝트를 열 때마다 "이 훅, 진짜 내가 아는 설정에서 온 거야?"를 한 번 더 확인시켜주는 셈이다. 다음 날(11/20) 나온 2.1.330은 체감상 더 묵직하다. 엔터프라이즈 어드민 콘솔에서 관리하는 조직으로 로그인할 수 있게 됐고, 코드 안에서 바로 차트를 그릴 수 있는 내장 목(mod) "easel"이 추가됐다. 자체 호스팅 러너 옵션과 메트릭도 여럿 늘었다. 버그 수정 쪽에서는 긴 대화를 컴팩션한 뒤 멈춰버리는 문제, WebFetch가 멈춰버리는 문제, 워크트리를 지울 때 생기던 위험, 여러 프로세스가 동시에 설정을 저장할 때 값이 날아가던 문제 등 꽤 오래 알려져 있던 불편들이 한꺼번에 처리됐다. 패치 하나하나는 작아 보여도, 사흘 치를 모아 보면 "관리/신뢰" 쪽에 힘을 꽤 실었다는 인상이다.

## "다시 묻지 않기"가 공개 저장소에 비밀번호를 남긴다 — 아피로 보안 리포트

이달 초(11/5) 보안 업체 아피로(Apiiro)가 내놓은 리포트가 요즘도 계속 회자되고 있어서 늦게라도 짚어본다. 클로드 코드에서 셸 명령을 승인할 때 "Yes, and don't ask again"을 누르면 그 명령이 프로젝트의 `.claude/settings.local.json`에 허용 규칙으로 저장되는데, 승인한 명령 문자열 자체에 비밀번호나 API 키가 들어 있으면 그 값이 평문 그대로 파일에 박힌다. 아피로가 공개 깃허브에 올라온 이 파일 10만여 건(약 104,185건)을 뒤져본 결과 1,122건에서 실제로 유효한 시크릿이 발견됐고, 깃 히스토리나 다른 에이전트 설정 파일까지 넓혀 보니 1,994개 저장소에서 2,539개의 시크릿이 나왔다고 한다. 비슷한 시기 깃가디언(GitGuardian)도 독자적으로 23,276개 저장소에서 31,088개의 시크릿을 찾았고 그중 5,343개는 탐지 시점에도 여전히 유효했다고 밝혔다. 두 회사의 집계 방식이 달라 숫자를 그대로 더할 건 아니지만, "같은 파일, 같은 원인"에서 나온 결과라는 점은 같다. 앤트로픽 쪽은 해당 파일을 클로드 코드가 만들 때는 자동으로 `.gitignore`에 넣어주기 때문에 노출된 파일들은 "사용자가 수동으로 만들어 커밋한 것"이라는 입장을 냈는데, 보도에 따르면 실제로는 클로드가 직접 커밋한 사례도 양쪽 리포트에 섞여 있다고 한다. 결론은 단순하다. 파일을 지우거나 히스토리를 다시 쓰는 것만으로는 아무것도 해결되지 않고, 이미 노출된 키/비밀번호는 전부 회전(rotate)하는 게 유일하게 의미 있는 조치라는 점이다.

## 오늘의 생각 — 자동화가 늘어날수록 "확인"의 자리가 더 중요해진다

두 소식을 같이 놓고 보니 결국 같은 질문으로 모인다. "더 묻지 않기"로 넘어가는 그 순간을 누가, 어떻게 책임지는가. `/tasks`가 예약 작업과 포크까지 한눈에 보여주는 것도, 훅 출처를 경고하는 신뢰 다이얼로그가 생긴 것도 따지고 보면 "자동으로 돌아가는 것들을 사람이 다시 들여다볼 수 있게" 만드는 기능들이다. 반대로 아피로 리포트는 그 "다시 들여다보기"를 한 번 생략한 대가가 뭔지를 보여준다. 바이브 코딩이 편한 이유는 확인 절차를 건너뛸 수 있어서인데, 그 건너뛴 자리에 비밀번호가 남아 있을 수 있다는 걸 이번 리포트가 꽤 구체적인 숫자로 보여준 셈이다. 오늘 글을 쓰면서 내 레포에도 `.claude/settings.local.json`이 깃에 안 걸려 있는지 한 번 더 확인했다.

---

**출처**
- [Claude Code CHANGELOG.md - GitHub (anthropics/claude-code)](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
- [anthropics/claude-code Releases (v2.1.329, v2.1.330) - GitHub](https://github.com/anthropics/claude-code/releases)
- [Claude Code's 'Don't Ask Again' Leaked 1,122 Secrets - Kunal Ganglani](https://www.kunalganglani.com/blog/claude-code-dont-ask-again-secrets)
- [Apiiro finds Claude Code approvals leaking 2,539 secrets on GitHub - Let's Data Science](https://letsdatascience.com/news/apiiro-finds-claude-code-approvals-leaking-2539-secrets-on-g-e4f20dbc)
- [Claude Code's 'don't ask again' leaked 2,539 GitHub secrets - AI Weekly](https://aiweekly.co/alerts/claude-codes-dont-ask-again-leaked-2539-github-secrets)
- [Claude Code's "Don't Ask Again" Exposed Passwords in 1,122 Public GitHub Files - BuildMVPFast](https://www.buildmvpfast.com/blog/claude-code-dont-ask-again-secrets-settings-local-json-2026)
