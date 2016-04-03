## build-demo

---

build-demo

## 项目相关链接

- PRD：
- DEMO：

## 目录结构

```
.
├── favicon.ico  ---------------------- 页面图标
├── gulpfile.js  ---------------------- gulp入口文件
├── html  ----------------------------- html目录
│   └── index.html  ------------------- 入口页面
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
└── src  ------------------------------ 源码目录
    ├── app  -------------------------- 项目级代码
    │   ├── app.js  ------------------- 项目级脚本逻辑
    │   ├── app.less  ----------------- 全局样式
    ├── components  ------------------- 业务模块集合目录
    ├── i18n  ------------------------- 国际化文案资源文件
    │   ├── en.js
    │   ├── index.js  ----------------- 国际化资源加载器
    │   └── zh-cn.js
    ├── images  ----------------------- 图片资源目录
    └── pages  ------------------------ 页面集合目录
        ├── demo  --------------------- 某一个页面
        │   ├── index.js  ------------- 页面入口文件
        │   ├── PageDemo.js  ---------- 页面视图逻辑
        │   └── PageDemo.less  -------- 页面样式
        └── home  --------------------- 另一个页面
            ├── index.js
            ├── PageHome.js
            └── PageHome.less
```

## 环境准备

具体请参考[这里](http://ux.alibaba.net/products/nowa.html)

环境准备妥当之后，把项目clone下来，切换到对应分支。更新项目依赖：

```
yo alinw:upgrade
```

更新完成后即可开始开发。

## 常用命令

- 开新分支

    **开新分支之前请确保当前分支的文件均已经加入版本控制，否则可能丢失**

    - 小版本自动递增
    ```
    gulp newbranch
    ```

    - 指定版本
    ```
    gulp newbranch --version 1.1.0
    ```

- 启动调试服务器

```
gulp server
```

> 上面的命令会开启一个本地调试服务器（[http://localhost:3000/](http://localhost:3000/)）。此时，项目`src`目录下的任何文件的变化，都会触发实时构建，并把变更同步到浏览器。

- 本地打包压缩

```
gulp
```

- 增加新模块

```
yo alinw:mod
```

选择 `components`。

生成好之后可以在页面中 require 进去使用。

- 增加新页面

```
yo alinw:mod
```

选择 `pages`。

生成好之后打开对应的页面即可访问。

- 查看所有可用命令

```
yo alinw:help
```

- 更多git命令

[Git发布操作流程和日常使用技巧](http://ux.alibaba.net/docs/git-publish.html)

## 页面引用资源列表

项目在本地调试以及打包过程中会输出以下入口文件：

- 如果存在 `app/app.js` 的话，则输出 `app.js`。
- 如果在 `app/app.js` 中引入了样式资源，则输出 `app.css`。
- 如果存在 `pages/page/index.js` 的话，则输出 `page.js`（此处 page 泛指 pages 目录下的任意目录名）。
- 如果在 `page.js` 中引入了样式资源，则输出 `page.css`。

对于一个页面，除了引入外部资源外，一般需要引入 `app.css`、`page.css`、`app.js`、`page.js` 这几个文件。

当项目中存在国际化资源（i18n 目录）时，生成的 app.js 会增加国际化语言后缀（例如：`app-zh-cn.js`），

默认为 `zh-cn`，除非在启动服务器的时候指定语言：

```shell
gulp server --locale en
```

则生成的脚本文件名变为：`app-en.js`。

本地调试服务器并不会向文件系统写入任何文件，请求的资源只存在于内存中。

## CSS约定

具体请参考[这里](http://gitlab.alibaba-inc.com/uxcore/uxcore-kuma/tree/master)。

## 外部工具

脚手架默认引入了以下外部工具库：

| 类库 | 全局名称 |
| ---- | ------ |
| React | React |
| Reflux | Reflux |
| ReactDOM | ReactDOM |
| Lodash | _ |
| jQuery | $ |

> [React](http://reactjs.cn/) 和 [Refulx](https://github.com/reflux/refluxjs) 的使用，请参考各自的官方文档。

## Uxcore 模块

Uxcore 组件库请参考[这里](http://uxcore.github.io/uxcore/)。

### 定制 Uxcore

可通过在 abc.json 中增加相应配置来定制项目所需的 Uxcore，详见 [issue](http://gitlab.alibaba-inc.com/nw/nowa-webpack/issues/8)。

## 国际化解决方案

`src/i18n` 目录为国际化文案资源文件存放目录，其中除了 `index.js` 之外的文件均为国际化语言资源文件。

`index.html` 中通过 `locale` 变量指定当前使用语言。

可以在启动本地调试服务器时，通过 `--locale <locale>` 参数指定当前调试环境使用的语言。

js文件中可使用如下方法来注入国际化文案：

```js
let i18n = require('i18n');
...
i18n("key"[, argv1[, argv2...]])
```

首先会找到对应的语言资源文件，然后通过 key 对应到文案模板。

如果文案中有 `{0}{1}` 变量，将使用 argvX 参数进行替换，更详细的使用说明请参考[这里](https://www.npmjs.com/package/i18n-helper)。

- 国际化资源文件索引命名规范：
  - 全局公用资源：global.xxx
  - 模块所属资源：moduleName.xxx
  - 页面所属资源：pageName.xxx

## 项目中使用图标（或图片）

### 使用图标（svg）

我们推荐使用 svg 作为图标解决方案。

require svg 文件路径将直接返回包含这个 svg 的 react component。

```js
let Star = require('./star.svg');
...
render() {
    return (
        <Star className="star"/>
    );
}
```

### 使用图片（png、jpg、jpeg、gif）

在 js 中 require（或在 css 中 url）一个相对路径的图片资源，将返回这个图片内容的 data-uri。

```js
let img = require('./img.png');
...
render() {
    return (
        <img src={img} alt=""/>
    );
}
```

```css
.abc {
    background-image: url(./img.png);
}
```

## 数据层和模拟数据解决方案

- 请参考 [NattyDB 官方文档](http://jias.github.io/natty-db/)。

## 其他

- 建议使用[es6](http://es6.ruanyifeng.com/)进行编码。
