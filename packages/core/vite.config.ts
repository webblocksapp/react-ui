import fs from 'fs';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const { peerDependencies, devDependencies } = packageJson;
const external = [
  ...Object.keys(peerDependencies),
  ...Object.keys(devDependencies),
];

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ include: 'src' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: (format: string) => {
        return `${format}/index.js`;
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external,
    },
  },
});
