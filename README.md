# vite-plugin-mdebug

[![](https://img.shields.io/npm/v/vite-plugin-mdebug.svg?style=flat-square)](https://www.npmjs.com/package/vite-plugin-mdebug)
[![](https://img.shields.io/npm/l/vite-plugin-mdebug.svg?style=flat-square)](https://www.npmjs.com/package/vite-plugin-mdebug)
[![](https://img.shields.io/npm/dt/vite-plugin-mdebug.svg?style=flat-square)](https://www.npmjs.com/package/vite-plugin-mdebug)

> vite2 plugin for mdebug

**English** | [中文](./README.zh_CN.md)

## Install (yarn or npm)

**node version:** >=12.0.0

**vite version:** >=2.0.0

```bash
yarn add mdebug
# or
npm i mdebug -S
```

```bash
yarn add vite-plugin-mdebug -D
# or
npm i vite-plugin-mdebug -D
```

## Example

```bash
# vue
cd ./example/vue-demo

yarn install

yarn dev

```

```bash
# react
cd ./example/react-demo

yarn install

yarn dev

```

## Usage

### Config plugin in vite.config.ts

- **Vue** sample config

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMDebug } from 'vite-plugin-mdebug';
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMDebug({
      entry: path.resolve('src/main.ts'),
      localEnabled: true,
      enabled: true,
      config: {
        containerId: ""; // Mdebug mounts the container id. If it is empty, a non-repeating id will be automatically generated inside.
        hideToolbar: [] // Tab id to hide
      }
    })
  ]
});
```

- **React** sample config

```ts
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { viteMDebug } from 'vite-plugin-mdebug';
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
        containerId: ""; // Mdebug mounts the container id. If it is empty, a non-repeating id will be automatically generated inside.
        hideToolbar: [] // Tab id to hide
      }
    })
  ]
});
```

- Different from the production environment and development environment

```ts
// Different from the production environment and development environment
// You can use command / mode to distinguish usage
import { UserConfigExport, ConfigEnv } from 'vite';
import { viteMDebug } from 'vite-plugin-mdebug';
import vue from '@vitejs/plugin-vue';
import * as path from 'path'

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMDebug({
        entry: path.resolve('src/main.ts'), // entry file
        localEnabled: command === 'serve', // dev environment
        enabled: command !== 'serve' || mode === 'test', // build production
        config: { // mdebug options
          containerId: ""; // Mdebug mounts the container id. If it is empty, a non-repeating id will be automatically generated inside.
          hideToolbar: [] // Tab id to hide
        }
      })
    ],
  };
};
```

### viteMDebug Options

```ts
{
  entry: string; // entry file require
  localEnabled?: boolean;
  enabled?: boolean;
  config?: { // mdebug options
    containerId?: string; // Mdebug mounts the container id. If it is empty, a non-repeating id will be automatically generated inside.
    plugins?: MDebugPlugin[]; // Pass in the mdebug plug-in
    hideToolbar?: TabIds[]; // Tab id to hide
  };
}
```

## Options

### entry

**type:** `string`
**require:**

must support.

### localEnabled

**type:** `boolean`

**default:** `false`

### enabled

**type:** `boolean`

**default:** `true`

## License

[MIT](LICENSE)
