import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMDebug } from '../../src';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMDebug({
      entry: path.resolve('src/main.ts'),
      localEnabled: true,
      enabled: true,
      config: {
        containerId: '',
        hideToolbar: []
      }
    })
  ]
});
