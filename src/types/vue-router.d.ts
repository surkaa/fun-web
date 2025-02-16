// 扩展vue-router的类型定义
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 页面标题
     */
    title?: string;
  }
}