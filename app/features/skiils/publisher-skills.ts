import type { SkillItem } from "./components/skill";

// 퍼블리셔 지원용 Skills. 마크업 4장을 앞에 두고 AI와 배포는 뒤로 보낸다.
// 2026-07-17 최초 빌드(ec4b3e1)의 4장을 바탕으로 문체 기준에 맞춰 다시 썼다.
export const publisherSkills: SkillItem[] = [
  {
    imgSrc: "/assets/images/ico/ico_html.png",
    imgAlt: "HTML5",
    title: "HTML5",
    description:
      "시맨틱 태그로 문서 구조를 드러내는 마크업을 기본으로 합니다. 제목 계층과 랜드마크를 먼저 잡고 이미지 대체 텍스트와 폼 레이블을 채워 보조기기에서도 같은 순서로 읽히게 합니다. 검색 노출이 필요한 홈페이지는 OG 메타와 구조화된 콘텐츠로 구성했고, 하이브리드 앱은 WebView 특성에 맞춰 공통 컴포넌트 가이드를 먼저 만든 뒤 조립하는 방식으로 화면을 일관되게 생산했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_css.png",
    imgAlt: "CSS3",
    title: "CSS3",
    description:
      "미디어 쿼리와 Flexbox, Grid로 반응형 레이아웃을 구성하고, PC와 모바일을 서브도메인으로 나눠야 할 때는 각각에 맞는 스타일을 따로 설계합니다. 트랜지션과 keyframe 애니메이션으로 인터랙션을 다듬되, 세모장부 앱에서는 transform 기반 하드웨어 가속으로 바꿔 프레임 속도를 두 배로 끌어올렸습니다. 크로스브라우징 차이는 리셋과 폴백 값으로 흡수하고, React 프로젝트에서는 SCSS로 변수와 믹스인을 묶어 스타일을 관리했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_js.png",
    imgAlt: "JavaScript",
    title: "JavaScript",
    description:
      "스크롤 위치에 따라 바뀌는 인터랙션과 카카오 지도 API 연동을 라이브러리 없이 바닐라 자바스크립트로 구현했습니다. 쿠키로 하루 동안 닫아두는 팝업이나 날짜 조건으로 열리는 시즌 팝업처럼 운영에서 자주 바뀌는 기능은 설정값만 고치면 되도록 분리해 두었습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_jquery.png",
    imgAlt: "jQuery",
    title: "jQuery",
    description:
      "공통 함수와 슬라이드, 센터 팝업을 모듈로 묶어 화면마다 같은 코드를 반복하지 않게 했습니다. Ajax 호출부는 공통 모듈로 분리하고 접속 호스트에 따라 운영과 개발 엔드포인트를 자동으로 나눠, 설치 링크 발송 신청과 가입자 현황 조회 같은 동적 기능을 그 위에서 구현했습니다. Swiper, Mobiscroll, Chart.js 같은 플러그인은 필요한 옵션만 감싸 재사용합니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_react.png",
    imgAlt: "React",
    title: "React",
    description:
      "컴포넌트 단위로 마크업을 나누고 Props 흐름과 기본 상태 관리를 이해한 위에서 퍼블리싱합니다. 위멤버스 스케줄러는 React와 TypeScript, SCSS 환경에서 화면을 구현했고, 디자이너와 프론트엔드 개발자가 그대로 이어받을 수 있도록 재사용 가능한 구조로 작성했습니다. 이 포트폴리오도 React Router와 Tailwind로 직접 만들었습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_ts.png",
    imgAlt: "TypeScript",
    title: "TypeScript",
    description:
      "interface로 props와 데이터 타입을 명확히 정의해 컴포넌트 간 데이터 흐름의 안정성을 높입니다. 이 포트폴리오를 포함한 React 프로젝트를 TypeScript로 작성하며, 타입이 문서 역할을 하는 코드를 지향합니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_claude.png",
    imgAlt: "Claude Code",
    title: "Claude Code",
    description:
      "카페24 13개 브랜드 자사몰의 퍼블리싱과 운영을 Claude Code와 함께 혼자 맡고 있습니다. 브랜드마다 디자인 토큰과 수정 절차를 스킬로 정의하고, 반복되는 요청은 어느 파일 어느 줄을 고치면 되는지 레시피로 쌓아 자연어 요청이 곧 수정과 배포로 이어지게 했습니다. 변경 범위 상한을 걸어 staging 밖으로는 나가지 못하게 막고, Figma는 MCP로 연결해 디자인 원본에서 값을 직접 읽습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_deploy.svg",
    imgAlt: "배포와 운영",
    title: "배포와 운영",
    description:
      "만든 화면은 직접 배포합니다. 홈페이지는 AWS S3와 CloudFront, Route 53으로 정적 배포하고 배포 때마다 캐시를 무효화해 클라이언트 요청에 바로 대응했습니다. 13개 브랜드 스킨은 GitHub Actions로 main에 올리면 staging까지 자동으로 가고, 운영 반영은 검증을 거친 뒤 수동 트리거로만 올립니다. 산출물은 화면 채번 규칙과 워크리스트로 정리해 기획, 개발 파트와 전달 체계를 맞춥니다.",
  },
];
