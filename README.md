# nodejs开发第三方库模板

## 说明

- 在`webpack.config.js`里添加库的名称
- 在`package.json`里设置项目名、作者等
- 设置`debug`库的log前缀 如`DEBUG=wuyang*`
- 在`example/`目录下 添加使用的例子
- 执行`npm publish`发布你的库包时 会先执行`scripts.prepublishOnly`里的脚本
- 发布npm包时默认是没有包括`lib/`目录下的源代码 开启步骤
  - `package.json`文件files字段添加`lib`
  - `.npmignore`文件注释`lib`字段
- 涉及密码等隐私内容 请参考`.env-demo`文件

## 依赖

项目依赖以下库，可以在你的程序里直接使用，不用再次安装

- debug
- @babel/runtime 和@babel/plugin-transform-runtime配套
- core-js 结合@babel/preset-env用于替代@babel/polyfill

## 更新-发布包

- 更新版本 npm version patch
- 发布 npm publish
