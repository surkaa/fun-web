# 💖 互动式网页表白神器 [![Vue Badge](https://img.shields.io/badge/Vue-3.4-4FC08D?logo=vue.js)](https://vuejs.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-pink.svg)](https://opensource.org/licenses/MIT)

✨ 抖音同款爆火互动页面复刻版 | 支持深度定制 | 程序员浪漫必备

<p align="center">
  <img src="public/svgs/1F970.svg" width="200" alt="喜爱">
  <img src="public/svgs/1F928.svg" width="200" alt="疑惑">
  <img src="public/svgs/1F620.svg" width="200" alt="生气">
</p>

## 🎮 在线体验

[![Demo Button](https://img.shields.io/badge/立即体验-FF69B4?style=for-the-badge&logo=chromium)](https://your-demo-link.com)
*推荐使用移动端访问，体验更佳*

## 🌟 核心功能

### 🤖 智能互动系统

- **逃避点击机制**：拒绝按钮随机位移 + 自动放大接受按钮
- **多状态表情系统**：6种精细表情动画（害羞/期待/生气/哭泣等）
- **拖拽物理引擎**：爱心支持抛物线拖拽效果

### 🎨 深度定制支持

```bash
# 快速自定义配置
├── public/svgs/          # 表情图标库（SVG矢量）
├── src/views/            # 交互逻辑组件
└── src/style.css        # 动画参数调节
```

### 📱 全平台适配

- 移动端优先设计
- 桌面端粒子背景特效
- 自动DPI适配（支持4K屏）

## 🛠️ 快速启动

```bash
# 推荐使用pnpm
pnpm install && pnpm dev
```

### 构建指令

| 指令             | 功能            |
|----------------|---------------|
| `pnpm dev`     | 启动开发服务器 (热更新) |
| `pnpm build`   | 生产环境构建        |
| `pnpm preview` | 本地预览生产构建      |

## 🎯 定制指南

### 基础定制（免费）

```vue
<!-- 修改src/views/LoveConfession.vue -->
const messages = [
'再考虑下嘛',   // 修改提示文案
'真的忍心吗',   // 最多支持6个状态
'我要哭了哦'
]
```

### 高级定制（[联系作者](https://your-contact-page.com)）

```ts
// 专业定制服务示例
interface SpecialConfig {
  particleEffect: 'sakura' | 'snow'  // 粒子特效
  voicePack: boolean                 // 语音包支持
  miniGame: 'memory' | 'puzzle'      // 内置小游戏
}
```

## 🤝 贡献指南

欢迎提交PR！请先阅读：

1. 图标资源请存放至`public/svgs/`
2. 页面路由配置见`src/router/index.ts`
3. 使用commitizen规范提交信息

[//]: # (## 📜 开源协议)

[//]: # ()

[//]: # (MIT License | 商业使用请遵守[附加条款]&#40;LICENSE-COMMERCIAL&#41;)

---

<details>
<summary>📷 效果预览</summary>

![交互演示](gif/preview.gif)
</details>

> 💌 本项目持续维护中，点亮⭐️获取更新通知！定制需求请通过[邮箱](mailto://suralcarywn@163.com)联系
