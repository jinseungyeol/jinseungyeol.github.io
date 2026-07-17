import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function MoveLink({ text, to }: { text: string; to: string }) {
  return (
    <Link
      to={to}
      target="_blank"
      className="inline-block group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-4 md:px-6 text-center text-sm lg:text-base font-semibold align-top"
    >
      <div className="flex items-center gap-2">
        <div className="h-1 w-1 md:h-2 md:w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-4 md:group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="size-4 md:size-6" />
      </div>
    </Link>
  );
}
