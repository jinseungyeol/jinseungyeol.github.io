import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  // 메인 페이지를 빌드 시 정적 HTML로 생성해 메타태그(og 등)가 크롤러에 보이게 한다
  // /publisher 는 퍼블리셔 지원용 진입점이라 직접 접근과 메타 노출이 필요해 함께 프리렌더한다
  prerender: ["/", "/publisher"],
} satisfies Config;
