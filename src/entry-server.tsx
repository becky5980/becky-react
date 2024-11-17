// 服务端渲染入口
// 服务端负责将组件渲染成字符串

import ReactDOMServer from "react-dom/server";

// 路由，需要使用 StaticRouter
import { StaticRouter } from "react-router-dom/server";
console.log("🚀 ~ StaticRouter:", StaticRouter);

// 样式提取
import { ServerStyleSheet } from "styled-components";

import App from "./App";

// 四种不同的路由
// 1. BrowserRouter
// 2. HashRouter
// 3. MemoryRouter
// 4. StaticRouter

// 渲染器
export function render(url: string) {
  // 初始化一个样式提取器
  const styleSheet = new ServerStyleSheet();
  const appHtml = ReactDOMServer.renderToString(
    styleSheet.collectStyles(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
    ),
  );

  // 获取到提取的样式
  const styleTags = styleSheet.getStyleTags();

  return {
    appHtml,
    styleTags,
  };
}
