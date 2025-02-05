{
"compilerOptions": {
    "baseUrl": "./", // 路径配置
    "paths": {
    "@": ["src"],
    "@/*": ["src/*"]
    },
    "target": "ES2020", // 指定 ECMAScript 版本
    "lib": ["ES2020", "DOM", "DOM.Iterable"], // 要包含在编译中的依赖库文件列表
    "allowJs": true, // 允许编译 JavaScript 文件
    "skipLibCheck": true, // 跳过所有声明文件的类型检查
    "esModuleInterop": true, // 禁用命名空间引用 (import * as fs from "fs") 启用 CJS/AMD/UMD 风格引用 (import fs from "fs")
    "allowSyntheticDefaultImports": true, // 允许从没有默认导出的模块进行默认导入
    "strict": true, // 启用所有严格类型检查选项
    "forceConsistentCasingInFileNames": true, //	禁止对同一个文件的不一致的引用。
    "noFallthroughCasesInSwitch": true, // 报告switch语句的fallthrough错误。（即，不允许switch的case语句贯穿）
    "module": "esnext", // 指定模块代码生成
    "moduleResolution": "node", // 使用 Node.js 风格解析模块
    "resolveJsonModule": true, // 允许使用 .json 扩展名导入的模块
    "isolatedModules": true, // 将每个文件作为单独的模块
    "noEmit": false, // 不输出(意思是不编译代码，只执行类型检查)
    "jsx": "react-jsx",
    "noUnusedLocals": true, // 报告未使用的本地变量的错误
    "noUnusedParameters": false, // 报告未使用参数的错误
    "experimentalDecorators": true, // 启用对ES装饰器的实验性支持
},
"include": [
    "src" // TypeScript文件应该进行类型检查
],
"exclude": ["node_modules", "build"] // 不进行类型检查的文件
  }
  