# gulp-compressor

使用 gulp 压缩 JS、CSS，简单封装了一下，便于通过 JS 来自定义不同的压缩任务

# 安装


## 安装 gulp

```js
npm install --global gulp-cli
```

## 下载 gulp-compressor

```shell
## 下载
git clone git@github.com:niqingyang/gulp-compressor.git
## 进入目录
cd gulp-compressor
```

## 初始化

```shell
npm install
```

# 使用说明

## 默认任务

gulp 的任务配置位于 `tasks` 目录下，默认任务为 `default.js`

执行默认任务：

```shell
// 或者 gulp default
gulp
```

## 自定义任务

在 `tasks` 目录下定义任务 JS 文件，`static.js`，文件名 `static` 为任务名称，内容如下：

```js
const PROJECT_PATH = 'E:/static/';

// 压缩的 JS 文件匹配规则
const JS_PATH = `${PROJECT_PATH}/**/*.js`;

// 压缩的 CSS 文件匹配规则
const CSS_PATH = `${PROJECT_PATH}/**/*.css`;

// 排除不压缩的文件
const EXCLUDE_PATH = [
	`!${PROJECT_PATH}/**/*.min.js`,
	`!${PROJECT_PATH}/**/*.min.css`,
	`!${PROJECT_PATH}/data/**/*`,
	`!${PROJECT_PATH}/esview/**/*`,
	`!${PROJECT_PATH}/service/**/*`,
	`!${PROJECT_PATH}/vendor/**/*`,
	`!${PROJECT_PATH}/static/bootstrap/**/*`,
	`!${PROJECT_PATH}/static/iconfont/**/*`,
	`!${PROJECT_PATH}/static/js/jquery.js`,
	`!${PROJECT_PATH}/static/js/jquery-ui.js`,
	`!${PROJECT_PATH}/**/assets/**/*`,
	`!${PROJECT_PATH}/**/page/**/*`,
	`!${PROJECT_PATH}/**/image_upload/**/*`,
	`!${PROJECT_PATH}/**/layer/**/*`,
	`!${PROJECT_PATH}/**/mobiscroll/**/*`,
	`!${PROJECT_PATH}/**/pic/**/*`,
	`!${PROJECT_PATH}/**/photoclip/**/*`,
	`!${PROJECT_PATH}/**/video/**/*`,
];

// 压缩后文件的输出目录
const DIST_PATH = './dist/static/';

module.exports = {
	js_path: [JS_PATH, ...EXCLUDE_PATH],
	css_path: [CSS_PATH, ...EXCLUDE_PATH],
	dist_path: DIST_PATH,
};
```

执行任务

```shell
gulp static
```

支持同时执行多个任务

```shell
gulp task1 task2 task3
```






