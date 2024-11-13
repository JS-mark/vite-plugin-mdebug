# vite-plugin-mdebug

[![](https://img.shields.io/npm/v/vite-plugin-mdebug.svg?style=flat-square)](https://www.npmjs.com/package/vite-plugin-mdebug)
[![](https://img.shields.io/npm/l/vite-plugin-mdebug.svg?style=flat-square)](https://www.npmjs.com/package/vite-plugin-mdebug)
[![](https://img.shields.io/npm/dt/vite-plugin-mdebug.svg?style=flat-square)](https://www.npmjs.com/package/vite-plugin-mdebug)

> vite2 plugin for mdebug

**中文** | [English](./README.md)

## 安装 (yarn or npm)

**node version:** >=12.0.0

**vite version:** >=2.0.0

```bash
yarn add mdebug
# or
npm install mdebug -S
# or
pnpm add mdebug
```

```bash
yarn add vite-plugin-mdebug -D
# or
npm install vite-plugin-mdebug -D
# or
pnpm add vite-plugin-mdebug -D
```

## 示例

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

## 使用

### vite.config.ts 配置

- **Vue** 简单配置

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
        containerId: ""; // mdebug挂载容器id, 如果传空, 内部会自动生成一个不重复的id,
        hideToolbar: [] // 要隐藏的tab
      }
    })
  ]
});
```

- **React** 简单配置

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
        containerId: ""; // mdebug挂载容器id, 如果传空, 内部会自动生成一个不重复的id,
        hideToolbar: [] // 要隐藏的tab
      }
    })
  ]
});
```

- 区分开发环境和生产打包环境

```ts
// 你可以使用 command / mode 来区分是否使用
import { UserConfigExport, ConfigEnv } from 'vite';
import { viteMDebug } from 'vite-plugin-mdebug';
import vue from '@vitejs/plugin-vue';
import * as path from 'path'

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMDebug({
        entry: path.resolve('src/main.ts'), // 入口文件
        localEnabled: command === 'serve', // serve开发环境下
        enabled: command !== 'serve' || mode === 'test', // 打包环境下/发布测试包
        config: { // mdebug 配置项
          containerId: ""; // mdebug挂载容器id, 如果传空, 内部会自动生成一个不重复的id,
        hideToolbar: [] // 要隐藏的tab
        }
      })
    ],
  };
};
```

## 配置

### entry

**type:** `string`
**require:**

必须提供

### localEnabled

**type:** `boolean`

**default:** `false`

### enabled

**type:** `boolean`

**default:** `true`

## License

[MIT](LICENSE)
