import { TextAnimate } from "./ui/text-animate";
import { memo } from "react";

function WorksTitle() {
  return (
    <div className="mb-10 md:mb-20 text-center">
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
        Works
      </TextAnimate>
    </div>
  )
}

export default memo(WorksTitle);