---
title: "[바이브코딩 동향] 2026-08-31"
date: 2026-08-31
tags: [AI이슈]
excerpt: 소니뮤직·워너채플이 앤트로픽을 저작권 침해로 제소하며 CEO 다리오 아모데이까지 피고로 지목했고, 클로드 코드 v2.1.251은 샌드박스 보안 승인 절차와 모델 전환 훅을 새로 추가했다.
---

**작성: 2026-08-31 09:00 (KST)**

## 소니뮤직·워너채플, 앤트로픽 상대로 저작권 소송 제기

8월 28일, 소니뮤직퍼블리싱과 워너채플뮤직이 캘리포니아 북부지방법원에 앤트로픽을 상대로 저작권 침해 소송을 냈다. 눈에 띄는 건 회사뿐 아니라 CEO 다리오 아모데이와 공동창업자 벤저민 만까지 개인 피고로 명시했다는 점이다. 소장에는 앤트로픽이 클로드 모델을 학습시키면서 토렌트로 내려받고 스크래핑한 저작물을 무단으로 사용했다는 주장이 담겼는데, 구체적으로는 MusixMatch·LyricFind 같은 가사 사이트를 긁고 Common Crawl, The Pile, Books3 같은 데이터셋을 활용했다고 지목한다. 침해 대상으로 거론된 곡도 구체적이다. "Eye of the Tiger", "September", "Uptown Funk", 테일러 스위프트의 "Paper Rings" 등 수만 곡의 악곡이 포함됐다고 하며, 저작물 1건당 최대 15만 달러의 손해배상을 청구한다고 한다. 사실 앤트로픽이 음악 퍼블리셔에게 저작권 문제로 제소당하는 게 이번이 처음은 아니다. 유니버설뮤직퍼블리싱그룹·콩코드뮤직그룹·ABKCO가 2023년 10월에 이미 소송을 냈고, 같은 그룹이 올해 1월에도 30억 달러 규모의 2차 소송을 제기한 바 있다. 이번 건으로 3대 메이저 음악 퍼블리셔 전부가 앤트로픽을 상대로 소송을 진행하게 된 셈이다.

## 클로드 코드 v2.1.251, 샌드박스 보안 승인 절차와 모델 전환 훅 추가

같은 날 나온 클로드 코드 v2.1.251에는 에이전트 권한·보안과 관련된 변경이 여럿 담겼다. 먼저 눈에 띄는 건 서버가 관리하는 설정값이 샌드박스의 TLS를 종료시키거나, 트래픽을 사용자 지정 프록시로 우회시키거나, 자격증명을 주입하거나, 샌드박스 격리를 약화시키는 경우 이제 별도 승인을 거쳐야 적용된다는 점이다. 어딘가에 숨어있는 설정 파일 하나로 샌드박스 방어선이 슬쩍 뚫리는 걸 막겠다는 의도로 보인다. 함께 바뀐 것으로, 샌드박스 안에서 실행되는 Bash 명령어의 출력 파일을 만들고 다시 읽어들이는 방식도 손봤다. 샌드박스 안의 명령어가 그 출력 파일을 리다이렉트하거나 바꿔치기할 수 없도록 막은 것이다. 보안 외 기능으로는 모델 전환 시점을 가로챌 수 있는 `PreModelSwitch`/`PostModelSwitch` 훅 이벤트가 새로 생겨서, 모델이 바뀌는 걸 막거나(block) 확인받거나(confirm) 기록만 남기는(annotate) 게 가능해졌다. 세션을 재개할 때 실행되는 `SessionStart` 훅에는 세션이 얼마나 오래됐는지와 캐시를 다시 채우는 데 드는 예상 비용 정보도 함께 전달된다. 이 밖에 리모트 컨트롤 클라이언트에서 포그라운드 서브에이전트의 툴 호출과 결과를 실시간 스트리밍으로 볼 수 있게 됐고, 지출 한도가 걸린 게이트웨이 환경을 위해 `/usage`에 스펜딩 한도 바가 추가됐다.

## 오늘의 생각

두 소식을 나란히 보면 앤트로픽이 안팎으로 신뢰 문제를 동시에 관리하고 있다는 인상이 짙어진다. 바깥에서는 학습 데이터 출처를 둘러싼 저작권 소송이 3대 메이저 퍼블리셔로 확대되며 법적 리스크가 쌓이고, 안에서는 클로드 코드가 릴리스마다 "이 설정이 정말 안전한지"를 승인 절차 하나 더 끼워 넣으며 스스로를 단속하고 있다. 어제 다룬 `--restricted` 모드에 이어 오늘은 샌드박스 우회 경로를 봉쇄하는 승인 절차가 추가된 걸 보면, 에이전트가 실제로 코드를 실행하고 파일을 건드리는 도구인 이상 이런 방어선은 앞으로도 계속 촘촘해질 수밖에 없어 보인다. 동시에 저작권 소송처럼 "애초에 데이터를 어떻게 모았는가"에 대한 질문은 코드 실행 권한을 아무리 세밀하게 통제해도 피해갈 수 없는 문제라, IPO를 앞둔 시점에 이 두 축이 어떻게 같이 굴러갈지 계속 지켜볼 만하다.

---

**출처**
- [Sony, Warner sue Anthropic, alleging a "brazen campaign" of intellectual property theft - TechCrunch](https://techcrunch.com/2026/08/29/sony-music-warner-sue-anthropic-alleging-a-brazen-campaign-of-intellectual-property-theft/)
- [Sony, Warner sue Anthropic, alleging "blatant theft" of intellectual property - Axios](https://www.axios.com/2026/08/29/anthropic-sony-warner-music-copyright)
- [Sony Music Publishing and Warner Chappell sue Anthropic in multi-billion dollar lawsuit - Music Business Worldwide](https://www.musicbusinessworldwide.com/now-sony-music-publishing-and-warner-chappell-sue-anthropic-in-multi-billion-dollar-lawsuit-one-of-the-largest-and-most-blatant-ongoing-thefts-of-intellectual-property-in-history/)
- [Release v2.1.251 · anthropics/claude-code - GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.251)
- [Claude Code v2.1.250 (Aug 27, 2026) — Every Release, Summarized - Havoptic](https://www.havoptic.com/tools/claude-code)
