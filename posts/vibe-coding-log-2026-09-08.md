---
title: "[바이브코딩 동향] 2026-09-08"
date: 2026-09-08
tags: [AI이슈]
excerpt: 스페이스X의 커서 인수 후폭풍으로 오픈AI가 11월 12일부로 커서에 대한 모델 공급을 끊겠다고 통보한 소식과, 지난주 클로드 신모델 3종(미토스·페이블 5.1, 오퍼스 5)과 클로드 코드까지 동시에 마비시킨 9월 3일 장애를 정리했다.
---

**작성: 2026-09-08 09:00 (KST)**

이번 주는 새 소식이라기보다 지난 소식들의 "후폭풍"을 정리하는 느낌이다. 지난달 다뤘던 스페이스X의 커서 인수가 오픈AI와의 관계 단절로 이어졌고, 지난주 초 있었던 클로드 장애 소식도 아직 이 블로그에서 짚지 않았던 것 같아 함께 정리한다.

## 오픈AI, 11월 12일부로 커서에 대한 모델 공급 끊는다

8월 29일 오픈AI가 스페이스X 쪽에 커서(정확히는 모기업 애니스피어)에 대한 자사 모델 공급 계약을 종료하겠다고 통보했다. 제안된 종료 시점은 11월 12일이고, 계약상 줄 수 있는 최대한의 유예 기간을 준 것이라고 밝혔다. 이유는 명확하다 — 일론 머스크 계열사들이 과거 계약 조건을 지키지 않은 전례가 있어서, 스페이스X가 오픈AI 모델을 서비스 약관 안에서 계속 쓸 거라고 신뢰하기 어렵다는 것이다. 지난달 스페이스X가 600억 달러에 커서를 인수하면서 사실상 예견됐던 결별이 실제로 통보서 형태로 날아온 셈이다. 커서 CEO 마이클 트루엘은 오픈AI 모델이 커서 전체 트래픽의 약 5%에 불과하다며 확전을 자제하는 분위기지만, 자기 회사를 인수한 곳과 모델을 대주던 곳이 서로 등을 돌리는 모양새를 코딩 도구 하나 쓰는 입장에서 지켜보는 것도 묘하다. 최종 종료일은 아직 확정이 아니라 "제안된" 날짜라는 단서가 붙어 있어서, 두 회사가 앞으로 몇 주 더 조율할 여지는 남아 있다.

## 클로드 신모델 3종 + 클로드 코드까지 동시에 마비된 9월 3일 장애

9월 3일 오전 9시 40분(미 동부시간)쯤부터 클로드 웹·API에서 오류율 상승, 응답 지연, 요청 실패가 동시다발로 보고됐다. 앤트로픽은 처음엔 미토스 5.1·페이블 5.1·오퍼스 5에서 문제가 발생했다고 공지했다가, 얼마 지나지 않아 영향 범위를 미토스/페이블 5, 오퍼스 4.8, 오퍼스 4.6까지 확대 공지했다. 발표한 지 이틀밖에 안 된 최신 모델들부터 구버전까지 한꺼번에 흔들린 셈이다. 클로드 코드로 몇 시간짜리 작업을 돌리던 개발자들의 작업이 중간에 끊겼다는 레딧 후기도 여럿 보였다. 다행히 영향은 태평양시간 오후 9시 16분(UTC 16시 16분) 기준으로 해소됐다고 한다. 8월 한 달 내내 크고 작은 장애가 이어졌던 걸 생각하면, 신모델 출시 직후에 또 한 번 터진 이번 장애가 인프라 확장 속도와 안정성 사이의 긴장을 여전히 보여주는 사례로 느껴진다.

## 오늘의 생각

두 소식을 나란히 보면 결국 "속도"의 대가에 대한 이야기 같다. 오픈AI-커서 결별은 빅테크들이 몸집을 급하게 불리는 인수합병 뒤에 실제로는 파트너십 정리라는 지루하고 정치적인 뒷정리가 남는다는 걸 보여주고, 클로드 장애는 신모델을 빠르게 찍어내는 속도가 안정성을 언제든 앞지를 수 있다는 걸 다시 보여준다. 개인 블로그 하나 굴리는 입장에서는 두 소식 다 남 일처럼 보이지만, 매일 쓰는 도구가 계약 협상 하나, 장애 하나에 갑자기 안 되는 경험을 이미 몇 번 해봤기 때문에 남 일 같지가 않다.

---

**출처**
- [Our decision on Cursor following its acquisition by SpaceX - OpenAI](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/)
- [OpenAI to end model access to Cursor after acquisition by Elon Musk's SpaceX - CNBC](https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html)
- [Cursor customers will lose access to OpenAI coding models in November - CIO](https://www.cio.com/article/4216508/cursor-customers-will-lose-access-to-openai-coding-models-in-november-2.html)
- [Anthropic confirms Claude is down, multiple models affected - BleepingComputer](https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-multiple-models-affected/)
- [Claude AI Faces Outage Impacting Mythos 5.1, Fable 5.1, and Opus 5 - Cyber Security News](https://cybersecuritynews.com/claude-ai-faces-outage/)
- [Is Claude down right now (September 3, 2026)? Outage status explored - Sportskeeda](https://tech.sportskeeda.com/laptops/news-is-claude-right-now-september-3-2026-outage-status-explored)
