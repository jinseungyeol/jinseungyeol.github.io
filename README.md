# Jin's Web Portfolio

> **https://jinseungyeol.github.io** — 웹 퍼블리셔 진승열의 포트폴리오

퍼블리싱과 개발 프로젝트를 카드로 소개하고, 각 카드에서 Notion 상세 페이지로 이어지는 정적 포트폴리오 사이트입니다. React Router 7(SPA 모드)로 만들고 GitHub Pages로 배포합니다.

## 구성

| 섹션 | 내용 |
|---|---|
| About | 소개 |
| Skills | 기술 스택 |
| Works | 프로젝트 카드 — **퍼블리싱 / 개발** 탭 전환 |
| Side Projects | 사이드 프로젝트 |

각 프로젝트 카드는 참여도·역할·기술·환경·성과를 요약해 보여주고, **Notion 버튼**으로 상세 페이지(배경·구현 방식·트러블슈팅)에 연결됩니다. 카드에는 요약만 두고 깊은 내용은 Notion에 두는 2단 구조입니다.

## 프로젝트 문서

각 프로젝트의 요약 문서는 [`docs/projects/`](docs/projects/)에 있습니다.

### 개발

| 프로젝트 | 한 줄 소개 |
|---|---|
| [커머스 채널 데이터 수집 자동화](docs/projects/commerce-data-pipeline.md) | 쿠팡·네이버 13개 브랜드 광고비·매출을 매시간 자동 수집해 Sheets·BigQuery 적재 (일 2~3시간 절감) |
| [카페24 상품 이미지 WebP 자동 변환 앱](docs/projects/cafe24-webp-optimizer.md) | 본문 HTML을 건드리지 않는 무오염 설계로 이미지 평균 84% 용량 절감 |
| [카페24 자사몰 통합 운영](docs/projects/cafe24-mall-operations.md) | 13개 브랜드 자사몰을 git 파이프라인 + AI 워크플로우로 3인 → 1인 전담 운영 전환 |
| [칼로리바](docs/projects/caloriebar.md) | 프랜차이즈 고객 홈페이지 + 지점 백오피스 (Django, 홈쇼핑 다채널·방문자 통계·권역 관리) |

### 퍼블리싱

| 프로젝트 | 기간 | 한 줄 소개 |
|---|---|---|
| [세모리포트](docs/projects/semoreport.md) | 2024.01 ~ 2024.12 | 앱 UIKit 구축으로 개발 속도·효율 개선 |
| [링크패스](docs/projects/linkpath.md) | 2024.06 ~ 2024.12 | Chart.js 데이터 시각화 웹 앱 |
| [위멤버스 스케줄러](docs/projects/wemembers-scheduler.md) | 2024.01 ~ 2024.06 | React + TypeScript + SCSS 웹 앱 퍼블리싱 |
| [KT 사장님 장부비서](docs/projects/kt-jangbu.md) | 2022.01 ~ 2023.12 | Ajax 렌더링·도메인 분리 PC/모바일 맞춤 UI |
| [i-ONE 소상공인](docs/projects/ione-soho.md) | 2022.01 ~ 2023.12 | AWS 정적 배포 + GA4 사용자 흐름 분석 |
| [로움아이티](docs/projects/roumit.md) | 2022.06 ~ 2022.12 | 바닐라 JS 스크롤 인터랙션·카카오 지도 연동 홈페이지 |
| [NH소상공인파트너](docs/projects/nh-soho.md) | 2022.01 ~ 2022.12 | SVN·산출물 페이지 구축으로 업무 프로세스 30% 단축 |
| [세모장부](docs/projects/semojangbu.md) | 2022.01 ~ 2022.12 | CSS 하드웨어 가속으로 프레임 속도 2배 향상 |

### 사이드 프로젝트

| 프로젝트 | 한 줄 소개 |
|---|---|
| [디즈니플러스 클론 웹앱](docs/projects/disney-plus-clone.md) | TMDB API + Firebase 인증 OTT 클론 |
| [틱택토 게임](docs/projects/tictactoe.md) | React 상태 관리 연습 게임 |
| [여행 상품 주문 웹앱](docs/projects/react-context-app.md) | Context API 전역 상태 + Express API 직접 구현 |

## 콘텐츠는 데이터가 결정합니다

카드 UI는 컴포넌트 하나(`ProjectCard`)이고, 실제 내용은 전부 JSON에서 옵니다. 프로젝트를 추가·수정할 때 코드는 건드리지 않습니다.

```
app/data/
├── project-data.json       # 퍼블리싱 탭 카드
├── project-data2.json      # 개발 탭 카드
└── side-project-data.json  # 사이드 프로젝트
```

카드 한 장의 스키마:

```jsonc
{
  "title": "프로젝트명",
  "period": "YYYY.MM ~ YYYY.MM",        // 비우면 표시 안 됨
  "imageUrl": "/assets/images/preview/preview18.png",
  "imageBg": "white",                    // 선택. 흰 배경 이미지(다이어그램 등)일 때 지정,
                                         // 생략하면 회색 배경 (목업 이미지용)
  "details": [
    { "label": "참여", "value": "100%" },
    { "label": "역할", "value": "..." },
    { "label": "기술", "value": "..." },
    { "label": "환경", "value": "..." },
    { "label": "성과", "value": "..." }
  ],
  "links": [{ "to": "https://...notion.site/...", "text": "Notion" }]
}
```

### 썸네일 규칙

- 파일은 `public/assets/images/preview/preview*.png`
- 실제 서비스 화면이 있는 프로젝트는 **디바이스 목업**(회색 배경), 다이어그램·일러스트는 **흰 배경**(`imageBg: "white"`)으로 카드에 녹입니다
- **이미지를 교체할 때는 같은 파일명을 재사용하지 말 것** — GitHub Pages가 이미지에 10분 캐시를 걸어 새 내용이 보이지 않습니다. 새 번호의 파일명으로 추가하고 JSON에서 경로를 바꾸는 방식으로 운영합니다

## 기술 스택

- **React Router 7** — SPA 모드(`ssr: false`), 빌드 시 `dist/` 정적 출력
- **TypeScript + Vite**
- **Tailwind CSS 4** + shadcn/ui 스타일 컴포넌트, magicui(MagicCard), motion 애니메이션
- 폰트: Pretendard

## 로컬 실행

```bash
npm install
npm run dev        # 개발 서버 (HMR)
npm run build      # 정적 빌드 → dist/
npm run typecheck  # react-router typegen + tsc
```

## 배포

`main`에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로:

1. 사이트를 빌드하고 SPA 라우팅용으로 `index.html`을 `404.html`로 복사
2. `projects/` 하위 데모(예: wemembers-scheduler)를 빌드해 `/project/*` 경로에 포함
3. GitHub Pages로 배포

로컬의 `dist/`, `build/`는 커밋하지 않습니다(빌드는 CI에서 수행). 루트의 `*.txt` 개인 문서도 `.gitignore`로 제외됩니다.

## 디렉터리 안내

```
app/
├── data/            # 카드 콘텐츠 (JSON) — 콘텐츠 수정은 여기서
├── features/        # 섹션별 컴포넌트 (about, projects, side-projects, skills …)
│   └── projects/components/
│       ├── project.tsx        # 퍼블리싱/개발 탭 + 카드 목록
│       └── project-card.tsx   # 카드 레이아웃 (imageBg 분기 포함)
├── common/          # 공용 UI (shadcn/magicui 파생)
└── routes.ts        # 라우트 정의
public/assets/       # 이미지 (썸네일, 아이콘)
projects/            # 독립 데모 프로젝트 (자체 빌드 후 /project/*로 서빙)
```
