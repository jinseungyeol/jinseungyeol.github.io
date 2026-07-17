import type { LinksFunction, MetaFunction } from "react-router";
import AboutComponent from "~/features/about/components/about";
import FooterComponent from "~/features/footer/components/footer";
import IntroComponent from "~/features/intro/components/intro";
import ProjectComponent from "~/features/projects/components/project";
import { SideProject } from "~/features/side-projects/components/side-project";
import SkillComponent from "~/features/skiils/components/skill";

export const meta: MetaFunction = () => {
  return [
    { title: "Jin's | 웹 포트폴리오" },
    { name: "description", content: "Welcome to Jin's Web Portfolio" },
    {
      name: "keywords",
      content:
        "portfolio, publisher, ui/ux engineer, 퍼블리셔, 웹 퍼블리셔, 포트폴리오, 퍼블리셔 포트폴리오",
    },
    { name: "author", content: "Jin's Web Portfolio" },
    { name: "robots", content: "index, follow" },
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
