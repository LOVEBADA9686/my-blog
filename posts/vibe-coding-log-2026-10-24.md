---
title: "[바이브코딩 동향] 2026-10-24"
date: 2026-10-24
tags: [AI이슈]
excerpt: 앤트로픽이 Agent Skills를 Linux Foundation 산하 Agentic AI Foundation에 완전히 기부해 자사 손을 뗀 오픈 표준으로 만들었고, 클로드 코드 v2.1.310은 엔터프라이즈 커스텀 역할에 클라우드 세션 권한을 얹었다. 클로드 듀엣 테스티모니얼 절반이 자사 직원이었다는 지적까지 정리.
---

**작성: 2026-10-24 09:00 (KST)**

오늘은 코딩 쪽 소식 두 개랑, 어제 다룬 클로드 듀엣 뒷이야기 하나를 묶어봤다. 표준을 손에서 놓아버리는 결정, 조용히 쌓이는 클로드 코드 패치, 그리고 신제품 발표 뒤에 따라붙는 뒷말까지 세 가지다.

## Agent Skills, 앤트로픽이 완전히 손을 뗀 오픈 표준이 되다

앤트로픽이 작년 12월에 공개한 Agent Skills 표준을 Linux Foundation 산하 중립 기구인 Agentic AI Foundation(AAIF)에 통째로 기부했다. 이름과 로고, GitHub 조직, agentskills.io 도메인까지 넘겼다는 게 눈에 띈다. Agent Skills는 `SKILL.md` 파일 하나에 스크립트나 참고 자료를 묶어서 AI 에이전트에게 특정 작업 절차를 가르치는 방식인데, 클로드 코드를 만들면서 "일반 지식은 잘 다루지만 실제 업무 절차는 모른다"는 문제를 풀려고 고안했다고 한다. 공개 이후 ChatGPT, 커서, GitHub 코파일럿, VS Code 등 70개 넘는 플랫폼이 이 표준을 가져다 썼고, 지금까지 약 100만 개의 스킬이 올라와 2억 8000만 번 넘게 설치됐다. AAIF는 앤트로픽이 작년에 OpenAI, Block과 함께 만든 재단으로, MCP도 이미 이쪽에 맡겨둔 상태다. 앞으로는 앤트로픽·구글·OpenAI 엔지니어들이 개인 자격으로 유지보수를 맡고, 버전 릴리스와 정식 제안 절차, 보안 가이드라인까지 커뮤니티 논의로 정한다고 한다. 자기가 만든 표준을 자기 회사 소유로 남겨두지 않고 넘기는 결정이 꽤 과감하게 느껴졌다.

## 클로드 코드 v2.1.310, 엔터프라이즈 권한 관리가 한 단계 더 세밀해졌다

클로드 코드가 어제 v2.1.310을 냈다. 가장 눈에 띄는 변화는 엔터프라이즈 커스텀 역할(custom role)에 클라우드 세션과 리모트 컨트롤 권한을 따로 배정할 수 있게 된 것이다. 조직 안에서 "이 역할은 클라우드 세션은 쓰되 리모트 컨트롤은 못 쓰게" 같은 세밀한 권한 분리가 가능해진 셈이다. 그리고 세션 상태를 실시간으로 보여주는 Monitor 툴과 플러그인 모니터가 Bedrock·Vertex·Foundry 환경에서도, 심지어 텔레메트리나 비필수 트래픽을 꺼둔 환경에서도 동작하게 됐다. 그 밖에 비대화형 세션에서 MCP elicitation에 응답이 없을 때 클로드에게 "응답이 안 왔으니 같은 호출을 반복하지 말라"고 알려주는 처리, 그리고 일부 게이트웨이가 특정 베타 값을 거부할 때 재시도하는 안정성 수정도 함께 들어갔다. 지난주부터 거의 매일 패치가 올라오고 있는데, 이번 건은 기능 추가보다는 "여러 명이 같은 조직 계정으로 쓸 때의 관리 포인트"를 다듬는 쪽에 가깝다.

## 클로드 듀엣, "테스티모니얼 절반이 자사 직원"이라는 지적

지난 화요일 발표된 프로액티브 에이전트 클로드 듀엣을 두고 뒷말이 나오고 있다. 하나는 이용 한도 문제다. 듀엣이 백그라운드에서 돌아가며 수행하는 작업도 똑같이 기존 플랜의 사용량 한도를 깎아먹기 때문에, 대기 중인 Pro·Max 사용자들 사이에서 "채팅보다 한도가 더 빨리 닳는다"는 불만이 나온다. 다른 하나는 신뢰성 문제인데, 한 스페인어 매체 분석에 따르면 발표 자료에 실린 이용자 후기 6개 중 3개가 앤트로픽 직원이었다고 한다. 신제품 초기 피드백이야 원래 내부 인원 비중이 높을 수밖에 없지만, 공개된 숫자로 드러나니 "역시나"라는 반응이 꽤 있는 모양이다.

## 오늘의 생각

세 소식을 보니 "공개하는 방식"에 대한 생각이 든다. Agent Skills는 아예 소유권을 내놓고 완전히 열어버렸고, 클로드 코드는 매일 조용히 패치를 쌓으며 신뢰를 다지는 쪽이고, 클로드 듀엣은 화려하게 발표했다가 디테일에서 "사실은 내부 테스트 수준이었다"는 지적을 받고 있다. 똑같이 새로운 걸 내놓아도 얼마나 투명하게, 또 얼마나 빨리 검증 가능한 형태로 내놓느냐에 따라 받는 평가가 꽤 다르다는 걸 느꼈다.

---

**출처**
- [Donating Agent Skills to the Agentic AI Foundation - Anthropic](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation)
- [Anthropic launches enterprise agent skills and opens the standard - VentureBeat](https://venturebeat.com/ai/anthropic-launches-enterprise-agent-skills-and-opens-the-standard)
- [Claude Code changelog](https://code.claude.com/docs/en/changelog)
- [Claude Duet research preview starts with a waitlist for US Pro and Max subscribers - Digg](https://digg.com/ai/wcmlnx2r)
- [Claude Duet: el agente de Anthropic que vigila tu correo - Ecosistema Startup](https://ecosistemastartup.com/claude-duet-el-agente-de-anthropic-que-vigila-tu-correo/)
