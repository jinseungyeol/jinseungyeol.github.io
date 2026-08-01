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
    description: (
      <>
        <p>
          Claude Code를 실무 운영의 중심에 두고 자연어 요청 → 수정 → 배포
          파이프라인을 운영합니다.
        </p>
        <ul className="pt-4 pl-5 space-y-3 list-disc">
          <li>
            <strong>브랜드별 스킬 13개</strong> — 13개 브랜드 각각의 디자인
            시스템·처리 절차를 스킬로 정의해, 브랜드를 지정하면 그 브랜드의
            규칙으로만 작업하도록 고정했습니다.
          </li>
          <li>
            <strong>recipe 축적 59건</strong> — &ldquo;자연어 요청 ↔
            파일·라인·현재값&rdquo;을 표로 묶은 변경 레시피입니다. 공통 패턴
            카탈로그 19종과 자동 추출 스크립트로 신규 브랜드에 stub recipe를
            자동 등록합니다.
          </li>
          <li>
            <strong>가드 프롬프트·권한 격리</strong> — 절대 규칙 5개(staging 전용
            / 브랜드 폴더 잠금 / 설정·워크플로 수정 금지 / 비밀값 금지 / 무소음
            실패 금지)와 기계적 가드(변경 파일 3개·총 120줄 초과 시 자동 수동
            전환)를 두어, 판단이 흔들려도 범위가 넘치지 않게 만들었습니다.
          </li>
          <li>
            <strong>헤드리스 에이전트 2종</strong> — ①Slack 폼 접수를 받아
            staging까지 처리하는 에이전트(요청 원장 기반 상태 게이트, 브랜드별
            직렬 큐, 운영 반영은 구조적으로 차단) ②크롤링 실패 알림을 소비해
            원인을 진단하는 에이전트(5분 주기 기동, 진단 전용 worktree로 격리,
            allow/deny 권한 템플릿으로 조회·편집만 허용하고 push·인터프리터·클라우드
            CLI는 전면 차단, 일일 호출 상한·타임아웃, 결과는 Slack DM 회신).
          </li>
          <li>
            <strong>MCP 연동</strong> — Figma MCP로 디자인 원본에서 값을 직접
            읽어 토큰·레퍼런스 추출 작업과 연결했습니다.
          </li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: "/assets/images/ico/ico_nestjs.svg",
    imgAlt: "NestJS",
    title: "NestJS",
    description:
      "카페24 상품 이미지 WebP 변환 앱의 백엔드를 NestJS로 설계·구현했습니다. 모듈 단위로 스캔·변환·서빙·드리프트 스캔 도메인을 분리하고, Prisma·PostgreSQL 기반 장부 설계와 pg-boss 작업 큐로 대량 변환을 안정적으로 처리했습니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_ts.png",
    imgAlt: "TypeScript",
    title: "TypeScript",
    description:
      "interface로 props·데이터 타입을 명확히 정의해 컴포넌트 간 데이터 흐름의 안정성을 높였습니다. 이 포트폴리오를 포함한 React 프로젝트와 NestJS 백엔드까지 TypeScript 기반으로 작성하며, 타입이 문서 역할을 하는 코드를 지향합니다.",
  },
  {
    imgSrc: "/assets/images/ico/ico_python.png",
    imgAlt: "Python",
    title: "Python",
    description:
      "Playwright 기반 봇 차단 우회 크롤링, 공식 API 연동, BigQuery append-only 적재 파이프라인, 다층 정합성 검증, 실패 자동진단 디스패처까지 — 수집부터 검증·운영까지 이어지는 데이터 자동화를 구현했습니다.",
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
    imgAlt: "배포·운영",
    title: "배포·운영",
    description: (
      <>
        <p>만든 것을 직접 배포하고 굴리는 데까지 책임집니다.</p>
        <ul className="pt-4 pl-5 space-y-3 list-disc">
          <li>
            <strong>Docker</strong> — pnpm 모노레포를 단일 이미지로 묶었습니다.
            4단계 멀티스테이지로 의존성·빌드·런타임을 분리하고, 빌드 단계에서
            공용 패키지 빌드·Prisma 클라이언트 생성·관리자 UI 정적 export까지
            마친 뒤 런타임에는 산출물만 복사합니다. 로컬은 docker-compose로 같은
            파이프라인을 검증합니다.
          </li>
          <li>
            <strong>GitHub Actions</strong> — 13개 브랜드 스킨 배포를 워크플로
            18개로 운영합니다. main 푸시는 staging에 자동 배포되고, 운영 반영은
            별도 수동 트리거로 분리해 검증을 거친 뒤에만 올립니다. 브랜드별 직렬
            처리로 동시 배포 충돌을 막습니다.
          </li>
          <li>
            <strong>GCP</strong> — Cloud Build로 이미지를 빌드해 Artifact
            Registry에 올리고, Cloud Run 리비전 교체로 배포·롤백합니다. 장부는
            Cloud SQL, 인증정보는 Secret Manager 참조로 코드에서 분리했습니다.
          </li>
          <li>
            <strong>크론 운영</strong> — 별도 스케줄러 인프라 없이 앱 내장
            pg-boss 스케줄러 3종(드리프트 스캔 02시 / ETag 스윕 03시 / 실서빙
            워치독 04시)을 운영합니다. 잡·스케줄 상태가 DB에 있어 재시작에도
            유지됩니다.
          </li>
        </ul>
      </>
    ),
  },
  {
    imgSrc: "/assets/images/ico/ico_html.png",
    imgAlt: "웹 표준 마크업",
    title: "웹 표준 마크업 (HTML5 · CSS3 · JavaScript · jQuery)",
    description:
      "시멘틱 마크업으로 문서 구조를 명확히 정의하고, 웹 접근성과 SEO를 고려해 작성합니다. 크로스브라우징 호환성을 확보해 어느 브라우저에서도 같은 화면을 제공합니다. 미디어 쿼리와 Flexbox·Grid로 반응형 레이아웃을 구성하고, CSS 애니메이션·트랜지션으로 인터랙션을 다듬습니다. 스크롤 위치에 따라 변하는 인터랙션은 라이브러리 없이 바닐라 자바스크립트로 구현했고, jQuery에서는 공통 함수와 슬라이드·팝업을 모듈화해 재사용성과 유지보수성을 높였으며 Ajax로 신청 폼 전송과 실시간 가입자 정보 제공을 처리했습니다.",
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
