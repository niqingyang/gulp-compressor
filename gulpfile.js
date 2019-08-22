var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	yParser = require('yargs-parser'),
	path = require("path");

// 执行命令与 gulp 命令格式一样，只要确保 task 存在于 /tasks/ 目录下即可
// 示例：gulp 68shop.me default

//删除右边的 “/”、“\”
function rtrim(str){
	str = str.replace(/(\\*$)/g, "");
	str = str.replace(/(\/*$)/g, "");
	return str;
}

// 替换 src_path 中的 {SRC_PATH} 为指定的路径
function srcPathReplace(paths, src){
	
	if(src === undefined || src === null){
		return paths;
	}
	
	if(typeof paths === "string"){
		paths = paths.replace(/{SRC_PATH}/g, src);
	}else{
		paths = paths.map(function(item){
			return item.replace(/{SRC_PATH}/g, src);
		});
	}
	return paths;
}

// 替换 dest_path 中的 {DEST_PATH} 为指定的路径
function destPathReplace(paths, dest){
	
	if(dest === undefined || dest === null){
		return paths;
	}
	
	if(typeof paths === "string"){
		paths = paths.replace(/{DEST_PATH}/g, dest);
	}else{
		paths = paths.map(function(item){
			return item.replace(/{DEST_PATH}/g, dest);
		});
	}
	return paths;
}

// 获取命令参数
const argv = yParser(process.argv.slice(2));

var src = argv['src'];
var dest = argv['dest'];

if(src !== undefined){
	src = rtrim(src);
	console.log("输入目录：", src);
}

if(src !== undefined && dest == undefined){
	dest = src + "_dest";
	console.log("输出目录：", dest);
}

// 获取任务名称列表，为空则创建 default 任务
const task_names = argv['_'].length > 0 ? argv['_'] : ['default'];

// 动态创建任务，必须确保 /tasks/ 目录下存在此任务的配置文件
task_names.forEach((task_name) => {
	
	// js_path, css_path, src_path, dest_path, copy_path
	const paths = require(`./tasks/${task_name}`);
	
	// 压缩js
	gulp.task(`${task_name}`, async function () {
		
		// 如果存在 js_path 则执行压缩 js 的任务
		if(paths.js_path){
			
			paths.js_path = srcPathReplace(paths.js_path, src || paths.src_path || './src');
			
			await gulp.src(paths.js_path)
					.pipe(uglify())
					.on('error', function (err) {
						gutil.log(gutil.colors.red('[JS Error]'), err.toString());
					})
					.pipe(gulp.dest(dest || paths.dest_path || './dest'));
		}
		
		// 如果存在 css_path 则执行压缩 css 的任务
		if(paths.css_path){
			
			paths.css_path = srcPathReplace(paths.css_path, src || paths.src_path || './src');
			
			await gulp.src(paths.css_path)
					.pipe(cleanCSS())
					.on('error', function (err) {
						gutil.log(gutil.colors.red('[CSS Error]'), err.toString());
					})
					.pipe(gulp.dest(dest || paths.dest_path || './dest'));
		}
		
		// 如果存在 copy_path 则执行复制的任务
		if(paths.copy_path){
			
			paths.copy_path = srcPathReplace(paths.copy_path, src || paths.src_path || './src');
			
			await gulp.src(paths.copy_path)
					.on('error', function (err) {
						gutil.log(gutil.colors.red('[Error]'), err.toString());
					})
					.pipe(gulp.dest(dest || paths.dest_path || './dest'));
		}
		
		// 如果存在 merge_list 则执行合并任务
		if(paths.merge_list){
			
			paths.merge_list.forEach(async function(item){
				var merge_path = srcPathReplace(item[0], src || paths.src_path || './src');;
				var merge_file = destPathReplace(item[1], dest || paths.dest_path || './dest');
								
				await gulp.src(merge_path)
					.pipe(uglify())
					.pipe(concat(path.basename(merge_file)))
					.on('error', function (err) {
						gutil.log(gutil.colors.red('[Merge Error]'), err.toString());
					})
					.pipe(gulp.dest(path.dirname(merge_file) || paths.dest_path || './dest'));
			})
		}
	});
});

// rename + min
gulp.task('min', async function() {
	await gulp.src('./src/js/jquery.widget.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(dest_path))
});