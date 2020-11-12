# ZWY-CLI

### 项目结构说明：
1. templates：脚手架创建文件所用的模板目录，使用`ejs`模板引擎，以`filename + '.ejs'`作为模板的命名规则，会在生成目标文件时去掉`.ejs`后缀

2. dist：脚手架执行后的结果

3. cli.js：脚手架执行脚本

一共有三个问题：

1) 项目名称，输入后会被写入到`package.json`的`name`字段当中  

2) 是否启用`eslint`，选择是的话，会在`package.json`的`devDependencies`中添加
```json
"eslint": "^6.8.0",
"eslint-config-airbnb-base": "^14.1.0"
```
两个模块依赖，并且也会创建`.eslintrc.js`文件  

3) 选择项目运行环境，来指定`.eslintrc.js`中所支持的环境，会对`env`字段进行相应的设置。
```js
env: {
  browser: true,
  node: false,
},
```