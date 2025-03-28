# 项目修改和错误记录

## 1. 动态路由页面的静态导出问题

### 问题描述

在使用 `output: 'export'` 配置进行静态导出时，动态路由页面（`/game/[slug]` 和 `/category/[slug]`）无法正常工作。错误信息显示这些页面缺少 `generateStaticParams()` 函数。

### 解决方案

将动态路由页面拆分为服务器组件和客户端组件：

1. 创建了 `GamePageClient.js` 和 `CategoryPageClient.js` 两个客户端组件
2. 将所有客户端逻辑（如路由跳转、事件处理等）移到客户端组件中
3. 保持页面组件作为服务器组件，并添加了 `generateStaticParams` 函数来生成静态路由

### 修改次数

- 第一次修改：添加 `generateStaticParams` 函数
- 第二次修改：拆分服务器组件和客户端组件

## 2. 图片优化与静态导出的兼容性问题

### 问题描述

在使用 `output: 'export'` 配置时，Next.js 的默认图片优化功能不兼容。错误信息显示：`Error: Image Optimization using the default loader is not compatible with export.`

### 解决方案

在 `next.config.js` 中配置 `images.unoptimized: true` 来禁用图片优化功能。

### 修改次数

- 第一次修改：尝试移除 `output: 'export'` 配置
- 第二次修改：添加 `images.unoptimized: true` 配置

## 3. 构建缓存问题

### 问题描述

在修改配置后，构建过程中出现缓存相关的问题，导致构建失败。

### 解决方案

删除 `.next` 目录，清除构建缓存后重新构建。

### 修改次数

- 第一次修改：直接重新构建
- 第二次修改：清除缓存后重新构建

## 最终配置

```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  output: "export", // 生成静态文件到out目录
  poweredByHeader: false, // 移除X-Powered-By头
  images: {
    unoptimized: true, // 禁用图片优化以支持静态导出
  },
};
```

## 经验总结

1. 在使用 Next.js 的静态导出功能时，需要注意：

   - 动态路由页面需要实现 `generateStaticParams` 函数
   - 某些服务器端功能（如图片优化）需要特殊配置或禁用
   - 客户端组件和服务器组件的合理拆分很重要

2. 当遇到构建问题时：

   - 检查错误信息，理解问题的根本原因
   - 必要时清除缓存重新构建
   - 考虑是否有替代方案或配置选项

3. 代码组织建议：
   - 将客户端逻辑和服务器端逻辑清晰分离
   - 使用适当的组件拆分策略
   - 保持配置文件的简洁和可维护性
