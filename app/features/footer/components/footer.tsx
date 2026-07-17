import { TextAnimate } from "~/common/components/ui/text-animate";

export default function FooterComponent() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t-1 border-black">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a7de8d] opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-[#baeda2]"></span>
          </span>
          <TextAnimate
            as="span"
            className="text-sm font-semibold"
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
            Available Now
          </TextAnimate>
        </div>
        <TextAnimate
          as="span"
          className="text-sm font-semibold"
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
          Made By Jin
        </TextAnimate>
      </div>
    </footer>
  );
}
