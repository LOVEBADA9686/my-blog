---
title: "[바이브코딩 동향] 2026-09-06"
date: 2026-09-06
tags: [AI이슈]
excerpt: 클로드 코드가 2.1.261로 올라가며 /skill-doctor와 조직 정책 진단이 추가됐고, 앤트로픽은 클로드 에이전트를 동원해 페르마의 마지막 정리를 11일 만에 Lean으로 완전히 형식화했다. 여기에 IPO 일정이 10월 중순으로 밀렸다는 소식과 "AI 코드는 매일 쓰지만 못 믿는다"는 통계까지 정리.
---

**작성: 2026-09-06 09:00 (KST)**

오늘은 클로드 코드의 소소한 업데이트 하나, 수학계를 놀라게 한 큼직한 연구 소식 하나, 그리고 앤트로픽 IPO 일정 변경까지 세 가지를 묶어본다. 마지막에는 요즘 계속 신경 쓰이는 "다들 AI로 코딩은 하는데 믿지는 않는다"는 통계도 짚고 넘어가려 한다.

## Claude Code 2.1.261 — /skill-doctor로 내 스킬 다이어트하기

9월 4일 나온 2.1.261은 67개 변경 중 46개가 버그 수정일 정도로 조용한 유지보수 릴리스에 가깝다. 그래도 눈에 띄는 기능이 하나 있는데, 바로 `/skill-doctor`다. 로드는 됐지만 실제로는 안 쓰이는 스킬이 뭔지, 그게 컨텍스트를 얼마나 잡아먹고 있는지 보여줘서 정리할 수 있게 해준다. 스킬을 이것저것 켜놓고 잊어버리는 나 같은 사람한테는 꽤 반가운 기능이다.

그 외에도 조직 정책이 왜 로드되지 못했는지(예: 프록시가 엔드포인트를 못 넘겨줄 때) `/status`와 `claude doctor`에 표시해주는 기능, 명령어/백그라운드 출력이 파일로 빠지기 전에 인라인으로 유지되는 한도를 128K자까지 늘려주는 설정, 그리고 프롬프트 입력 시 단어 삭제 단축키가 Bash와 동일하게 맞춰진 것(Ctrl+W는 공백까지 삭제, Alt+F/Alt+D는 단어 끝에서 멈춤) 정도가 이번 릴리스의 나머지 변경점이다.

## 클로드가 11일 만에 폐르마의 마지막 정리를 통째로 증명했다

이번 주 가장 놀라웠던 소식은 이거다. 앤트로픽이 콜롬비아대 티안이 펑 등이 만든 협업 수학 형식화 플랫폼 Prove2Me 위에서, 클로드 에이전트 여러 개를 동원해 페르마의 마지막 정리(FLT)의 앤드투앤드 증명을 Lean 4 언어로 완전히 형식화했다고 발표했다. 결과물은 1,300만 줄이 넘는 코드와 새로 만들어진 29,500개의 정리로, Lean의 메인 수학 라이브러리(Mathlib)보다 다섯 배 넘게 큰 규모다.

더 놀라운 건 사람의 개입이 정말 적었다는 점이다. 티안이 "야코비안을 스킴으로 다루는 게 우선순위 높아 보인다", "마주르 정리부터 빨리 끝내자" 같은 고수준 지시만 가끔 던졌고, 나머지는 클로드가 largely autonomously 진행했다고 한다. 원래 수학자들은 와일스의 원본 증명을 형식화하는 데만 몇 년이 걸릴 거라 예상했었는데, 그걸 11일로 줄여버린 셈이다. Lean 커뮤니티에서 FLT 형식화 프로젝트를 오래 이끌어온 케빈 버자드도 자기 블로그에 "앤트로픽이 나를 앞질렀다"는 제목으로 글을 남길 정도였다.

## 앤트로픽 IPO, 10월 중순으로 순연

한편 비즈니스 쪽 소식도 있다. 앤트로픽이 애초 다음 주쯤 IPO 상장 신고서를 공개할 것으로 예상됐지만, 실제 공개는 9월 말로, 로드쇼 시작은 10월 중순으로 밀렸다고 한다. 최종 상장일은 11월 미국 중간선거 며칠 전이 될 가능성이 거론된다. 이번 개정안 기준 밸류에이션은 최대 2조 달러 수준까지 거론되고 있고, 모건스탠리·골드만삭스 등이 참여하는 1,500억 달러 규모의 리볼빙 신용 한도도 별도로 마무리 중이라고 한다. 몇 주 전만 해도 "이제 앤트로픽을 신뢰한다"던 백악관發 훈풍 기사를 다뤘었는데, 정작 실무 일정은 계속 뒤로 밀리는 모습이다.

## 오늘의 생각

같은 주에 "클로드가 수학계 난제를 11일 만에 증명했다"는 소식과 "개발자 92%가 AI 코딩 도구를 매일 쓰지만 그 코드를 신뢰하는 비율은 29%뿐"이라는 통계(Keyhole Software의 2026년 바이브코딩 트렌드 리포트)를 나란히 보게 됐다. 모델의 능력치는 이미 인간 전문가 팀이 몇 년 걸릴 일을 며칠로 줄이는 수준까지 왔는데, 정작 현장에서는 그 결과물을 얼마나 검증하고 신뢰할지에 대한 체계가 못 따라가고 있다는 뜻 같다. FLT 증명도 결국 Lean 컴파일러가 한 줄 한 줄 형식적으로 검증해줬기 때문에 "믿을 수 있는" 결과가 된 거지, 그런 검증 장치 없이 그냥 나온 코드였다면 이야기가 많이 달랐을 것 같다. 혼자 블로그 코드 짜면서도 "이거 진짜 맞나" 하고 한 번 더 읽어보게 되는 이유가 이런 데 있는 듯하다.

---

**출처**
- [Claude Code v2.1.261 Major Updates - Addition of /skill-doctor and Bash-compliant Word Editing Keys - DevelopersIO](https://dev.classmethod.jp/en/articles/20260905-cc-updates-v2-1-261/)
- [Release v2.1.261 · anthropics/claude-code](https://github.com/anthropics/claude-code/releases/tag/v2.1.261)
- [Formalizing Fermat's Last Theorem - Anthropic](https://www.anthropic.com/research/formalizing-fermats-last-theorem)
- [Anthropic uses Claude to formalize proof of Fermat's Last Theorem - SiliconANGLE](https://siliconangle.com/2026/09/04/anthropic-uses-claude-to-formalize-proof-of-fermats-last-theorem/)
- [FLT: Anthropic has beaten me to it - Xena Project](https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/)
- [Anthropic pushes back IPO timeline, eyes mid-October launch - The Tribune](https://www.tribuneindia.com/news/business/anthropic-pushes-back-ipo-timeline-eyes-mid-october-launch/)
- [Anthropic's IPO delayed to mid-October, targeting $2 trillion valuation - KuCoin](https://www.kucoin.com/news/flash/anthropic-ipo-delayed-to-mid-october-aiming-for-2-trillion-valuation)
- [Vibe Coding Trends 2026: Adoption, Productivity, and Code Quality Data - Keyhole Software](https://keyholesoftware.com/vibe-coding-trends-2026/)
