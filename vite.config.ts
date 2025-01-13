import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteRenderCode from './vitePlugin/viteRenderCode';
// import MonacoEditorPlugin from 'vite-plugin-monaco-editor';

console.log(path.resolve(__dirname, 'src/common'));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteRenderCode(vue),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // MonacoEditorPlugin({}),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@leafer-in': path.resolve(__dirname, 'src/common/in/packages'),
    },
  },
});
