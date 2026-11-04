---
title: "[바이브코딩 동향] 2026-11-04"
date: 2026-11-04
tags: [AI이슈]
excerpt: 커서(Cursor) 마켓플레이스에 올라온 가짜 클로드 코드 확장이 SSH 백도어를 심어 최대 5천 명이 노출된 사건과, 앤트로픽 상장(IPO)을 앞두고 드러난 3분기 매출 성장 둔화 및 방대한 컴퓨트 약정 규모를 정리했다.
---

**작성: 2026-11-04 09:00 (KST)**

오늘은 바이브코딩 생태계의 "신뢰" 문제를 건드리는 두 소식을 골랐다. 하나는 클로드 코드를 사칭한 악성 확장 프로그램이 퍼진 보안 사고고, 다른 하나는 앤트로픽이 상장을 앞두고 공개한 숫자들이 생각보다 복잡한 그림을 보여준다는 이야기다.

## 커서 마켓플레이스에서 가짜 "클로드 코드" 확장이 SSH 백도어를 심었다

블리핑컴퓨터, 소포스, 유어스토리 등 여러 매체에 따르면 지난 10월 29일, 코딩 에디터 커서(Cursor)의 확장 마켓플레이스에 앤트로픽의 공식 클로드 코드 확장을 사칭한 변조 버전(2.1.312~2.1.313)이 올라와 약 11시간 동안 배포됐다. 커서 측 발표로는 이 기간 동안 최대 5,000명의 사용자가 노출됐다고 한다. 문제의 확장은 설치만으로(별도 조작 없이) 실행되며 지속적인 SSH 백도어를 심어 공격자가 원격 접근을 유지하도록 설계되어 있었다. 다행히 윈도우·맥OS 환경에서는 관리자 권한이 없으면 백도어의 핵심 기능이 제대로 작동하지 않는 구현상의 오류가 있었다고 한다.

커서는 사건을 인지한 뒤 해당 버전을 내리고 마켓플레이스 전체를 임시로 닫아 다른 확장들도 전수조사했으며, 공격자가 쓰던 서버 접근을 차단하고 키를 교체한 뒤 재오픈했다. 조사 결과 다른 확장에서는 변조가 발견되지 않았다고 한다. 앤트로픽은 이 악성 확장을 자신들이 만들지 않았다고 밝혔고, 보도들도 클로드 코드 자체의 취약점이 악용된 게 아니라 커서 마켓플레이스에 가짜 패키지가 올라간 "변조·사칭" 사고라는 데 대체로 동의한다. 다만 공격자가 어떻게 앤트로픽 이름으로 패키지를 올릴 수 있었는지는 아직 명확히 설명되지 않았다. 영향을 받은 사용자는 정식 버전 2.1.314로 업데이트해야 하고, 단순 삭제만으로는 부족하며 공격자가 심은 SSH 키·지속성 스크립트까지 따로 제거해야 한다고 한다.

## 앤트로픽, 상장 앞두고 매출 성장 둔화와 막대한 컴퓨트 약정 규모 공개

앤트로픽의 기업공개(IPO) 준비 과정에서 나온 숫자들이 엇갈리는 해석을 낳고 있다. 포파위크엠비에이(FourWeekMBA)와 더넥스트웹 등은 앤트로픽이 투자자들에게 3분기(2026년 7~9월) 매출이 168억 달러를 기록했다고 전했다고 보도했는데, 이는 2분기(116억 달러) 대비 45% 성장한 수치로, 앞서 1~2분기의 세 자릿수 성장률과 비교하면 눈에 띄게 둔화된 속도다. 크립토브리핑에 따르면 같은 상장 서류에는 향후 서버·데이터센터·전력 등에 대한 지급 의무가 1~20년에 걸쳐 걸려 있는데, 확정된 최소 지급 의무만 약 4,170억 달러이고 2028~2031년 예상 용량 비용까지 더하면 전체 규모가 거의 9,000억 달러에 이를 수 있다고 전했다. 다만 이 "9,000억 달러"는 확정 채무가 아니라 예상치를 포함한 상한선에 가까운 숫자라, 매체마다 인용하는 "약정 규모"가 2,000억대부터 9,000억대까지 꽤 다르게 보도되고 있다는 점은 감안해서 봐야 한다.

## 오늘의 생각

두 소식을 같이 놓고 보면, 바이브코딩 생태계가 커지는 속도만큼 "이게 진짜 믿을 만한가"를 따지는 일도 늘고 있다는 느낌이다. 확장 마켓플레이스에서는 이름만 보고 설치했다가 백도어를 들이는 사고가 나고, 투자 서류에서는 같은 회사의 성장세와 비용 구조를 두고도 매체마다 다른 숫자를 강조한다. 바이브코딩을 하는 입장에서도 "어디서 받았는지", "숫자가 어느 출처에서 나왔는지"를 한 번 더 확인하는 습관이 점점 더 필요해지는 것 같다.

---

**출처**
- [Malicious Claude Code extension on Cursor planted SSH backdoors - BleepingComputer](https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/)
- [Malicious Claude Code extension distributed through Cursor marketplace - Sophos](https://www.sophos.com/en-us/blog/malicious-claude-code-extension-distributed-through-cursor-marketplace)
- [Cursor warns of malicious extension affecting up to 5,000 users - YourStory](https://yourstory.com/ai-story/cursor-warns-of-malicious-extension-affecting-up-to-5000-users)
- [Cursor Discloses Tampered Claude Code Add-On Hit Up to 5,000 - FourWeekMBA](https://fourweekmba.com/ai-cursor-discloses-tampered-claude-code-add-on-hit-up-to-5000/)
- [Anthropic Tells Investors Q3 Revenue Rose 45% to $16.8B - FourWeekMBA](https://fourweekmba.com/ai-anthropic-tells-investors-q3-revenue-rose-45-to-16-8b/)
- [Anthropic tells investors Q3 revenue reached $16.8bn, FT reports - TheNextWeb](https://thenextweb.com/news/anthropic-q3-revenue-16-8bn-ipo)
- [Anthropic reveals nearly $900 billion in future commitments in IPO filing - Crypto Briefing](https://cryptobriefing.com/anthropic-ipo-filing-900-billion-commitments/)
