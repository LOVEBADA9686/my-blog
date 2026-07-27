---
title: "[바이브코딩 동향] 2026-07-27"
date: 2026-07-27
tags: [AI이슈]
excerpt: 오늘 오픈 가중치가 전면 공개된 문샷AI의 2.8조 파라미터 모델 Kimi K3와, 출시 일주일 만에 엇갈린 사용 후기와 함께 논란이 된 Claude Opus 5 정부 레드팀 테스트 결과를 정리했다.
---

**작성: 2026-07-27 09:00 (KST)**

지난주 코딩 아레나에서 Claude Fable 5를 제쳤다고 소개했던 중국 문샷AI의 Kimi K3가 오늘 드디어 가중치를 통째로 공개했다. 여기에 지난 목요일 나온 Claude Opus 5도 출시 일주일이 지나면서 후기와 뒷이야기가 쌓이고 있길래 함께 정리한다.

## Kimi K3, 오늘 "세계에서 가장 큰 오픈소스 모델" 가중치 공개

Kimi K3는 API 형태로는 지난 7월 16일부터 써볼 수 있었지만, 오늘(7/27) 전체 모델 가중치가 오픈소스로 풀렸다. 문샷AI는 이를 두고 "지금까지 나온 오픈소스 모델 중 가장 크다"고 자평한다. 파라미터 수는 2.8조 개인데, 하이브리드 선형 어텐션 방식인 Kimi Delta Attention(KDA)과 Attention Residuals 구조 덕분에 896개 전문가(expert) 중 토큰당 16개만 활성화된다 — 실제 연산량은 약 500억 활성 파라미터 수준으로, 숫자만큼 무겁게 돌아가진 않는다는 뜻이다. 다만 4비트(MXFP4) 정밀도로 압축해도 가중치를 올리는 데만 1.4테라바이트짜리 메모리가 필요해서, 개인이 로컬로 돌리기는 사실상 불가능하다. 네이티브 비주얼 이해와 100만 토큰 컨텍스트를 지원하고, 공개 시점도 상하이에서 열리는 세계인공지능대회(WAIC) 직전으로 맞춘 걸 보면 상징성을 꽤 신경 쓴 타이밍이다. 지난 7/21 글에서 다뤘던 "프론트엔드 코딩 아레나 1위" 성적과 겹쳐서 보면, 오픈소스 코딩 모델이 벤치마크 1등을 넘어 "가중치까지 다 풀어버리는" 단계로 넘어가는 흐름이 보인다.

## Claude Opus 5, 출시 일주일 — 반응은 엇갈리고 안전성 카드는 논란

Opus 5는 나오자마자 해커뉴스에서 1,378포인트·746개 댓글을 찍을 정도로 화제였는데, 막상 일주일 써본 후기는 결이 갈린다. 뉴스레터 Every의 "Vibe Check" 리뷰는 실제 작업에서 지시에 반박하거나 마무리 전에 멈춰버리는 등 기존에 쓰던 스킬·플러그인과 궁합이 안 좋았다고 지적했다. 반면 기업 쪽 반응은 후하다. Devin을 만드는 Cognition의 CEO Scott Wu는 어려운 버그의 근본 원인 분석에서 인상적이었다고 했고, Zapier CEO Wade Foster는 자체 AutomationBench에서 이전 모델은 통과하지 못했던 전체 워크플로를 Opus 5가 토큰을 더 쓰지 않고도 100% 처리했다고 밝혔다. JetBrains AI 총괄 Denis Shiryaev도 코드를 쓰기 전에 스스로 논리적 허점을 잡아내는 점을 좋게 평가했다.

같은 날 공개된 시스템 카드는 조금 더 무거운 이야기를 담고 있다. 영국 AI안전연구소(AISI)가 표준 수준(강화되지 않은) 보안의 시뮬레이션 기업망을 대상으로 테스트한 결과, Opus 5가 10번 중 8번 공격을 처음부터 끝까지 완료했다고 한다 — Mythos 5·Mythos Preview와 비슷한 능력 등급이라는 평가다. 다만 같은 카드에서 자동화된 행동 감사(behavioral audit) 상 misalignment 점수는 지금까지 나온 모델 중 가장 낮았다고 하니, "더 잘 뚫지만 더 안전하게 정렬돼 있다"는 다소 모순적인 그림이 함께 제시된 셈이다.

## 오늘의 생각

두 소식을 나란히 보면, "공개"의 방향이 서로 반대라는 게 흥미롭다. Kimi K3는 가중치까지 다 열어서 누구나 뜯어볼 수 있게 했고, Opus 5는 API 뒤에 감춘 채로 능력치(공격 성공률까지)를 시스템 카드라는 문서로만 투명하게 알려준다. 어느 쪽이 더 안전한 공개 방식인지는 아직 답이 없는 것 같다. 다만 개발자 입장에서는 "체감 후기"와 "벤치마크·안전성 문서"가 항상 같은 그림을 그리지 않는다는 걸 이번 주에 다시 확인한 느낌이다.

---

**출처**
- [China's Moonshot AI releases Kimi K3, the largest open-source model ever, rivaling top U.S. systems - VentureBeat](https://venturebeat.com/technology/chinas-moonshot-ai-releases-kimi-k3-the-largest-open-source-model-ever-rivaling-top-u-s-systems)
- [Kimi K3's open weights arrive July 27. The catch is 1.4TB - TECHi](https://www.techi.com/kimi-k3-open-weights-inference-economics/)
- [Vibe Check: Claude Opus 5 Is Brilliant in Flashes, Frustrating in Practice - Every](https://every.to/vibe-check/opus-5)
- [Claude Opus 5: The Everyday Frontier Model Claude Code Teams Asked For - Claude AI Dev](https://claudeai.dev/blog/claude-opus-5-community-feedback/)
- [Claude Opus 5 Hacked Enterprise Networks in 8 of 10 Government Tests, Safety Card Shows - Tech Times](https://www.techtimes.com/articles/321549/20260725/claude-opus-5-hacked-enterprise-networks-8-10-government-tests-safety-card-shows.htm)
- [Introducing Claude Opus 5 - Anthropic](https://www.anthropic.com/news/claude-opus-5)
