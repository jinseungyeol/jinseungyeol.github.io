import type { LinksFunction, MetaFunction } from "react-router";
import AboutComponent from "~/features/about/components/about";
import FooterComponent from "~/features/footer/components/footer";
import IntroComponent from "~/features/intro/components/intro";
import ProjectComponent from "~/features/projects/components/project";
import { SideProject } from "~/features/side-projects/components/side-project";
import SkillComponent from "~/features/skiils/components/skill";
import { publisherSkills } from "~/features/skiils/publisher-skills";
import projectData from "~/data/project-data.json";
import publisherExtra from "~/data/project-data-publisher.json";

// 퍼블리셔, UI개발자 직무 지원용 진입점.
// 메인(/)은 AI 자동화 개발자 포지셔닝을 유지하고, 이 경로는 같은 데이터를
// 퍼블리셔 검토자 순서로 다시 배열한다. 카드 데이터는 공유한다.

const DESCRIPTION =
  "UI개발자 진승열의 포트폴리오. 금융 하이브리드 앱과 홈페이지 퍼블리싱, 공통 컴포넌트 마크업 가이드 구축, 카페24 13개 브랜드 자사몰 운영, React 환경 퍼블리싱. 웹 표준과 반응형, 크로스브라우징이 기본기입니다.";

export const meta: MetaFunction = () => {
  return [
    { title: "Jin's | UI개발자 포트폴리오" },
    { name: "description", content: DESCRIPTION },
    {
      name: "keywords",
      content:
        "UI개발자, UI 개발자, UI 개발자 포트폴리오, 웹 퍼블리셔, 퍼블리셔, 퍼블리셔 포트폴리오, publisher, 마크업, HTML5, CSS3, JavaScript, jQuery, 반응형 웹, 웹 표준, 웹 접근성, 크로스브라우징, 하이브리드 앱, React 퍼블리싱, 카페24, 포트폴리오, portfolio",
    },
    { name: "author", content: "Jin's Web Portfolio" },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://jinseungyeol.github.io/publisher" },
    { property: "og:title", content: "Jin's | UI개발자 포트폴리오" },
    { property: "og:description", content: DESCRIPTION },
    {
      property: "og:image",
      content: "https://jinseungyeol.github.io/assets/images/og-image.png",
    },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "shortcut icon", href: "/assets/images/ico/ico_favicon.ico" }];
};

// 퍼블리싱 탭: 현재 맡고 있는 13개 브랜드 운영을 맨 앞에 두고 금융 퍼블리싱 8건이 따른다
const publishingProjects = [...publisherExtra, ...projectData];

export default function PublisherPage() {
  return (
    <main className="overflow-x-hidden">
      <IntroComponent
        headline={["토끼처럼 빠르게 흡수하고", "거북이처럼 묵묵히 일하는"]}
        subline={["UI개발자 진승열입니다."]}
      />
      <AboutComponent
        paragraphs={[
          "금융 서비스 화면 구현에서 시작해, 지금은 카페24 13개 브랜드 자사몰의 퍼블리싱과 운영을 혼자 맡고 있습니다.",
          "웹 표준을 지킨 시맨틱 마크업과 반응형 레이아웃, 크로스브라우징을 기본으로 하이브리드 앱과 홈페이지, React 환경까지 퍼블리싱합니다. 공통 컴포넌트를 먼저 정의한 마크업 가이드로 화면을 조립해 일관성과 속도를 함께 챙깁니다.",
          "항상 프로젝트의 목표를 중심에 두고 디자이너, 개발자와 협업합니다. 최근에는 Claude Code 같은 AI 도구를 퍼블리싱 워크플로에 들여 반복 수정과 배포를 자동화하고, 필요한 도구는 직접 만들어 씁니다.",
        ]}
      />
      <SkillComponent items={publisherSkills} />
      <ProjectComponent
        defaultTab="publishing"
        publishing={publishingProjects}
      />
      <SideProject />
      <FooterComponent />
    </main>
  );
}
