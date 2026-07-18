import { motion } from "motion/react";
import { GridPattern } from "~/common/components/ui/grid-pattern";
import { IconCloud } from "~/common/components/ui/icon-cloud";
import SkillCard from "./skill-card";
import { TextAnimate } from "~/common/components/ui/text-animate";

const slugs = [
  "figma",
  "typescript",
  "sass",
  "javascript",
  "googleanalytics",
  "html5",
  "firebase",
  "tailwindcss",
  "react",
  "github",
  "css3",
  "jquery",
  "visualstudiocode",
  "figma",
  "typescript",
  "sass",
  "javascript",
  "googleanalytics",
  "html5",
  "firebase",
  "tailwindcss",
  "react",
  "github",
  "css3",
  "jquery",
  "visualstudiocode",
];

const skills = [
  {
    imgSrc: "/assets/images/ico/ico_html.png",
    imgAlt: "HTML5",
    title: "HTML5",
    description:
      "웹 표준을 준수한 시멘틱 마크업을 활용하여 웹 페이지의 구조를 명확하게 정의하고, 웹 접근성을 고려한 요소를 구현한 경험이 있습니다. SEO(검색 엔진 최적화)를 고려한 마크업으로 검색 엔진에서의 노출을 최적화했으며, 크로스브라우징 호환성을 보장하여 다양한 브라우저에서 일관된 사용자 경험을 제공한 경험이 있습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_css.png",
    imgAlt: "CSS3",
    title: "CSS3",
    description:
      "CSS3를 활용한 스타일링과 반응형 웹 디자인을 통해 다양한 디바이스에서 최적화된 UI를 구현한 경험이 있습니다. 미디어 쿼리 및 Flexbox, Grid 시스템을 활용한 레이아웃 설계에 능숙하며, CSS 애니메이션 및 트랜지션을 통해 웹 페이지의 사용자 경험을 향상시켰습니다. 또한 크로스브라우징 호환성 문제를 해결하여 모든 브라우저에서 일관된 디자인을 제공한 경험이 있습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_js.png",
    imgAlt: "JavaScript",
    title: "JavaScript",
    description:
      "스크롤 위치에 따라 동적으로 변화하는 인터랙션을 바닐라 자바스크립트만으로 구현하여, 라이브러리에 의존하지 않고도 사용자 경험을 높일 수 있는 UI 구성 능력을 갖추고 있습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_jquery.png",
    imgAlt: "jQuery",
    title: "jQuery",
    description:
      "공통 함수와 슬라이드 팝업 등 모듈화된 함수로 구성하여 재사용성과 유지보수성을 높인 경험이 있습니다. 또한, Ajax 통신을 활용해 신청 폼 데이터를 서버에 전송하고, 가입자 정보를 실시간으로 사용자에게 제공했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_react.png",
    imgAlt: "React",
    title: "React",
    description:
      "컴포넌트 기반 UI 설계에 익숙하며, React를 활용한 재사용 가능한 퍼블리싱 구조를 구현할 수 있습니다. 디자이너와 프론트엔드 개발자와의 협업을 고려해 마크업을 작성하고, Props 흐름과 기본적인 상태 관리에 대한 이해를 바탕으로 퍼블리싱을 유연하게 수행할 수 있습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_ts.png",
    imgAlt: "TypeScript",
    title: "TypeScript",
    description:
      "TypeScript의 interface를 활용해 props 타입을 명확히 지정하고, 컴포넌트 간 데이터 흐름의 안정성을 높이는 데 기여했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_python.png",
    imgAlt: "Python",
    title: "Python",
    description:
      "Selenium·Playwright 기반 크롤링 자동화, 데이터 정제 로직, 외부 API 연동 등 서버 사이드 데이터 처리를 구현하는 데 활용했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_django.png",
    imgAlt: "Django",
    title: "Django",
    description:
      "ORM, Middleware, F expression 등을 활용해 방문자 통계 집계, 관리자 기능, 엑셀 다운로드 등 서버 기반 데이터 처리 기능을 구현했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_claude.png",
    imgAlt: "Claude Code",
    title: "Claude Code",
    description:
      "Claude Code를 실무에 도입해 카페24 스킨 구조를 기반으로 반복 퍼블리싱·운영 작업을 자연어로 처리하고, 코드 수정부터 배포까지 효율화한 경험이 있습니다. MCP 연동으로 Figma·디자인 작업과도 연결했습니다.",
  },
];

export default function SkillComponent() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section id="skills" className="relative">
      <div className="max-w-[1400px] mx-auto px-5 pb-40 py-60">
        <GridPattern width={50} height={50} x={-1} y={-1} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-40 lg:mb-80"
        >
          <h3 className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold">
            <div className="absolute">
              <IconCloud images={images} />
            </div>
            <TextAnimate
              as="span"
              className="relative pointer-events-none"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  rotate: 45,
                  scale: 0.5,
                },
                show: (i) => ({
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.4,
                    y: {
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                      mass: 0.8,
                    },
                    rotate: {
                      type: "spring",
                      damping: 8,
                      stiffness: 150,
                    },
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 300,
                    },
                  },
                }),
                exit: (i) => ({
                  opacity: 0,
                  y: 30,
                  rotate: 45,
                  scale: 0.5,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.4,
                  },
                }),
              }}
              by="character"
            >
              Skills
            </TextAnimate>
          </h3>
        </motion.div>
        <div className="relative">
          <div className="flex flex-col items-center lg:items-start md:px-10">
            {skills.map((skill, idx) => (
              <SkillCard
                key={skill.title}
                imgSrc={skill.imgSrc}
                imgAlt={skill.imgAlt}
                title={skill.title}
                description={skill.description}
                align={idx % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="hidden md:block absolute -bottom-20 -top-20 left-[calc(100%-1rem)] lg:left-[calc(50%-2px)] w-1 bg-[repeating-linear-gradient(180deg,_#000_0_5px,_transparent_5px_20px)]"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
