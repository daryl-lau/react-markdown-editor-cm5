import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // visualizer({ open: true, gzipSize: true, brotliSize: true })
  ],
  build: {
    outDir: 'lib',
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'index',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'jquery',
        'lodash',
        'dayjs',
        'rc-trigger',
        're-resizable',
        'uslug',
        'classnames',
        'highlight.js',
        'codemirror',
        'markdown-it',
        'markdown-it-emoji',
        'markdown-it-sub',
        'markdown-it-sup',
        'markdown-it-ins',
        'markdown-it-mark',
        'markdown-it-alerts',
        'markdown-it-anchor',
        'markdown-it-task-lists',
        'markdown-it-emoji',
        'markdown-it-footnote',
        'markdown-it-abbr',
        'markdown-it-deflist',
        'markdown-it-mathjax3',
        'mermaid',
      ],
    },
  },
});
