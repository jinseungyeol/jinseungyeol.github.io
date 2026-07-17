import { useState } from "react";
import ProjectCard from "./project-card";
import projectData from "~/data/project-data.json";
import projectData2 from "~/data/project-data2.json";
import WorksTitle from "~/common/components/title";

export default function ProjectComponent() {
  const [activeTab, setActiveTab] = useState<"publishing" | "development">(
    "publishing"
  );

  const currentProjects =
    activeTab === "development" ? projectData2 : projectData;

  return (
    <section id="works" className="border-t-1 border-black">
      <div className="max-w-[1400px] mx-auto px-5 py-20">
        <WorksTitle/>
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("publishing")}
            className={`px-5 py-2 border w-[100px] rounded-4xl cursor-pointer ${
              activeTab === "publishing"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            퍼블리싱
          </button>

          <button
            onClick={() => setActiveTab("development")}
            className={`px-5 py-2 border w-[100px] rounded-4xl cursor-pointer ${
              activeTab === "development"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            개발
          </button>
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
