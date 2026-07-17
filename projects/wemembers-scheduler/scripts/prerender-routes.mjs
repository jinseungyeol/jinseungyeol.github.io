// 정적 호스팅(GitHub Pages)에는 Netlify의 _redirects 같은 SPA 폴백이 없다.
// Pages는 루트 404.html만 사용하므로 하위 디렉터리에 404.html을 둬도 무시된다.
// 그래서 클라이언트 라우트마다 실제 디렉터리와 index.html을 만들어 둔다.
// 그러면 직접 진입(새 탭으로 열리는 목록 페이지의 링크들)이 정상 동작하고,
// URL도 깔끔하게 유지된다.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const routerSrc = join(root, "src/router/index.tsx");
const dist = join(root, "dist");

const src = readFileSync(routerSrc, "utf8");
const paths = [...src.matchAll(/path:\s*"([^"]*)"/g)].map((m) => m[1]);

// 최상위는 "/"(목록)와 "/output"(레이아웃), 나머지는 "/output"의 자식이다.
const parents = paths.filter((p) => p.startsWith("/"));
const children = paths.filter((p) => !p.startsWith("/"));

if (!parents.includes("/output")) {
  throw new Error(`라우터 구조가 예상과 다르다. 최상위 경로: ${parents.join(", ")}`);
}

// index: true 는 "/output" 자신을 가리킨다.
const routes = ["/output", ...children.map((c) => `/output/${c}`)];

// 라우터가 바뀌었는데 정규식이 못 따라가면 조용히 404가 나므로 여기서 막는다.
const MIN = 20;
if (routes.length < MIN) {
  throw new Error(`라우트를 ${routes.length}개만 찾았다(최소 ${MIN}). 정규식이 라우터 구조를 놓쳤을 수 있다.`);
}

const indexHtml = readFileSync(join(dist, "index.html"), "utf8");
for (const r of routes) {
  const dir = join(dist, r);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), indexHtml);
}

if (!existsSync(join(dist, "output/login/index.html"))) {
  throw new Error("프리렌더 결과가 예상 위치에 없다.");
}

console.log(`프리렌더 완료: ${routes.length}개 라우트`);
for (const r of routes) console.log(`  ${r}`);
