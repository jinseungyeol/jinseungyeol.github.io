import { motion } from "motion/react";
import { RetroGrid } from "~/common/components/ui/retro-grid";
import { VelocityScroll } from "~/common/components/ui/scroll-based-velocity";

export default function IntroComponent() {
  return (
    <section id="intro" className="mx-auto">
      <div className="relative">
        <RetroGrid />
        <div className="relative pt-35 lg:pt-50 pb-10 px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-10 md:leading-12 lg:leading-20">
              <p>반복되는 비효율을</p>
              <p>AI와 자동화로 걷어내는</p>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            viewport={{ once: true }}
            className="py-10 lg:py-20 text-center font-medium text-lg lg:text-2xl leading-7 lg:leading-10 text-gray-500"
          >
            <p className="inline sm:block">
              탄탄한 마크업을 기본으로, 도구가 필요하면 직접 만드는 개발자
              진승열입니다.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative flex w-full flex-col items-center justify-center py-10 lg:py-20 overflow-hidden text-primary"
      >
        <VelocityScroll defaultVelocity={3}>
          JIN's WEB PORTFOLIO 💻
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </motion.div>
    </section>
  );
}
