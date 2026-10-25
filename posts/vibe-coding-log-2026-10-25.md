---
title: "[바이브코딩 동향] 2026-10-25"
date: 2026-10-25
tags: [AI이슈]
excerpt: 에픽게임즈가 새 런처를 "프로그래밍은 어렵다"며 바이브코딩으로 새로 짰고, 디즈니 슈팅 게임 팀에는 클로드를 쓰라고 지시했다는 소식. 사람들은 클로드 코드로 스마트TV 광고를 지우고, 남아공에서는 AI가 만든 사이트가 6일 만에 뚫렸다.
---

**작성: 2026-10-25 09:00 (KST)**

오늘은 바이브코딩이 실제로 어디까지 들어왔는지 보여주는 소식 세 개를 모았다. 대형 게임사의 런처부터 거실 TV, 그리고 해킹당한 웹사이트까지, 체감되는 범위가 꽤 넓어졌다.

## 에픽게임즈, "프로그래밍은 어렵다"며 런처를 바이브코딩으로 새로 만들었다

에픽게임즈가 지난 10월 14일, 윈도우·맥·(처음으로) 리눅스용 새 런처 프리뷰를 공개하면서 이걸 "바이브코딩"했다고 밝혔다. 담당자 마틴 킬리는 "처음부터 새로 시작했다"고 했고, 콜드 스타트 기준으로 평균 5.47초가 걸려 스팀보다 46% 빠르다고 주장한다. 다만 어떤 AI 툴을 얼마나 썼는지는 구체적으로 공개하지 않았다. 흥미로운 건 비슷한 시기에 블룸버그가 보도한 다른 이야기다. 디즈니와 협업하던 슈팅 게임 프로젝트가 지연되자, 에픽이 해당 팀에 "AI 퍼스트"로 전환하라고 지시했고 앤트로픽의 클로드 같은 도구로 코드와 아트를 생성하게 했다는 내용이다. 런처는 공식적으로 "바이브코딩"이라 자랑하고, 게임 개발 쪽은 조용히 클로드를 끌어다 쓰고 있는 셈이라 대비가 묘했다.

## 클로드 코드로 스마트TV 광고를 지우는 사람들

요즘 레딧과 깃허브에서는 클로드 코드로 스마트TV의 광고와 트래커를 지우는 게 유행이다. 시작은 한 개발자(Gathin T.)가 넷플릭스를 켤 때마다 광고가 뜨는 샤오미 TV 모델명만 던져줬더니, 클로드 코드가 같은 와이파이에 있는 TV를 찾아내 불필요한 소프트웨어 패키지 25개를 끄고 새 홈 화면까지 만들어준 사건이었다. 이 원리를 정리한 CleanYourTV 프로젝트는 안드로이드 디버그 브리지(ADB)로 패키지를 삭제하지 않고 비활성화만 하기 때문에 복원 스크립트로 되돌릴 수 있고, 현재 37개 브랜드 107개 모델의 테스트 결과를 올려두고 있다. 비슷한 DumbTV 프로젝트는 딥시크 V4.1 플래시와 클로드 오퍼스 5.5, 클로드 소네트 5.5를 섞어 썼다고 한다. 다만 결과가 늘 좋지는 않아서, TV가 완전히 먹통이 되거나 설치가 중간에 멈췄다는 후기도 꽤 있다. 애초에 이런 TV들이 자동 콘텐츠 인식(ACR)으로 시청 데이터를 모아 광고에 쓰기 때문에 나오는 반발인데, 텍사스주가 작년 12월 삼성·소니·LG·하이센스·TCL을 상대로 관련 소송을 건 것도 같은 맥락이다.

## 남아공에서는 AI가 만든 사이트가 6일 만에 뚫렸다

반대 사례도 있다. 남아프리카공화국의 한 업체가 AI 툴로 웹사이트를 만들어 오픈했는데, 6일 만에 해킹당했다. 도메인 등록업체 Domains.co.za의 CEO에 따르면 AI가 사이트 코드 안에 관리자 비밀번호를 그대로 노출해뒀던 게 원인이라고 한다. 빠르게 만들어주는 것과 안전하게 만들어주는 것은 다른 얘기라는 걸 다시 보여준 사례다.

## 오늘의 생각

세 소식을 나란히 놓으니 바이브코딩이 "장난감 수준"을 넘어 실제 제품(게임 런처), 생활 기기(TV), 비즈니스 자산(웹사이트)까지 침투했다는 게 느껴진다. 그런데 속도는 확실히 빨라졌는데 검증은 여전히 사람 몫이라는 패턴이 세 사례 모두에 깔려 있다. 에픽은 성과를 자랑하면서도 AI 사용 범위는 구체적으로 밝히지 않았고, TV 광고 제거는 성공과 먹통 사례가 뒤섞여 있고, 남아공 사례는 검증 없이 바로 배포했다가 비밀번호가 그대로 노출됐다. "AI가 만들어줬다"는 말이 "검증까지 끝났다"는 뜻은 아니라는 걸 계속 되새겨야 할 듯하다.

---

**출처**
- [Epic says it vibe coded its new launcher because 'programming is hard' - TheNextWeb](https://thenextweb.com/news/epic-games-launcher-vibe-coded-ai-pivot-fortnite-linux)
- [Epic says its new 'vibe coded' Epic Games Store launcher is faster than Steam - PCGamer](https://www.pcgamer.com/software/platforms/epic-says-its-new-vibe-coded-epic-games-store-launcher-is-faster-than-steam/)
- [Epic Games says it vibe coded new launcher because "programming is hard" - Dexerto](https://dexerto.com/gaming/epic-games-says-it-vibe-coded-new-launcher-because-programming-is-hard-3418874)
- [Developers use Claude Code to make smart TVs dumb again - AIWeekly](https://aiweekly.co/alerts/developers-use-claude-code-to-make-smart-tvs-dumb-again)
- [People Are Vibe Coding the Ads Out of Their Smart TVs: Here's How - Decrypt](https://decrypt.co/381456/vibe-coding-ads-out-smart-tvs-heres-how)
- [AI-Built Website Hacked Six Days After Launch, Highlighting 'Vibe Coding' Risks in South Africa - iAfrica.com](https://iafrica.com/ai-built-website-hacked-six-days-after-launch-highlighting-vibe-coding-risks-in-south-africa/)
