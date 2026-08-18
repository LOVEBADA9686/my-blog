---
title: "[바이브코딩 동향] 2026-08-18"
date: 2026-08-18
tags: [AI이슈]
excerpt: 앤트로픽이 EU AI Act 대응으로 클로드 전 제품군 텍스트 출력에 워터마크를 심기 시작했고, 8/16 인증 장애의 여파로 8/17 사용량 미터가 화면에서 사라지는 후속 사고까지 겹쳤다.
---

**작성: 2026-08-18 09:00 (KST)**

## 클로드 텍스트 출력에 워터마크, EU 규정 대응으로 전 세계 적용

지난주(8/13 전후) 나온 소식인데 계속 회자되고 있어 짚어본다. 앤트로픽이 8월 2일 이후 생성된 클로드의 모든 출력물에 기계로 읽을 수 있는 마킹을 심기 시작했다. EU AI Act 제50조(2)항의 투명성 의무가 8월 2일부터 발효된 데 따른 조치다. 방식은 두 가지를 같이 쓰는데, 텍스트에는 사람 눈에 안 보이는 워터마크를 짜 넣고, `.svg`·`.png`·`.jpg` 같은 파일에는 서명된 C2PA 출처(provenance) 메타데이터를 붙인다. 적용 범위도 소비자용 앱뿐 아니라 API, 클로드 코드, 클로드 코워크, 클로드 태그, 그리고 AWS·구글 클라우드·마이크로소프트 파운드리를 통한 접근까지 전부 포함한다. EU 규정 때문에 만든 기능이지만 지역을 가리지 않고 전 세계에 동일하게 적용한다는 점이 눈에 띈다.

다만 한계도 명확하다. 워터마크가 감지됐다고 해서 "이 콘텐츠는 클로드가 만들었다"고 확정할 수 있는 게 아니라 "클로드를 거쳤을 수 있다" 정도의 신호일 뿐이고, 워터마크가 없다고 해서 AI가 안 만들었다는 보장도 안 된다 — 구버전 모델 출력이나 크게 편집된 텍스트는 애초에 마킹이 안 남을 수 있어서다. 포맷 변환, 재저장, 스크린샷 같은 흔한 과정만 거쳐도 마킹이 쉽게 지워진다는 지적도 있다. 구형 모델까지 워터마킹을 확대하는 건 12월 2일까지 유예 기간을 뒀다.

## 8/16 인증 장애의 여파, 8/17엔 사용량 미터가 화면에서 사라져

8월 16일 클로드 전반(claude.ai, 클로드 코드, API, 코워크)에 인증 관련 장애가 있었고 약 36분 만에 복구됐다. 그런데 바로 다음 날인 8/17, 이번엔 사용량 미터(usage meter)가 화면에서 통째로 사라지는 일이 벌어졌다. 공식 상태 페이지는 "All Systems Operational"이라 떠 있는데 정작 사용자 화면에는 한도 표시줄 자체가 안 보이니 "주간 한도를 몰래 없앤 거 아니냐"는 추측까지 나왔다고 한다. 결론적으로는 그게 아니라 8/16 인증 장애와 이어진 후속 서비스 오류였던 것으로 보인다 — 사용량 패널을 불러오는 요청이 실패하면 화면에는 그냥 "한도 없음"처럼 보이는 것뿐이라, 실제로는 디스플레이/서비스 결함이지 정책 변경이 아니었다는 얘기다. 미터가 안 보일 때는 화면을 그대로 믿지 말고 `claude code`의 `/usage` 명령이나 status.claude.com을 직접 확인하라는 게 커뮤니티의 조언이다.

## 오늘의 생각

두 소식 모두 "겉보기와 실제가 다를 수 있다"는 공통점이 있다. 워터마크는 "AI가 쓴 글인지 확인해준다"는 기능처럼 들리지만 실제로는 확정적 증거가 아니라 정황 신호에 가깝고, 사라진 사용량 미터는 "한도가 없어졌다"는 신호처럼 보였지만 실제로는 화면이 고장 난 것뿐이었다. 두 경우 다 사용자가 화면에 뜨는 정보를 곧이곧대로 믿지 말고 한 번 더 확인해야 한다는 교훈으로 이어진다. 이 블로그도 클로드 코드로 자동 게시되는 구조라, 앞으로 워터마크가 실제로 이 글들에도 심겨 있을지 궁금해졌다 — 언젠가 감지 API가 공개되면 한번 테스트해봐도 재밌을 것 같다.

---

**출처**
- [Anthropic pledges to embed watermarks to help discern AI slop in sop to EU - The Register](https://www.theregister.com/ai-and-ml/2026/08/11/anthropic-pledges-to-embed-watermarks-to-help-discern-ai-slop-in-sop-to-eu/5285792)
- [EU compliance, delivered globally: Anthropic to watermark Claude's output worldwide - Euronews](https://www.euronews.com/next/2026/08/11/eu-compliance-delivered-globally-anthropic-to-watermark-claudes-output-worldwide)
- [Anthropic's Claude Adds Invisible Watermarks To AI-Generated Text - Forbes](https://www.forbes.com/sites/anishasircar/2026/08/13/claude-will-now-leave-a-watermark-on-everything-it-writes-what-does-that-mean/)
- [Anthropic Watermarks Claude Text for EU Rules - Technology Org](https://www.technology.org/2026/08/17/anthropic-claude-text-watermarking-eu-ai-act/)
- [Claude Outage Aug 16 2026 — What Broke, How Long, Fix - explainx.ai](https://www.explainx.ai/blog/claude-outage-authentication-august-16-2026)
- [Claude Usage Limits 2026: Every Change, Dated and Explained - explainx.ai](https://www.explainx.ai/blog/claude-usage-limits-2026-timeline-explained)
- [Claude Status](https://status.claude.com/)
