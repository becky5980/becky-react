// 服务端服务入口
// 导入相关的依赖
const express = require("express");
const fs = require("node:fs");
const path = require("node:path");
// vite 服务
// 因为 react 需要编译的哦
const { createServer: createViteServer } = require("vite");

// 定义一个服务

async function createServer() {
  // 创建服务
  const app = express();

  // 创建 vite 服务
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // 给到 app 中间件
  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;

    // 获取到 template
    let template = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf-8"
    );
    // 接下来需要编译 html 入口的 js，就是 react
    // console.log('🚀 ~ app.use ~ template:', template)
    template = await vite.transformIndexHtml(url, template);

    const { render } = await vite.ssrLoadModule(
      path.resolve(__dirname, "../src/entry-server.tsx")
    );

    // 使用渲染器渲染
    const { appHtml, styleTags } = await render(url);

    // 不应该是直接给到渲染器，因为这个组件的结果，我们应该要把组件结果和 html 模板进行合并

    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<!--app-css-->`, styleTags);

    res.end(html);
  });

  app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
  });
}

// 启动服务
createServer();
