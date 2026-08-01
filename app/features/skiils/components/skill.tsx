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
  "python",
  "html5",
  "django",
  "tailwindcss",
  "react",
  "github",
  "css3",
  "nestjs",
  "claude",
  "docker",
  "googlecloud",
  "figma",
  "typescript",
  "sass",
  "javascript",
  "python",
  "html5",
  "django",
  "tailwindcss",
  "react",
  "github",
  "css3",
  "nestjs",
  "claude",
  "docker",
  "googlecloud",
];

const skills = [
  {
    imgSrc: "/assets/images/ico/ico_claude.png",
    imgAlt: "Claude Code",
    title: "Claude Code",
    description:
      "카페24 13개 브랜드의 운영을 Claude Code로 돌립니다. 브랜드마다 디자인 시스템과 처리 절차를 스킬로 정의하고, 반복되는 요청은 어느 파일 어느 줄을 고치면 되는지 레시피로 쌓아두어 자연어 요청이 곧 수정과 배포로 이어집니다. 절대 규칙과 변경 범위 상한을 프롬프트와 설정 양쪽에 걸어, 판단이 흔들려도 staging 밖으로는 나가지 못하게 막았습니다. 이 위에서 Slack 요청을 처리하는 에이전트와 크롤링 실패를 진단하는 에이전트를 헤드리스로 돌리고 있고, Figma는 MCP로 연결해 디자인 원본에서 값을 직접 읽습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_nestjs.svg",
    imgAlt: "NestJS",
    title: "NestJS",
    description:
      "카페24 상품 이미지 WebP 변환 앱의 백엔드를 NestJS로 설계하고 구현했습니다. 스캔과 변환, 서빙, 드리프트 스캔을 모듈 단위로 분리하고, Prisma와 PostgreSQL 기반 장부 설계와 pg-boss 작업 큐로 대량 변환을 안정적으로 처리했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_ts.png",
    imgAlt: "TypeScript",
    title: "TypeScript",
    description:
      "interface로 props와 데이터 타입을 명확히 정의해 컴포넌트 간 데이터 흐름의 안정성을 높였습니다. 이 포트폴리오를 포함한 React 프로젝트와 NestJS 백엔드까지 TypeScript 기반으로 작성하며, 타입이 문서 역할을 하는 코드를 지향합니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_python.png",
    imgAlt: "Python",
    title: "Python",
    description:
      "Playwright 기반 봇 차단 우회 크롤링, 공식 API 연동, BigQuery append-only 적재 파이프라인, 다층 정합성 검증, 실패 자동진단 디스패처까지, 수집부터 검증과 운영으로 이어지는 데이터 자동화를 구현했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_react.png",
    imgAlt: "React",
    title: "React",
    description:
      "컴포넌트 기반 UI 설계에 익숙하며, React를 활용한 재사용 가능한 퍼블리싱 구조를 구현할 수 있습니다. 디자이너와 프론트엔드 개발자와의 협업을 고려해 마크업을 작성하고, Props 흐름과 기본적인 상태 관리에 대한 이해를 바탕으로 퍼블리싱을 유연하게 수행할 수 있습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_deploy.svg",
    imgAlt: "배포와 운영",
    title: "배포와 운영",
    description:
      "만든 것을 직접 배포하고 운영합니다. pnpm 모노레포는 멀티스테이지 빌드로 묶어 이미지 하나로 만들고, 로컬에서는 docker-compose로 같은 파이프라인을 검증합니다. 13개 브랜드 스킨은 GitHub Actions로 배포하는데, main에 올리면 staging까지는 자동으로 가고 운영 반영은 수동 트리거로 따로 떼어 검증을 거친 뒤에만 올립니다. GCP에서는 Cloud Build로 빌드한 이미지를 Cloud Run 리비전으로 교체해 배포하거나 되돌리고, 인증정보는 Secret Manager로 코드에서 분리했습니다. 정기 점검은 별도 스케줄러 없이 앱에 내장한 pg-boss로 새벽에 돌립니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_html.png",
    imgAlt: "웹 표준 마크업",
    title: "웹 표준 마크업 (HTML5, CSS3, JavaScript, jQuery)",
    description:
      "시멘틱 마크업으로 문서 구조를 명확히 정의하고, 웹 접근성과 SEO를 고려해 작성합니다. 크로스브라우징 호환성을 확보해 어느 브라우저에서도 같은 화면을 제공합니다. 미디어 쿼리와 Flexbox, Grid로 반응형 레이아웃을 구성하고 CSS 애니메이션과 트랜지션으로 인터랙션을 다듬습니다. 스크롤 위치에 따라 변하는 인터랙션은 라이브러리 없이 바닐라 자바스크립트로 구현했고, jQuery에서는 공통 함수와 슬라이드, 팝업을 모듈화해 재사용성과 유지보수성을 높였으며 Ajax로 신청 폼 전송과 실시간 가입자 정보 제공을 처리했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_django.png",
    imgAlt: "Django",
    title: "Django",
    description:
      "ORM, Middleware, F expression 등을 활용해 방문자 통계 집계, 관리자 기능, 엑셀 다운로드 등 서버 기반 데이터 처리 기능을 구현했습니다.",
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
