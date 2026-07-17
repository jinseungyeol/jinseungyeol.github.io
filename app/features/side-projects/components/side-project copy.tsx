import { Ripple } from "~/common/components/ui/ripple";
import { TextAnimate } from "~/common/components/ui/text-animate";
import SideProjectCard from "./side-project-card";
import { DotPattern } from "~/common/components/ui/dot-pattern";
import { cn } from "~/lib/utils";
import { CardContent } from "~/common/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/common/components/ui/carousel";
import { Card } from "~/common/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { motion } from "motion/react";
import sideProjectData from "~/data/side-project-data.json";

export const SideProject = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  return (
    <div
      id="sideProjects"
      className="relative pt-20 mt-50 bg-accent before:absolute before:inset-0 before:-top-[20%] lg:before:-top-[10%] before:bottom-[100%] before:z-50 before:bg-gradient-to-t before:from-[var(--accent)]"
    >
      <div className="relative flex items-center justify-center h-[420px]">
        <Ripple numCircles={4} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
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
            Frontend Side Projects
          </TextAnimate>
        </motion.div>
      </div>
      <div className="relative py-20 -mx-5 md:-mx-0">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(55vw_circle_at_center,_white,_transparent)]"
          )}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative max-w-[1400px] mx-auto px-5 md:px-30">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplay.current]}
              onMouseEnter={() => autoplay.current.stop()}
              onMouseLeave={() => autoplay.current.play()}
            >
              <CarouselContent className="py-6 -ml-4 md:-ml-0">
                {sideProjectData.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 basis-[90%]"
                  >
                    <Card>
                      <CardContent>
                        <SideProjectCard key={item.title} {...item} />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
