import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages의 /project/wemembers-scheduler/ 하위로 배포된다.
  // '/' 로 두면 산출물이 /assets/... 를 참조해 404가 난다.
  base: '/project/wemembers-scheduler/',
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]', // ✅ 이걸 써야 함
    }
  }
})