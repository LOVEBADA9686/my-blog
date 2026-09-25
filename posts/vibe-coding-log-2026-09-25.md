---
title: "[바이브코딩 동향] 2026-09-25"
date: 2026-09-25
tags: [AI이슈]
excerpt: 앤트로픽이 새 생명과학 연구소를 열자마자 클로드가 21시간 만에 크리스퍼와 닮은 미지의 효소 시스템을 찾아냈고, 커서는 그 뒤에 나온 오퍼스 5.5를 바로 얹어 코딩 벤치마크 1위를 갈아치웠다.
---

**작성: 2026-09-25 09:00 (KST)**

어제는 프리저브드 씽킹이랑 구글 안티그래비티 CLI처럼 "코딩 에이전트끼리의 경쟁" 얘기를 정리했는데, 오늘은 결이 좀 다른 소식이 눈에 띄었다. 클로드가 코딩을 벗어나 생물학 연구에서 진짜로 "새로운 걸 발견"한 사례가 나왔고, 그 여파로 나온 신형 모델을 커서 같은 코딩 툴이 얼마나 빨리 흡수하는지도 같이 볼 수 있었다.

## 클로드, 크리스퍼 닮은 미지의 효소 시스템 'ART' 발견

앤트로픽이 9월 23일 새 생명과학 연구 그룹과 연구소를 공개하면서, 클로드가 자율적으로 진행한 첫 성과를 함께 발표했다. 약 19억 개에 달하는 단백질 클러스터 데이터베이스를 클로드가 스스로 뒤지다가, 크리스퍼 유전자 가위의 특징인 일정한 간격의 DNA 반복 서열과 구조가 닮은, 지금까지 알려지지 않은 효소 시스템을 찾아낸 것이다. 앤트로픽은 이를 "ART(array-associated reverse transcriptases)"라 이름 붙였는데, 역전사효소 하나와 그 옆의 파트너 유전자, 그리고 일정 간격으로 늘어선 DNA 반복 배열 세 요소로 구성된다. 이 자율 탐색 작업은 21.5시간 동안 949개의 에이전트 세션, 총 2억 1560만 토큰을 써서 이뤄졌다고 한다.

다만 앤트로픽 스스로도 ART가 정확히 무슨 기능을 하는지는 아직 밝혀내지 못했고, 유전자 편집 능력이 실제로 있는지도 검증된 바 없다고 선을 그었다. 게다가 같은 탐색을 열 번 더 반복했을 때는 단 한 번도 그 반복 배열을 다시 찾아내지 못했다는 대목도 흥미롭다. 재현이 잘 안 된다는 뜻이라 "새 유전자 가위 발견"이라 단정하기엔 이르지만, 그 발표만으로 시장은 바로 반응해서 일부 유전자 편집 관련 바이오 기업 주가가 하락했다는 보도도 나왔다.

## 커서, 오퍼스 5.5 얹고 CursorBench 1위 갈아치워

코딩 쪽에서는 커서(Cursor)가 지난주 출시된 클로드 오퍼스 5.5를 에디터의 모델 선택지에 바로 추가했다는 소식이다. 커서가 자체적으로 운영하는 CursorBench 4.0(실제 프로덕션 세션에서 뽑은 모호한 멀티파일 코드 편집 과제 모음) 기준으로, 오퍼스 5.5는 최고 성능 모드에서 57.8점을 기록하며 페이블 5.1(51.8점), 이전 오퍼스 5(46.6점), GPT-5.6 솔(41.7점)을 제치고 1위에 올랐다. 작업당 비용은 오퍼스 5보다 약 40% 저렴하다고 한다. 다만 CursorBench는 외부에서 검증·재현할 수 없는 커서 자체 벤치마크라, 같은 버전 안에서의 상대 비교 정도로만 참고하는 게 맞겠다. 흥미로운 건 커서 자체 모델인 Composer 2.5가 이번 리더보드 발표에는 이름을 올리지 못했다는 점인데, 서드파티 모델이 자체 개발 모델보다 먼저 최신 오퍼스를 흡수해 1위 자리를 차지한 모양새다.

## 오늘의 생각

두 소식을 같이 보면, 클로드라는 하나의 모델이 코딩 에이전트 시장 안에서 다투는 동시에 코딩 바깥의 과학 연구 영역까지 손을 뻗고 있다는 게 실감 난다. 다만 ART 발견 건은 "재현 안 됨"이라는 꼬리표가 붙어 있어서 액면 그대로 받아들이기보다는 후속 검증을 좀 더 지켜봐야 할 것 같고, 커서 쪽 벤치마크도 자체 측정치라는 한계는 감안해야겠다. 그래도 새 모델이 나온 지 며칠 안에 서드파티 코딩 툴이 바로 갈아 끼우고 벤치마크 1위를 새로 찍는 속도 자체는, 이 판이 얼마나 빨리 굴러가는지 보여주는 것 같다.

---

**출처**
- [Claude discovers a novel enzyme system with CRISPR-like repeats - Anthropic](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system)
- [Anthropic says its biology lab has already found something big - TechCrunch](https://techcrunch.com/2026/09/23/anthropic-says-its-biology-lab-has-already-found-something-big/)
- [Claude Found a Mysterious CRISPR-Like System—but Anthropic Can't Say What It's Capable of - Gizmodo](https://gizmodo.com/claude-found-a-mysterious-crispr-like-system-but-anthropic-cant-say-what-its-capable-of-2000816906)
- [Gene editing stocks fall on Anthropic's CRISPR-like discovery - Seeking Alpha](https://seekingalpha.com/news/4646229-gene-editing-stocks-fall-anthropic-crispr-like-discovery)
- [Cursor ships Claude Opus 5.5: tops CursorBench at 57.8% (Max), ~40% cheaper per task than Opus 5 - AICoder](https://aicoder.com/news/news-20260922-cursor-claude-opus-5-5)
