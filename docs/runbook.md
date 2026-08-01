# 포트폴리오 러너북

이 저장소를 만질 때 알아야 할 상태와 이력. 프로젝트 콘텐츠 문서는 [docs/projects/](./projects/)에 있다.

## 알려진 이슈

- **타입체크 기존 에러 5건 — 이번 작업과 무관, 나중에 정리.** `npm run typecheck`가 5건 실패한다: `app/common/components/ui/box-reveal.tsx`(JSX 네임스페이스 미해결), `app/common/components/ui/icon-cloud.tsx`(인자 개수), `projects/wemembers-scheduler/src/components/{TaskCard,TitleLine,Tooltip}.tsx`(`verbatimModuleSyntax`에서 타입 전용 import 필요 3건). 전부 2026-08-01 포지셔닝 개편 이전부터 있던 것이고 개편이 건드린 파일과 겹치지 않는다. `npm run build`와 Pages 배포는 정상 통과하므로 배포를 막지는 않는다.

## 변경 이력

### 2026-08-01 — 포지셔닝 개편 (퍼블리셔에서 AI 자동화 개발자로)

지원 직무(바이브 코딩 전문 개발자, AX 엔지니어)와 실제 Works가 어긋나 손해를 보던 포장을 맞췄다. 프론트엔드와 퍼블리싱 역량은 다른 직무 지원용이라 삭제하지 않고 순서만 내렸다. 메타와 About을 "AI 코딩 도구로 개발부터 배포와 운영까지 자동화하는 개발자"로 상향하고, keywords는 바이브코딩과 Claude Code, CI/CD 계열을 앞으로 옮겼다. Skills는 10카드를 8카드로 재편하면서 HTML5와 CSS3, JavaScript, jQuery를 한 블록으로 합치고 **배포와 운영 카드를 신설**했다. WebP 앱 성과에는 운영 9개 몰 확장과 엑박 사고 3계층 규명, 회귀 하네스, 실서빙 점검, 고아 작업 회수를 더했다. case-studies 저장소를 About 하단에 독립 블록으로 노출했고, 사이드 프로젝트는 틱택토를 빼고 캐러셀을 2단 그리드로 바꿨다. 버튼 라벨은 본업 카드가 "프로젝트 소개"와 "기술 문서", 사이드 카드가 "Demo"와 "소스 코드"다. 사이드의 GitHub는 문서가 아니라 소스 저장소라서 구분했다.

**사실 확인에서 걸러낸 것**: 크론은 Cloud Scheduler가 아니라 앱에 내장한 pg-boss였고, cafe24-perf 레포에는 워크플로가 없어 GitHub Actions를 그 카드 기술스택에 넣지 않았다. 운영 몰 수는 6이 아니라 9(스니펫 온보딩과 promote 완료가 현재 일치)로 재확인했다. 실물로 확인되지 않는 항목은 낮춰 쓰거나 뺐다.

**문체 기준**: 중점(가운뎃점)으로 단어를 붙여 쓰지 않는다. 나열은 쉼표로, 나머지는 문장으로 푼다. 카드 본문은 불릿 나열 대신 산문으로 쓰고 다른 카드와 길이를 맞춘다. 개수를 세어 앞세우는 표현("스킬 13개", "recipe 59건" 등)은 쓰지 않는다.

GA4는 `MoveLink` 컴포넌트의 onClick과 props로 발화하므로 DOM 변경에 영향받지 않는다. 다만 라벨 변경으로 `button_label`과 `link_text` 값이 바뀌었고 `link_url`은 그대로이므로, **배포 전후 비교는 `link_url` 기준**으로 해야 연속성이 유지된다.
