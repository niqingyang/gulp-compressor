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
const SRC_PATH = './src/static/';

// 压缩后文件的输出目录
const DEST_PATH = './dest/static/';

// 压缩的 JS 文件匹配规则
const JS_PATH = `{SRC_PATH}/**/*.js`;

// 压缩的 CSS 文件匹配规则
const CSS_PATH = `{SRC_PATH}/**/*.css`;

// 排除不压缩的文件
const EXCLUDE_PATH = [
	`!{SRC_PATH}/**/*.min.js`,
	`!{SRC_PATH}/**/*.min.css`,
	`!{SRC_PATH}/data/**/*`,
	`!{SRC_PATH}/esview/**/*`,
	`!{SRC_PATH}/service/**/*`,
	`!{SRC_PATH}/vendor/**/*`,
	`!{SRC_PATH}/static/bootstrap/**/*`,
	`!{SRC_PATH}/static/iconfont/**/*`,
	`!{SRC_PATH}/static/js/jquery.js`,
	`!{SRC_PATH}/static/js/jquery-ui.js`,
	`!{SRC_PATH}/**/assets/**/*`,
	`!{SRC_PATH}/**/page/**/*`,
	`!{SRC_PATH}/**/image_upload/**/*`,
	`!{SRC_PATH}/**/layer/**/*`,
	`!{SRC_PATH}/**/mobiscroll/**/*`,
	`!{SRC_PATH}/**/pic/**/*`,
	`!{SRC_PATH}/**/photoclip/**/*`,
	`!{SRC_PATH}/**/video/**/*`,
];

// 需要复制的文件
const COPY_PATH = [
	`{SRC_PATH}/**/*.jpg`,
	`{SRC_PATH}/**/*.jpeg`,
	`{SRC_PATH}/**/*.png`,
	`{SRC_PATH}/**/*.gif`,
	`{SRC_PATH}/**/*.svg`,
	`{SRC_PATH}/**/*.otf`,
	`{SRC_PATH}/**/*.eot`,
	`{SRC_PATH}/**/*.ttf`,
	`{SRC_PATH}/**/*.woff`,
	`{SRC_PATH}/**/*.min.js`,
	`{SRC_PATH}/**/*.min.map`
];

module.exports = {
	js_path: [JS_PATH, ...EXCLUDE_PATH],
	css_path: [CSS_PATH, ...EXCLUDE_PATH],
	// 将在运行过程中替换路径中的 {SRC_PATH}
	src_path: SRC_PATH,
	// 输出目录
	dest_path: DEST_PATH,
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

在命令行中指定 src 和 dest 目录参数

```shell
gulp default --src E:/static/ --dest E:/static_dest/
```

> 注意：
> - 如果指定了参数 src 但没指定 dest，则 dest 默认为 src + "_dest"
> - 命令行中的目录参数优先级最高


3. 该脚本除压缩 JS、CSS 输出到指定目录外，还具备从目录中分离出指定文件的功能




