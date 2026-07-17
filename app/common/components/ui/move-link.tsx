import { ArrowRight } from "lucide-react";

// 링크 대상은 모두 이 사이트 밖(또는 /project 아래의 정적 데모)이라
// react-router의 <Link> 대신 <a>를 쓴다. <Link>를 쓰면 "/project/..." 같은
// 내부 경로를 클라이언트 라우팅으로 가로채는데, 매칭되는 라우트가 없어 깨진다.
export default function MoveLink({ text, to }: { text: string; to: string }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  );
}
