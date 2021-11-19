import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { viteMDebug } from '../../src';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    viteMDebug({
      entry: path.resolve('src/main.tsx'),
      localEnabled: true,
      enabled: true,
      config: {
        containerId: '',
        hideToolbar: []
      }
    })
  ]
});
