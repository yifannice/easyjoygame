# EasyJoy 游戏平台 - MVP 开发计划

## MVP 范围

为了快速验证产品概念并获得用户反馈，我们将先开发一个包含 9 个游戏的最小可行产品(MVP)版本。这个版本将专注于核心功能，确保基本用户体验流畅。

## MVP 核心功能

1. 首页展示全部 9 个游戏
2. 简单分类系统（休闲、动作、射击、益智、棋牌、经典）
3. 游戏详情页与 iframe 嵌入
4. 基础导航菜单
5. 移动端基本适配

## 开发任务清单

### 1. 项目初始化与基础设置 (1-2 天)

- [x] 创建 Next.js 项目
- [ ] 配置 Tailwind CSS 和基础样式
- [ ] 设置 GitHub 仓库
- [ ] 创建基本项目结构
- [ ] 配置基础颜色变量（苹果色系）

### 2. 数据准备 (1 天)

- [ ] 创建游戏数据 JSON 文件（包含 9 个游戏的所有信息）
- [ ] 设计简单的数据获取函数
- [ ] 准备游戏缩略图和描述内容
- [ ] 建立游戏与分类的关联

### 3. 布局与导航开发 (2 天)

- [ ] 开发全局 Header 组件
  - [ ] 实现 Logo 和品牌展示
  - [ ] 创建主导航菜单
  - [ ] 添加分类快捷入口
- [ ] 创建响应式布局容器
- [ ] 实现移动端菜单切换

### 4. 首页开发 (1-2 天)

- [ ] 设计并实现首页布局
- [ ] 创建游戏卡片组件
- [ ] 展示所有 9 个游戏
- [ ] 添加分类筛选功能

### 5. 游戏详情页开发 (2 天)

- [ ] 创建游戏详情页模板
- [ ] 实现动态路由([slug]模式)
- [ ] 开发 iframe 容器组件
- [ ] 添加游戏信息展示区
- [ ] 实现"返回"和"相关游戏"功能

### 6. 分类页面开发 (1 天)

- [ ] 创建分类页面模板
- [ ] 实现分类页动态路由
- [ ] 添加分类标题和描述
- [ ] 展示分类下的游戏

### 7. 简单搜索功能 (1 天)

- [ ] 创建基础搜索组件
- [ ] 实现前端搜索逻辑
- [ ] 添加搜索结果页面

### 8. UI 美化与响应式调整 (2 天)

- [ ] 统一应用颜色主题
- [ ] 优化组件间距和布局
- [ ] 适配不同尺寸的移动设备
- [ ] 改进游戏卡片和详情页视觉效果

### 9. SEO 基础优化 (1 天)

- [ ] 配置基本 meta 标签
- [ ] 添加动态标题和描述
- [ ] 实现规范 URL 结构
- [ ] 创建简单的 sitemap

### 10. 部署与测试 (1-2 天)

- [ ] 配置 Cloudflare Pages 部署
- [ ] 设置自定义域名
- [ ] 进行跨浏览器测试
- [ ] 移动端兼容性测试
- [ ] 游戏 iframe 加载测试

## 示例游戏数据结构

```javascript
// games.js
export const games = [
  {
    id: "tetris",
    title: "Classic Tetris",
    slug: "classic-tetris",
    description:
      "The classic block-stacking puzzle game that's easy to learn but hard to master.",
    thumbnail: "/images/games/tetris.jpg",
    categories: ["puzzle", "classic"],
    iframeUrl: "https://example.com/games/tetris",
    instructions: "Use arrow keys to move blocks, spacebar to drop.",
    featured: true,
  },
  // ...其他8个游戏
];

// categories.js
export const categories = [
  { id: "casual", name: "Casual", slug: "casual", icon: "👾" },
  { id: "action", name: "Action", slug: "action", icon: "💥" },
  { id: "shooter", name: "Shooter", slug: "shooter", icon: "🔫" },
  { id: "puzzle", name: "Puzzle", slug: "puzzle", icon: "🧩" },
  { id: "card", name: "Card", slug: "card", icon: "🃏" },
  { id: "classic", name: "Classic", slug: "classic", icon: "🎮" },
];
```

## 简化的项目结构
