import { defineConfig } from "umi";

export default defineConfig({
  history: {
    type: 'hash'
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
