export type TabIds =
  | 'system'
  | 'elements'
  | 'console'
  | 'application'
  | 'network'
  | 'performance'
  | 'settings';

export interface MDebugPlugin {
  id: string; // tab id
  name: string; // tab对应的中文title,
  enName: string; // tab对应的英文title
  component: any; // tab对应的react组件
}

export interface viteMDebugOptions {
  entry: string; // entry file
  localEnabled?: boolean; // serve dev enabled
  enabled?: boolean; // enabled
  config?: MOption; // medebug option
}

export interface MOption {
  containerId?: string; // mdebug挂载容器id, 如果传空, 内部会自动生成一个不重复的id,
  plugins?: MDebugPlugin[]; // 传入mdebug插件
  hideToolbar?: TabIds[]; // 传入需要隐藏的tab id
}
