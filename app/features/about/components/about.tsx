import { motion } from "motion/react";
import MoveLink from "~/common/components/ui/move-link";
import { TextAnimate } from "~/common/components/ui/text-animate";

export default function AboutComponent() {
  return (
    <section
      id="about"
      className="relative bg-accent after:absolute after:inset-0 after:top-[100%] after:-bottom-[20%] lg:after:-bottom-[30%] after:z-50 after:bg-gradient-to-b after:from-[var(--accent)] before:absolute before:inset-0 before:-top-[20%] lg:before:-top-[30%] before:bottom-[100%] before:z-50 before:bg-gradient-to-t before:from-[var(--accent)]"
    >
      <div className="max-w-[1400px] my-10 lg:my-30 xl:my-50 mx-auto px-5 py-0 xl:py-20">
        <div className="block xl:flex gap-50 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/assets/images/profile/profile2.png"
              alt="about"
              className="w-full aspect-[452/581] max-w-[360px] border-1 border-gray-300 rounded-4xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 xl:mt-0 flex-1"
          >
            <TextAnimate
              as="h3"
              className="text-2xl md:text-3xl font-bold"
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
              About
            </TextAnimate>
            <div className="pt-5 md:pt-10 text-base md:text-lg text-gray-500 font-medium">
              <p>
                화면 구현에서 시작해, 지금은 AI 코딩 도구로 개발부터 배포와 운영까지
                자동화합니다.
              </p>
              <p className="pt-6">
                웹 표준을 준수한 탄탄한 마크업을 기본으로, AI 도구를 활용한 NestJS와 Django 백엔드 구현부터 데이터 수집 자동화, React 환경 퍼블리싱까지 폭넓게 다룹니다. 필요한 도구는 직접 만들어, 문제를 끝까지 해결하는 데 집중합니다.
              </p>
              <p className="pt-6">
                항상 프로젝트의 목표를 중심에 두고 다양한 직군과 협업합니다. 최근에는 Claude Code 등 AI 도구를 실무 워크플로에 적극 도입해, 반복 작업을 효율화하고 1인으로 멀티브랜드 운영까지 수행하고 있습니다.
              </p>
            </div>
            <div className="pt-8">
              <MoveLink
                to="https://www.notion.so/23a15fb2e2a880baa000ccde75a99daa"
                text="자기소개 더보기"
                eventParams={{
                  project_title: "about",
                  button_label: "자기소개 더보기",
                }}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="block md:flex xl:gap-50 justify-between pt-10 lg:pt-20"
        >
          <div className="md:w-90">
            <strong className="text-xl font-semibold">WORK EXPERIENCE</strong>
            <ul className="pt-3 text-base md:text-lg">
              <li className="block sm:flex gap-2">
                <p className="text-gray-500 font-medium">
                  2025.09 ~ ing
                </p>
                <p className="font-medium">
                  닥터블릿헬스케어
                </p>
              </li>
              <li className="block sm:flex gap-2 pt-2">
                <p className="text-gray-500 font-medium">
                  2021.10 ~ 2025.08
                </p>
                <p className="font-medium">
                  로움아이티
                </p>
              </li>
            </ul>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <strong className="text-xl font-semibold">EDUCATION & CERTIFICATIONS</strong>
            <ul className="pt-3 text-base md:text-lg">
              <li className="block sm:flex gap-2">
                <p className="text-gray-500 font-medium">
                  2021. 09 
                </p>
                <p className="font-medium">
                  웹디자인기능사 - 한국산업인력공단
                </p>
              </li>
              <li className="block sm:flex gap-2 pt-2">
                <p className="text-gray-500 font-medium">
                  2021. 03 ~ 2021.08 
                </p>
                <p className="font-medium">
                  UI/UX 반응형 웹디자인&웹퍼블리셔 - 그린컴퓨터아카데미
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 lg:mt-20 p-6 md:p-8 border-1 border-gray-300 rounded-2xl bg-white/60"
        >
          <strong className="text-xl font-semibold">CASE STUDIES</strong>
          <p className="pt-3 text-base md:text-lg text-gray-500 font-medium">
            실무에서 만든 시스템 4건의 아키텍처, 기술 선택 이유, 트러블슈팅 과정을
            문서로 정리했습니다. 회사 코드의 사본이 아니라 일반화해 재구성한
            문서입니다.
          </p>
          <div className="pt-6">
            <MoveLink
              to="https://github.com/jinseungyeol/case-studies"
              text="설계 원칙과 트러블슈팅 문서"
              eventParams={{
                project_title: "case-studies",
                button_label: "설계 원칙과 트러블슈팅 문서",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
