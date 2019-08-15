# gulp-compressor

使用 gulp 压缩 JS、CSS，简单封装了一下，便于通过 JS 来自定义不同的压缩任务

# 安装


1. 安装 gulp

```js
npm install --global gulp-cli
```

2. 下载 gulp-compressor

```shell
## 下载
git clone git@github.com:niqingyang/gulp-compressor.git
## 进入目录
cd gulp-compressor
```

3. 初始化

```shell
npm install
```

# 使用说明

1. 默认任务

gulp 的任务配置位于 `tasks` 目录下，默认任务为 `default.js`

执行默认任务：

```shell
// 或者 gulp default
gulp
```

`default` 任务默认会将压缩后的文件输出到 `dist/default` 目录下

2. 自定义任务

在 `tasks` 目录下定义任务 JS 文件，`static.js`，文件名 `static` 为任务名称，内容如下：

```js
// 项目目录
const PROJECT_PATH = './src/static/';

// 压缩后文件的输出目录
const DIST_PATH = './dist/static/';

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

// 需要复制的文件
const COPY_PATH = [
	`${PROJECT_PATH}/**/*.jpg`,
	`${PROJECT_PATH}/**/*.jpeg`,
	`${PROJECT_PATH}/**/*.png`,
	`${PROJECT_PATH}/**/*.gif`,
	`${PROJECT_PATH}/**/*.svg`,
	`${PROJECT_PATH}/**/*.otf`,
	`${PROJECT_PATH}/**/*.eot`,
	`${PROJECT_PATH}/**/*.ttf`,
	`${PROJECT_PATH}/**/*.woff`,
	`${PROJECT_PATH}/**/*.min.js`,
	`${PROJECT_PATH}/**/*.min.map`
];

module.exports = {
	js_path: [JS_PATH, ...EXCLUDE_PATH],
	css_path: [CSS_PATH, ...EXCLUDE_PATH],
	dist_path: DIST_PATH,
	// 如果不需要复制文件此处可以注释掉
	copy_path: COPY_PATH,
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






