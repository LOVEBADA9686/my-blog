---
title: "[바이브코딩 동향] 2026-11-02"
date: 2026-11-02
tags: [AI이슈]
excerpt: 클로드 코드가 특정 게임을 그대로 재현하는 작업을 막는 규칙을 추가해 의도치 않은 작업까지 막혔다는 불만이 나온 소식과, 클로드 오퍼스 5.5로 만든 무료 어도비 클론 7종이 일주일여 만에 스타 4만 개를 넘기며 저작권 논쟁을 부른 소식을 정리했다.
---

**작성: 2026-11-02 09:00 (KST)**

이번 주에는 같은 모델이 양쪽에서 저작권 이슈에 걸린 소식이 눈에 띄었다. 한쪽은 앤트로픽이 자기 제품(클로드 코드)에 "특정 게임을 그대로 베끼지 말라"는 규칙을 심은 이야기고, 다른 쪽은 그 클로드로 누군가가 어도비 제품군을 통째로 흉내 낸 무료 앱을 만들어 스타를 쓸어 담은 이야기다.

## 클로드 코드, "그 게임 그대로는 안 돼"... 그런데 선의의 작업까지 막힌다

지난 10월 27일, X(옛 트위터) 사용자 Chasm이 클로드 코드의 내부 규칙 목록("tengu_heron_brook"이라는 이름의 항목)에 새로운 조항이 추가된 걸 발견해 공개했다. 내용은 오퍼스 5.5 모델이 특정한 기존 게임을 그대로 재현하는 작업을 거절하도록 유도한다는 것이다. PC게이머, 톰스하드웨어, 게임데벨로퍼 등 게임·테크 매체들의 후속 보도에 따르면, 앤트로픽은 이 변경을 실제로 확인했고 "클로드를 이용해 타인의 지적재산권을 침해하는 건 자사 이용 정책 위반이기 때문에, 오퍼스 5.5의 프롬프트에 특정 게임 재현을 지양하도록 두 문장을 추가했다"는 취지로 설명했다고 한다. 최근 몇 주간 스팀에 AI가 찍어낸 듯한 게임("AI 슬롭")이 쏟아진 데 대한 대응으로 보인다는 분석도 있다.

문제는 이 규칙이 생각보다 거칠게 작동한다는 점이다. 오리지널 게임이나 사용자가 직접 설계한 게임은 영향받지 않는다고 하지만, 레딧과 X에는 게임 제작과 전혀 무관한 작업—이를테면 크래시 덤프 분석 같은 디버깅 요청—까지 거절당했다는 제보가 올라왔다. 게다가 Chasm에 따르면 이 규칙은 설정에서 끌 수 있는 옵션도 없다. 톰스하드웨어는 공개된 규칙 문구가 실제 내부 텍스트와 정확히 일치하는지까지는 확인되지 않았다고 선을 그었지만, 변경 자체가 있었다는 점은 여러 매체가 공통으로 확인했다.

## 오퍼스 5.5로 찍어낸 무료 어도비 클론 7종, 일주일 만에 스타 4만 개

한편 ArtCraft라는 1인 스튜디오를 운영하는 개발자 Brandon Thomas는 클로드 오퍼스 5.5로 작성했다는 Rust 기반 오픈소스 앱 7종을 깃허브에 공개했다. 포토샵을 겨냥한 PhotoCraft, 라이트룸을 겨냥한 LightCraft를 포함해 일러스트레이터·프리미어·애프터이펙트·인디자인·아크로뱃까지 어도비 주요 제품 라인업을 거의 통째로 겨냥한 구성이다. 라이선스는 MIT 또는 Apache 2.0 중 선택 가능. 포토워크아웃 등의 보도에 따르면 공개 후 약 일주일여 만에 7개 저장소 합산 스타가 4만 2천 개를 넘었고, 그중 PhotoCraft 하나만 2만 3천 개를 넘었다고 한다.

LightCraft는 톤 커브, 8단계 컬러 믹서, 컬러 그레이딩 휠, 프리셋, AI 기반 하늘/인물/배경 마스킹 같은 기능을 갖췄다는데, 실제 품질 평가는 엇갈린다. 한 사진 커뮤니티 이용자는 "라이트룸이랑 전혀 안 닮았다"고 혹평했고, 다른 이용자는 포토샵 클론 쪽은 "꽤 그럴듯하게 돌아간다"고 평했다. 개발자 본인도 "아직 거친 알파 단계"라고 인정한 상태다. 더 민감한 지점은 "어도비 코드를 베낀 게 아니라 깨끗하게 처음부터 다시 짰다"는 개발자 측 주장인데, 이걸 그대로 믿을지, 아니면 리버스 엔지니어링에 가까운 작업으로 볼지를 두고 커뮤니티 반응이 갈리고 있다. 독일어·스페인어권 보도에서는 인터페이스 유사성 때문에 법적 리스크가 있다는 지적도 함께 나왔다.

## 오늘의 생각

두 소식을 나란히 보면 아이러니가 느껴진다. 앤트로픽은 자사 제품이 남의 게임을 그대로 베끼는 데 쓰이는 걸 막으려고 프롬프트에 문장을 추가했는데, 같은 모델로 누군가는 세계적인 소프트웨어 회사의 주력 제품군을 거의 통째로 흉내 낸 앱을 만들어 큰 인기를 얻었다. "게임 하나 베끼는 건 막겠다"는 좁은 규칙과, "소프트웨어 제품군 전체의 UI·기능을 재현하는 건 괜찮은가"라는 훨씬 큰 질문 사이의 간극이 꽤 크게 느껴진다. 바이브코딩으로 뭔가를 빠르게 만들어낼 수 있는 시대일수록, "이게 법적으로 괜찮은가"를 판단하는 기준은 오히려 모델 제공사의 프롬프트 몇 줄보다 사람의 몫으로 남는다는 생각이 든다.

---

**출처**
- [Anthropic updates Claude to 'steer it away' from letting users clone games following weeks of Steam being inundated with AI slop - PC Gamer](https://www.pcgamer.com/gaming-industry/anthropic-updates-claude-to-steer-it-away-from-letting-users-clone-games-following-weeks-of-steam-being-inundated-with-ai-slop/)
- [Anthropic's Claude AI blocks video game cloning and reverse-engineering — sweeping new restrictions also hit legitimate developers - Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-ai-model-is-now-blocking-attempts-at-video-game-recreation-and-cloning-users-also-claim-non-malicious-generic-reverse-engineering-tasks-are-blocked)
- [Anthropic orders AI tool Claude to stop remaking video games - Game Developer](https://www.gamedeveloper.com/programming/anthropic-appears-to-have-ordered-ai-tool-claude-to-stop-remaking-video-games)
- [Someone 'Vibe-Coded' Free Photoshop and Lightroom Clones. Here's What It Means for Adobe - PhotoWorkout](https://www.photoworkout.com/vibe-coded-adobe-clones/)
- [Developer Releases Seven Free Adobe Clones Built With Claude Opus 5.5 - Pasquale Pillitteri](https://pasqualepillitteri.it/en/news/21619/free-adobe-clones-artcraft-claude-opus-5-5)
