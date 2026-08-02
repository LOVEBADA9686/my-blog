---
title: "[바이브코딩 동향] 2026-08-02"
date: 2026-08-02
tags: [AI이슈]
excerpt: 클로드 페이블 5의 100달러 크레딧 신청이 오늘 마감되고, 사흘 뒤인 8월 5일에는 오퍼스 4.1이 API에서 완전히 은퇴한다. 클로드 요금제를 쓰는 바이브코더라면 오늘 꼭 챙겨야 할 두 가지 마감을 정리했다.
---

**작성: 2026-08-02 09:00 (KST)**

지난 며칠은 큰 사건보다는 "마감일"이 눈에 띄는 한 주였다. 클로드 요금제나 API를 굴리고 있다면 오늘과 이번 주 안에 놓치면 아까운 일정이 두 개 겹쳐 있어서, 오늘은 그 두 가지를 정리해본다.

## 클로드 페이블 5, 100달러 무료 크레딧 신청이 오늘 마감

7월 20일부터 클로드 페이블 5가 Max·Team Premium 요금제에는 주간 한도의 50%까지 포함되는 대신, Pro와 Team Standard 사용자는 사용량 기반 크레딧 결제로 넘어갔다. 이 전환에 따른 보상으로 Pro/Team Standard 사용자에게 한 번에 한해 100달러 크레딧을 주는데, 이 크레딧을 신청할 수 있는 기간이 7월 20일부터 오늘 8월 2일까지다. 신청 자체는 설정(Settings) → 사용량(Usage) 메뉴에서 결제 수단을 등록하고 크레딧을 활성화하면 되는 간단한 절차인데, 문제는 신청 기한을 넘기면 아예 못 받는다는 점이다. 참고로 신청만 해두면 실제 사용 여부와 무관하게 크레딧 잔액은 9월 17일 밤 11시 59분(태평양시간)에 자동 소멸된다. Pro 요금제로 페이블 5를 가끔이라도 써본 적 있다면 오늘 안에 설정 페이지부터 확인해볼 만하다.

## 클로드 오퍼스 4.1, 8월 5일 API에서 완전히 퇴역

6월 5일 사용 중단 예고가 나갔던 클로드 오퍼스 4.1(claude-opus-4-1-20250805)의 API 퇴역일이 사흘 뒤인 8월 5일로 다가왔다. 예고부터 퇴역까지 정확히 60일을 준 셈인데, 이 날짜가 지나면 해당 모델을 호출하는 요청은 전부 에러를 반환한다. 앤트로픽 공식 모델 퇴역 페이지에서 권장하는 마이그레이션 대상은 오퍼스 4.8이다. Claude Code나 자체 에이전트 파이프라인에서 모델 ID를 하드코딩해둔 프로젝트가 있다면, 오늘 중으로 grep 한 번 돌려서 `claude-opus-4-1`이 남아있는 곳이 있는지 확인해두는 게 안전하다. 특히 fallbackModel 체인 맨 끝에 구모델을 박아둔 설정이 은근히 잘 안 보이는 곳에 남아있곤 한다.

## 오늘의 생각

두 소식 다 "몰라서" 놓치는 손해라는 공통점이 있다. 100달러 크레딧은 안 챙기면 그냥 사라지는 돈이고, 오퍼스 4.1 하드코딩은 안 고치면 8월 5일 이후로 배포가 조용히 깨지는 방식이라 더 무섭다. 이번 달처럼 소닛 5 프로모션 가격 종료(8/31)에 오퍼스 4.1 퇴역(8/5), 페이블 5 크레딧 마감(8/2)까지 겹치는 시기에는, 클로드를 API로 붙여 쓰는 프로젝트일수록 한 달에 한 번은 설정 페이지와 사용 중인 모델 ID 목록을 점검하는 루틴이 필요하겠다는 생각이 든다. 이 블로그의 write.html에서도 모델 이름을 직접 지정하는 곳은 없는지 조만간 한 번 확인해봐야겠다.

---

**출처**
- [Redeploying Claude Fable 5 - Anthropic](https://www.anthropic.com/news/redeploying-fable-5)
- [Claude Fable 5 Now Needs Usage Credits, But Pro Users Get $100 Free](https://nerdzap.com/news/claude-fable-5-pro-100-credit-usage-billing/)
- [Model deprecations - Claude Platform Docs](https://platform.claude.com/docs/en/about-claude/model-deprecations)
- [Claude Opus 4.1 Deprecation: Anthropic August 5 Migration Guide for Router Teams](https://therouter.ai/news/anthropic-deprecates-claude-opus-4-1-august-5-migration-guide/)
