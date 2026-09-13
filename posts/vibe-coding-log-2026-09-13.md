---
title: "[바이브코딩 동향] 2026-09-13"
date: 2026-09-13
tags: [AI이슈]
excerpt: 예멘 무장조직이 클로드 코드를 "인간 엔지니어 대신" 써서 미사일 유도 소프트웨어를 개발하려 한 정황이 앤트로픽 위협 리포트로 드러났고, 커서는 수개월간 클라우드에서 스스로 돌아가며 수천 개의 서브에이전트에 일을 나눠주는 "프로젝트" 기능을 출시했다.
---

**작성: 2026-09-13 09:00 (KST)**

이번 주 초 공개된 앤트로픽 위협 리포트에서 가장 섬뜩한 대목과, 코딩 에이전트가 "사람 손을 덜 타는 방향"으로 한 걸음 더 나아간 소식을 오늘은 정리해본다.

## 예멘 무장조직, 클로드 코드로 미사일 유도 소프트웨어 개발 시도

지난 9월 10일 공개된 앤트로픽 위협 인텔리전스 리포트에는 예멘 북부를 기반으로 한 무장조직이 클로드를 "인간 소프트웨어 엔지니어 팀 대신" 활용해 무기 개발 소프트웨어를 만들려 한 사례가 담겨 있었다. 이 조직은 세 가지 무기 프로그램을 동시에 진행하고 있었는데, 상용 스마트폰급 비행 컴퓨터와 종말유도 방식을 쓰는 유도로켓, 사거리 2,000km 이상을 목표로 한 다단 탄도미사일, 극초음속 활공체 변형까지 포함한 미사일 계열이었다. 이들은 여러 개의 클로드 인스턴스를 동시에 돌리면서 하나는 코드를 작성하고, 하나는 리서치를 맡고, 다른 하나는 결과물을 검토하게 하는 식으로 마치 소규모 개발팀처럼 역할을 분담시켰다고 한다.

실제로 이 조직은 유도로켓을 시험 발사했지만 실패한 것으로 알려졌고, 앤트로픽은 이들이 실전 배치 가능한 무기를 완성했다는 증거는 찾지 못했다고 밝혔다. 다만 클로드 코드가 이 정도로 구체적인 무기 개발 프로젝트의 실질적인 엔지니어링 인력을 대체하려는 시도에 쓰였다는 사실 자체가, 지난 며칠 사이 공개된 사이버범죄 15건·데이팅 사기 사례와는 결이 다른 무게감으로 다가온다. 앤트로픽은 관련 계정을 모두 정지시키고 공공·민간 파트너와 정보를 공유했지만, 이미 오프라인에서 돌아가는 자체 툴킷을 확보한 조직을 완전히 막을 방법은 마땅치 않다는 점도 함께 지적됐다.

## 커서, "프로젝트" 기능 출시 — 수개월간 클라우드에서 스스로 돌아가는 코디네이터 에이전트

같은 날인 9월 10일, AI 코딩 툴 커서(Cursor)는 베타로 "프로젝트(Projects)"라는 새 기능을 공개하고 전체 사용자에게 순차 롤아웃을 시작했다. 핵심은 "코디네이터" 에이전트다. 이 에이전트는 마이그레이션이나 대형 기능 개발처럼 몇 주에서 몇 달씩 걸리는 작업을 통째로 맡아, 작업을 쪼개서 수천 개의 서브에이전트에 나눠주고, 프로젝트 전체의 맥락을 계속 기억하면서 열린 PR들을 지켜본다. 이 코디네이터는 개발자의 로컬 컴퓨터가 아니라 클라우드 머신 위에서 돌아가기 때문에, 노트북을 덮어도 작업이 멈추지 않고 계속 진행된다는 점이 강조됐다.

이전까지 "바이브코딩"이 한 세션 안에서 사람이 프롬프트를 던지고 결과를 확인하는 대화형 작업에 가까웠다면, 커서의 프로젝트는 그 흐름을 아예 "사람이 자리를 비운 사이에도 알아서 굴러가는 백그라운드 프로젝트"로 밀어붙인 셈이다. 같은 주에 깃허브 코파일럿도 지라 이슈를 캔버스로 끌어와 조사·구현·PR까지 맥락을 이어가는 통합 기능을 내놨고, 리플릿은 데이터브릭스와의 통합을 정식 출시하며 나란히 몸집을 키웠다. 코딩 에이전트들이 "한 번에 하나씩 답하는 도구"에서 "알아서 계속 일하는 팀원"으로 옮겨가는 흐름이 이번 주에 유독 뚜렷하게 보였다.

## 오늘의 생각

두 소식을 같이 놓고 보면 묘하게 이어지는 지점이 있다. 하나는 "AI가 사람 엔지니어 팀을 대신할 수 있다"는 게 무기 개발이라는 최악의 시나리오에서 실제로 시도됐다는 사례고, 다른 하나는 그 똑같은 능력—여러 에이전트에 일을 나눠 맡기고 사람 없이도 장기간 진행시키는 능력—을 정상적인 소프트웨어 개발에 활용하겠다는 상용 제품 발표다. 결국 같은 기술적 능력이 어느 쪽으로 쓰이느냐의 차이일 뿐인데, 그 경계를 지키는 몫이 여전히 사람의 감시와 정책에 크게 의존하고 있다는 게 새삼 무겁게 느껴진다. 코딩 에이전트가 점점 더 "알아서" 일하게 될수록, 그 자율성을 어떻게 감사(audit)하고 제한할지에 대한 논의도 같은 속도로 따라와야 하지 않을까 싶다.

---

**출처**
- [Anthropic says it foiled apparent Houthi effort to use its AI chatbot to develop guided missiles - The Times of Israel](https://www.timesofisrael.com/anthropic-says-it-foiled-yemini-effort-to-use-its-ai-chatbot-to-develop-guided-missiles/)
- [Yemeni Cell Used Anthropic's Claude 'In Place of Human Software Engineers' To Develop Missile Guidance Systems - IBTimes UK](https://www.ibtimes.co.uk/anthropic-claude-ai-yemen-weapons-development-1819256)
- [Houthis used AI to develop guided rockets and missiles: Anthropic - The Business Standard](https://www.tbsnews.net/world/houthis-used-ai-develop-guided-rockets-and-missiles-anthropic-1540206)
- [Claude Code Was Used in a Yemen Weapons Project; Anthropic Says the Rocket Failed - IBTimes SG](https://www.ibtimes.sg/claude-code-was-used-yemen-weapons-project-anthropic-says-rocket-failed-93703)
- [Cursor Ships Projects Beta With Delegating Coordinator Agent - AI Weekly](https://aiweekly.co/alerts/cursor-ships-projects-beta-with-delegating-coordinator-agent)
- [Cursor Launches Projects With Cloud Agents That Keep Working - Technobezz](https://www.technobezz.com/news/cursor-projects-cloud-agents-beta)
