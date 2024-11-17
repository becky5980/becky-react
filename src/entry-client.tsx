// 客户端渲染入口
// 职责是：将服务端渲染的内容 水合 Hydrate 到客户端的 DOM 中
// hydrate
import React from "react";
import ReactDOM from "react-dom/client";

// 引入路由
import { BrowserRouter } from "react-router-dom";

// 应用入口
import App from "./App";

// ReactDOM.createRoot

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
