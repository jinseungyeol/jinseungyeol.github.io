import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  // 메인 페이지를 빌드 시 정적 HTML로 생성해 메타태그(og 등)가 크롤러에 보이게 한다
  prerender: ["/"],
} satisfies Config; 