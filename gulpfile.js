var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
	yParser = require('yargs-parser');

// 执行命令与 gulp 命令格式一样，只要确保 task 存在于 /tasks/ 目录下即可
// 示例：gulp 68shop.me default

// 获取命令参数
const argv = yParser(process.argv.slice(2));

// 获取任务名称列表，为空则创建 default 任务
const task_names = argv['_'].length > 0 ? argv['_'] : ['default'];

// 动态创建任务，必须确保 /tasks/ 目录下存在此任务的配置文件
task_names.forEach((task_name) => {
	
	const {js_path, css_path, copy_path, dist_path} = require(`./tasks/${task_name}`);
	
	// 压缩js
	gulp.task(`${task_name}`, async function () {
		
		// 如果存在 js_path 则执行压缩 js 的任务
		if(js_path){
			await gulp.src(js_path)
					.pipe(uglify())
					.on('error', function (err) {
						gutil.log(gutil.colors.red('[Error]'), err.toString());
					})
					.pipe(gulp.dest(dist_path));
		}
		
		// 如果存在 css_path 则执行压缩 css 的任务
		if(css_path){
			await gulp.src(css_path)
					.pipe(cleanCSS())
					.on('error', function (err) {
						gutil.log(gutil.colors.red('[Error]'), err.toString());
					})
					.pipe(gulp.dest(dist_path));
		}
		
		// 如果存在 copy_path 则执行复制的任务
		if(copy_path){
			await gulp.src(copy_path)
					.on('error', function (err) {
						gutil.log(gutil.colors.red('[Error]'), err.toString());
					})
					.pipe(gulp.dest(dist_path));
		}
	});
});

// rename + min
gulp.task('min', async function() {
	await gulp.src('./src/js/jquery.widget.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(dist_path))
});	