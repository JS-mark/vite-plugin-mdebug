import type { Plugin } from 'vite';
import { ResolvedConfig } from 'vite';
import type { viteMDebugOptions } from './types';

export function viteMDebug(opt: viteMDebugOptions): Plugin {
  let viteConfig: ResolvedConfig;
  let isDev = false;
  const { entry, enabled = true, localEnabled = false, config = {} } = opt;

  /**
   * Compatible to solve the windows path problem
   */
  let entryPath = Array.isArray(entry) ? entry : [entry];

  if (process.platform === 'win32')
    entryPath = entryPath.map((item) => item.replace(/\\/g, '/'));

  return {
    name: 'vite:mdebug',
    enforce: 'pre',
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
      isDev = viteConfig.command === 'serve';
    },
    transform(_source: string, id: string) {
      if (entryPath.includes(id)) {
        if (localEnabled && isDev) {
          return {
            code: `${_source};import mDebug from 'mdebug';mDebug.init(${JSON.stringify(
              config
            )});`,
            map: null // support source map
          };
        }

        if (enabled && !isDev) {
          // build prod
          return {
            code: `${_source};import mDebug from 'mdebug';mDebug.init(${JSON.stringify(
              config
            )});`,
            map: null // support source map
          };
        }
      }
      return {
        code: _source,
        map: null // support source map
      };
    }
  };
}

export * from './types';
