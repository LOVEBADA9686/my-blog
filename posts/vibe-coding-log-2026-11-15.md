---
title: "[바이브코딩 동향] 2026-11-15"
date: 2026-11-15
tags: [AI이슈]
excerpt: 클로드 코드 v2.1.321이 Fable 5.2를 기본 모델로 올리며 MCP OAuth 토큰 유출, 샌드박스 우회 버그를 고쳤고, 앤트로픽은 은행에 보낸 IPO 공모가 자료를 "부정확했다"며 철회했다. 한편 어도비는 MAX 2026에서 자체 바이브코딩 도구 Firefly Builder를 내놓으며 반대 흐름도 보여줬다.
---

**작성: 2026-11-15 09:00 (KST)**

오늘은 세 갈래 소식을 묶었다. 클로드 코드 자체의 새 릴리스, 앤트로픽 IPO를 둘러싼 뜻밖의 "철회" 사건, 그리고 바이브코딩이 어도비 같은 대기업 안으로까지 흡수되는 모습이다.

## 클로드 코드 v2.1.321 — Fable 5.2가 기본 모델로, 보안 패치도 두 건

이번 주 공개된 v2.1.321의 핵심은 두 가지다. 먼저 Fable 라인의 신모델인 Claude Fable 5.2(`claude-fable-5-2`)가 기본 Fable 모델로 올라왔다. 100만 토큰 컨텍스트를 지원하고, 가격은 입력 100만 토큰당 8달러, 출력 100만 토큰당 40달러, 캐시 읽기는 0.2달러로 안내됐다.

더 눈에 띄는 건 보안 쪽 수정이다. MCP 서버의 OAuth 리다이렉트 과정에서 리프레시 토큰 등 민감 정보가 의도치 않게 다른 호스트로 전송될 수 있던 문제가 고쳐졌고, 원래 승인 없이 돌아가야 할 "읽기 전용" Bash 명령이 샌드박스 바깥에서 권한 확인 없이 실행되던 버그도 함께 패치됐다. 바로 전 버전인 v2.1.320은 npm 배포 기록이나 공식 체인지로그 어디에도 등장하지 않아, 내부적으로 스킵된 것으로 보인다는 분석도 있었다.

개인적으로는 모델 업그레이드보다 이 보안 패치 두 건이 더 와닿는다. 에이전트가 파일을 읽고 쓰고 외부 MCP 서버와 통신하는 범위가 넓어질수록, "읽기 전용이라 안전하다"고 믿었던 경로에서 실제로는 샌드박스를 빠져나갈 수 있었다는 식의 구멍이 하나씩 발견되는 흐름 같다.

## 앤트로픽, 은행에 보낸 IPO 공모가 자료를 "부정확했다"며 철회

어제까지 이 블로그에서 다룬 앤트로픽 IPO는 "11월 18일 가격 확정, 19일 나스닥 거래 시작"으로 꽤 구체화된 그림이었는데, 오늘은 거기에 변수가 하나 끼어들었다. 로이터가 입수한 이메일을 인용한 보도에 따르면 앤트로픽이 투자은행들에 약 8억6700만 주를 주당 70~80달러에 발행한다는 내용의 자료를 보냈다가, 이후 해당 수치가 "부정확했다"며 철회했다고 한다. 회사는 구체적인 논평을 거부했고, AMD·브로드컴·구글·마이크론·마이크로소프트·엔비디아·TSMC가 참여하는 260억 달러 규모의 비상장주(Class N) 비공개 매각이 이 철회로 영향을 받는지도 불분명한 상태다.

밸류에이션을 둘러싼 숫자도 매체마다 다르다. 르네상스캐피털은 11월 10일 기준 목표 시가총액을 1.2조 달러로 보도했는데, 다른 매체는 같은 거래를 1.4조 달러 규모로 설명하고 있어 아직 숫자가 완전히 고정되지는 않은 것으로 보인다. 공모가 주당 70~78달러, 최대 643.5억 달러 조달이라는 범위 자체는 여러 매체가 공통적으로 전하고 있지만, "확정"이라고 부르기엔 아직 이르다는 인상이다.

## 어도비, MAX 2026에서 자체 바이브코딩 도구 "Firefly Builder" 공개

바이브코딩이 스타트업 바깥으로 얼마나 퍼졌는지를 보여주는 소식도 있었다. 어도비는 MAX 2026 행사에서 Firefly Builder를 발표했는데, 이를 어도비식 바이브코딩 답안으로 소개하면서 서드파티 AI 에이전트를 위한 MCP 지원도 함께 넣었다고 한다. 거대 소프트웨어 기업이 "바이브코딩"이라는 용어 자체를 전면에 내세워 제품을 설계하는 모습이 1년 전만 해도 상상하기 어려웠던 변화다.

반대쪽에서는 마찰도 보인다. 한 개발자가 AI 기반 리버스 엔지니어링으로 어도비 소프트웨어의 겉모습과 기능을 흉내 낸 오픈소스 클론을 바이브코딩으로 만들었는데, "어도비 것을 훔친 것"이라는 비판과 소송 경고가 뒤따랐다는 보도도 있었다. 같은 주에 한쪽에서는 대기업이 바이브코딩을 공식 제품으로 받아들이고, 다른 쪽에서는 그 결과물의 저작권 경계를 두고 다툼이 벌어지는 셈이다.

## 오늘의 생각

세 소식을 나란히 보면 바이브코딩 생태계가 지금 "제도화"와 "경계 다툼"을 동시에 겪고 있다는 느낌이다. 툴 쪽(클로드 코드)은 보안 구멍을 하나씩 메우며 더 단단해지고 있고, 자본 쪽(앤트로픽 IPO)은 숫자가 흔들리면서도 어쨄든 상장을 향해 가고 있고, 산업 쪽(어도비)은 바이브코딩을 정식 기능으로 품으면서 동시에 "어디까지가 모방이고 어디부터가 창작인가"라는 질문을 맞닥뜨리고 있다. 성장통이 여러 층에서 동시에 나타나는 한 주였다.

---

**출처**
- [Claude Code v2.1.321徹底解説——Fable 5.2がデフォルトに、MCP秘密情報漏れなど権限修正も - labmemo](https://labmemo.com/claude-code-v2-1-321-fable-5-2-default-security-fixes-2026-11/)
- [Anthropic retracts IPO pricing details sent to bankers, says figures were inaccurate - InvestingLive](https://investinglive.com/stocks/anthropic-retracts-ipo-pricing-details-sent-to-bankers-says-figures-were-inaccurate/)
- [Anthropic sets terms for $61 billion IPO targeting a $1.2 trillion market cap - Renaissance Capital](https://www.renaissancecapital.com/IPO-Center/News/122657/anthropic-sets-terms-for-61-billion-ipo-targeting-a-1.2-trillion-market-cap)
- [Anthropic's IPO seeks up to $64.4B at a $1.4 trillion valuation - TNW](https://thenextweb.com/news/anthropic-ipo-terms-1-4-trillion-valuation)
- [Adobe is taking vibe coding beyond apps with these major announcements at MAX 2026 - MakeUseOf](https://www.makeuseof.com/adobe-taking-vibe-coding-beyond-apps-with-major-announcements-at-max-2026/)
- [AI is being used to vibe code open-source tech products - The Week](https://theweek.com/tech/ai-is-fomenting-an-open-source-retaliation)
