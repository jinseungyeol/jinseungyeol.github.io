import { useState } from "react";
import ProjectCard from "./project-card";
import projectData from "~/data/project-data.json";
import projectData2 from "~/data/project-data2.json";
import WorksTitle from "~/common/components/title";

type Tab = "publishing" | "development";
type Project = (typeof projectData)[number] & { imageBg?: string };

interface ProjectProps {
  /** 처음 열리는 탭. 메인은 개발, 퍼블리셔 경로는 퍼블리싱 */
  defaultTab?: Tab;
  /** 퍼블리싱 탭 목록을 바꿔 끼울 때 */
  publishing?: Project[];
  /** 개발 탭 목록을 바꿔 끼울 때 */
  development?: Project[];
}

export default function ProjectComponent({
  defaultTab = "development",
  publishing = projectData,
  development = projectData2,
}: ProjectProps) {
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab);

  const currentProjects =
    activeTab === "development" ? development : publishing;

  // 기본 탭이 먼저 오도록 버튼 순서도 맞춘다
  const tabs: { key: Tab; label: string }[] =
    defaultTab === "publishing"
      ? [
          { key: "publishing", label: "퍼블리싱" },
          { key: "development", label: "개발" },
        ]
      : [
          { key: "development", label: "개발" },
          { key: "publishing", label: "퍼블리싱" },
        ];

  return (
    <section id="works" className="border-t-1 border-black">
      <div className="max-w-[1400px] mx-auto px-5 py-20">
        <WorksTitle/>
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 border w-[100px] rounded-4xl cursor-pointer ${
                activeTab === tab.key
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div key={activeTab} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {currentProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
