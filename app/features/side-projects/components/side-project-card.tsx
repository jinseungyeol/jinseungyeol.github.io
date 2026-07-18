import { Card, CardAction } from "~/common/components/ui/card";
import { CardContent } from "~/common/components/ui/card";
import { CardFooter } from "~/common/components/ui/card";
import { CardHeader } from "~/common/components/ui/card";
import { CardTitle } from "~/common/components/ui/card";
import { MagicCard } from "~/common/components/ui/magic-card";
import { motion } from "framer-motion";
import MoveLink from "~/common/components/ui/move-link";

interface SideProjectCardProps {
  title: string;
  links: { to: string; text: string }[];
  period: string;
  imageUrl: string;
  details: { label: string; value: string }[];
}

export default function SideProjectCard({
  title,
  links,
  period,
  imageUrl,
  details,
}: SideProjectCardProps) {
  return (
    <MagicCard
      className="flex-1 hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300"
      gradientFrom="var(--accent)"
      gradientTo="var(--accent)"
      gradientColor="var(--accent)"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="h-full"
      >
        <Card className="relative">
          <div className="flex justify-center items-center">
            <img src={imageUrl} alt="" />
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardAction className="font-medium">{period}</CardAction>
          </CardHeader>
          <CardContent>
            <div className="px-5 min-h-[120px]">
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
