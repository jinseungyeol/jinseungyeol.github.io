import { motion } from "motion/react";
import React from "react";

interface SkillCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: React.ReactNode;
  align?: "left" | "right";
}

export default function SkillCard({
  imgSrc,
  imgAlt,
  title,
  description,
  align = "left",
}: SkillCardProps) {
  // 이미지 위치에 따라 left/right 스타일 분기
  const isLeft = align === "left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative lg:w-[42%] ${
        !isLeft ? "lg:self-end lg:pl-5 lg:pr-25" : ""
      } p-5 pt-15 md:pt-5 md:pl-25 mb-20 xl:-mb-10 border-1 border-primary rounded-2xl bg-white shadow-lg`}
    >
      <div
        className={`absolute -top-10 md:-top-5 ${
          isLeft
            ? "left-5 md:-left-10"
            : "right-[calc(100%-6rem)] md:right-[calc(100%-5rem)] lg:-right-10"
        } size-20 md:size-30 shadow-2xl rounded-3xl border-1 border-primary overflow-hidden`}
      >
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <strong className="text-xl">{title}</strong>
      <div className="pt-5 md:text-lg md:leading-8 font-medium">
        {description}
      </div>
    </motion.div>
  );
}
