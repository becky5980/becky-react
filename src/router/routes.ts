/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转 重定向时，默认不会携带原 url 的查询参数，如需保持原参数，添加 @params keepQuery:true 选项即可
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * *注意 中的每个组件会给当前的路由组件增加一层嵌套路由，如果你希望路由结构不发生变化，推荐使用高阶组件(HOC)。
 * @doc https://umijs.org/docs/guides/routes
 */

import About from '@/pages/About';
import Home from '@/pages/Home';
import Study from '@/pages/Study';

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/study/',
        name: 'study',
        component: Study
      },
      {
        path: '/about/',
        name: 'About',
        component: About
      }
    ]
  }
];
