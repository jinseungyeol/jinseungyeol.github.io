import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("common/page/main-page.tsx"),
  // 퍼블리셔 직무 지원용 진입점. 데이터는 공유하고 문구와 순서만 다르다.
  route("publisher", "common/page/publisher-page.tsx"),
] satisfies RouteConfig;
