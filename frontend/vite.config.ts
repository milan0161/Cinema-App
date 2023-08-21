import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  // alias: {
  //   '@': path.resolve(__dirname, './src/'),
  //   '@features': path.resolve(__dirname, './src/features/'),
  //   '@app': path.resolve(__dirname, './src/app/'),
  //   '@components': path.resolve(__dirname, './src/common/components/'),
  //   '@api': path.resolve(__dirname, './src/api/'),
  // },
  // },
});
