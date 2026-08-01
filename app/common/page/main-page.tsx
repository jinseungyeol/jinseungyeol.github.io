import type { LinksFunction, MetaFunction } from "react-router";
import AboutComponent from "~/features/about/components/about";
import FooterComponent from "~/features/footer/components/footer";
import IntroComponent from "~/features/intro/components/intro";
import ProjectComponent from "~/features/projects/components/project";
import { SideProject } from "~/features/side-projects/components/side-project";
import SkillComponent from "~/features/skiils/components/skill";

export const meta: MetaFunction = () => {
  return [
    { title: "Jin's | 바이브 코딩 · 웹 개발 포트폴리오" },
    {
      name: "description",
      content:
        "AI 코딩 도구로 개발부터 배포·운영까지 자동화하는 개발자 진승열의 포트폴리오. Claude Code 기반 운영 파이프라인, 카페24 13개 브랜드 자동 배포, NestJS·Python 백엔드, 데이터 수집 자동화. 웹 표준 마크업이 기본기입니다.",
    },
    {
      name: "keywords",
      content:
        "바이브코딩, vibe coding, Claude Code, AI 코딩, AI 자동화, AI 워크플로우, 자동화 개발자, CI/CD, GitHub Actions, 배포 자동화, NestJS, TypeScript, Python, 데이터 자동화, 백엔드 개발자, 프론트엔드 개발자, frontend developer, 웹 퍼블리셔, 퍼블리셔, 포트폴리오, portfolio",
    },
    { name: "author", content: "Jin's Web Portfolio" },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://jinseungyeol.github.io/" },
    { property: "og:title", content: "Jin's | 바이브 코딩 · 웹 개발 포트폴리오" },
    {
      property: "og:description",
      content:
        "AI 코딩 도구로 개발부터 배포·운영까지 자동화하는 개발자 진승열의 포트폴리오. Claude Code 기반 운영 파이프라인, 카페24 13개 브랜드 자동 배포, NestJS·Python 백엔드, 데이터 수집 자동화. 웹 표준 마크업이 기본기입니다.",
    },
    {
      property: "og:image",
      content: "https://jinseungyeol.github.io/assets/images/og-image.png",
    },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "shortcut icon", href: "/assets/images/ico/ico_favicon.ico" }];
};

export default function mainPage() {
  return (
    <main className="overflow-x-hidden">
      <IntroComponent />
      <AboutComponent />
      <SkillComponent />
      <ProjectComponent />
      <SideProject />
      <FooterComponent />
    </main>
  );
}
