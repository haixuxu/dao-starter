import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from "vite-plugin-svgr";

const resolveAlias: Record<string, string> = {
  '@': resolve(__dirname, './src'),
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      // 设置文件目录别名
      // 根目录地址变更，也需要调整
      alias: resolveAlias,
    },
    plugins: [react(),svgr(),nodePolyfills()],
  };
});
