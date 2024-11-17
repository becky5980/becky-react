import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import lessPlugin from "vite-plugin-less";

export default defineConfig({
  plugins: [
    react()

    // lessPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly', //只能驼峰命名法
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    // preprocessorOptions: {
    //   less: {
    //     modifyVars: themeVariables,
    //     javascriptEnabled: true
    //   }
    // }
  },
  build: {
    ssr: true,
    minify: false
  },
  ssr: {
    format: 'esm',
    noExternal: ['react-router-dom', 'styled-components']
  }
});
