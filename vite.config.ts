import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      staticImport: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Utilise l'extension .ts
      name: 'ReactConfirmModal',
      fileName: (format) => `react-confirm-modal.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          antd: 'Antd',
        },
      },
    },
  },
})
