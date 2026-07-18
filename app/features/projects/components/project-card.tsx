import { MagicCard } from "~/common/components/ui/magic-card";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";
import MoveLink from "~/common/components/ui/move-link";
import { motion } from "motion/react";

interface ProjectLink {
  to: string;
  text: string;
}

interface ProjectCardProps {
  title: string;
  period: string;
  imageUrl: string;
  imageBg?: string;
  details: { label: string; value: string }[];
  links?: ProjectLink[];
  cardClassName?: string;
}

export default function ProjectCard({
  title,
  period,
  imageUrl,
  imageBg = "gray",
  details,
  links,
  cardClassName = "relative",
}: ProjectCardProps) {
  return (
    <MagicCard
      className="border border-gray-200 hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300"
      gradientFrom="var(--accent)"
      gradientTo= "var(--accent)"
      gradientColor="var(--accent)"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="h-full"
      >
        <Card className={cardClassName}>
          <div className={`flex justify-center items-center p-5 md:p-10 ${imageBg === "white" ? "bg-white" : "bg-gray-100"}`}>
            <img src={imageUrl} alt={title} className="w-[80%] max-w-130 h-auto lg:w-auto lg:h-[250px]" />
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardAction className="font-medium">{period}</CardAction>
          </CardHeader>
          <CardContent>
            <div className="px-6">
              <ul>
                {details.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 mt-1 text-base md:text-lg"
                  >
                    <p className="font-semibold">{item.label}</p>
                    <div>|</div>
                    <p>{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          {links && links.length > 0 && (
            <CardFooter className="flex gap-2 flex-wrap">
              {links.map((l, idx) => (
                <MoveLink
                  key={idx}
                  to={l.to}
                  text={l.text}
                  eventParams={{ project_title: title, button_label: l.text }}
                />
              ))}
            </CardFooter>
          )}
        </Card>
      </motion.div>
    </MagicCard>
  );
}
