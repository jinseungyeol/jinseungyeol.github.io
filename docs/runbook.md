# 포트폴리오 러너북

이 저장소를 만질 때 알아야 할 상태와 이력. 프로젝트 콘텐츠 문서는 [docs/projects/](./projects/)에 있다.

## 알려진 이슈

- **타입체크 기존 에러 5건 — 이번 작업과 무관, 나중에 정리.** `npm run typecheck`가 5건 실패한다: `app/common/components/ui/box-reveal.tsx`(JSX 네임스페이스 미해결), `app/common/components/ui/icon-cloud.tsx`(인자 개수), `projects/wemembers-scheduler/src/components/{TaskCard,TitleLine,Tooltip}.tsx`(`verbatimModuleSyntax`에서 타입 전용 import 필요 3건). 전부 2026-08-01 포지셔닝 개편 이전부터 있던 것이고 개편이 건드린 파일과 겹치지 않는다. `npm run build`와 Pages 배포는 정상 통과하므로 배포를 막지는 않는다.

## 변경 이력

### 2026-08-01 — 포지셔닝 개편 (퍼블리셔·프론트엔드 → AI 자동화 개발자)

지원 직무(바이브 코딩 전문 개발자 / AX 엔지니어)와 실제 Works(에이전트 파이프라인·백엔드·배포 자동화)가 어긋나 손해를 보던 포장을 맞췄다. 프론트엔드·퍼블리싱 역량은 다른 직무 지원용으로 삭제하지 않고 순서만 내렸다. **포지셔닝**은 title·description·og·keywords를 "AI 코딩 도구로 개발부터 배포·운영까지 자동화하는 개발자"로 상향하고 keywords에서 바이브코딩·Claude Code·CI/CD 계열을 앞으로, 퍼블리셔 계열을 뒤로 재정렬했으며 About 첫 문단도 같은 톤으로 맞췄다. **Skills**는 10카드를 8카드로 재편해 Claude Code → NestJS → TypeScript → Python → React → 배포·운영 → 웹 표준 마크업 → Django 순으로 바꾸고, HTML5·CSS3·JavaScript·jQuery 4개를 내용 손실 없이 1블록으로 통합했다. **배포·운영 카드를 신설**해 Docker 멀티스테이지 빌드, GitHub Actions 18개 워크플로, GCP(Cloud Build·Artifact Registry·Cloud Run·Cloud SQL·Secret Manager), 앱 내장 pg-boss 크론 3종을 담았다 — 크론은 Cloud Scheduler가 아니라 pg-boss이고 cafe24-perf 레포에는 워크플로가 없어 GitHub Actions를 그 카드 기술스택에 넣지 않는 등, 실물로 확인되지 않는 항목은 낮춰 쓰거나 뺐다. **WebP 앱 성과**에 운영 9개 몰 확장과 엑박 사고 원인 3계층(경로 정규화 실패 404 → 오류 응답 CDN 캐시 → lazyloader가 클라이언트 폴백 무력화) 규명·수정, 회귀 하네스, 실서빙 일 1회 점검·알림, 고아 작업 자동 회수를 추가했다. **case-studies 저장소**(PUBLIC)를 About 하단 독립 블록으로 노출해 채용 담당자가 설계 원칙·트러블슈팅 문서에 바로 닿게 했고, **사이드 프로젝트**는 틱택토를 빼고 2건만 남기면서 캐러셀을 2단 그리드로 바꿨다(2건뿐이라 캐러셀은 한쪽을 숨기기만 했다). 버튼 라벨은 본업 카드가 "프로젝트 소개"/"기술 문서", 사이드 카드가 "Demo"/"소스 코드"다 — 사이드의 GitHub는 문서가 아니라 소스 저장소라 구분했다.

GA4는 `MoveLink` 컴포넌트의 onClick·props로 발화하므로 DOM 변경에 영향받지 않는다. 다만 라벨 변경으로 `button_label`과 `link_text` 값이 바뀌었고 `link_url`은 그대로이므로, **배포 전후 비교는 `link_url` 기준**으로 해야 연속성이 유지된다.
