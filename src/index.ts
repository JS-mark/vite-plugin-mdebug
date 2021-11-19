import type { Plugin } from 'vite';
import { ResolvedConfig } from 'vite';
import type { viteMDebugOptions } from './types';

export function viteMDebug(opt: viteMDebugOptions): Plugin {
  let viteConfig: ResolvedConfig;
  let isDev = false;
  const { entry, enabled = true, localEnabled = false, config = {} } = opt;

  return {
    name: 'vite:mdebug',
    enforce: 'pre',
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
      isDev = viteConfig.command === 'serve';
    },
    transform(_source: string, id: string) {
      if (id === entry) {
        if (localEnabled && isDev) {
          // dev
          return `${_source};import mDebug from 'mdebug';mDebug.init(${JSON.stringify(
            config
          )});`;
        }

        if (enabled && !isDev) {
          // build prod
          return `${_source};import mDebug from 'mdebug';mDebug.init(${JSON.stringify(
            config
          )});`;
        }
      }
      return _source;
    }
  };
}

export * from './types';
