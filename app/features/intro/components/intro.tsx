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
              <p>토끼처럼 빠르게 적응하며</p>
              <p>거북이처럼 묵묵하게 일하는</p>
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
              빠른 대응력으로 유연하게 움직이면서도{" "}
            </p>
            <p className="inline sm:block">
              흐트러짐 없이 꾸준한 실행력으로 기본을 지키며 완성도를 높여가는{" "}
            </p>
            <p className="inline sm:block">퍼블리셔 진승열입니다.</p>
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
