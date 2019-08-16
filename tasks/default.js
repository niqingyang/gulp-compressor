
const JS_PATH = `{SRC_PATH}/**/*.js`;

const CSS_PATH = `{SRC_PATH}/**/*.css`;

const DIST_PATH = './dist/default/';

const EXCLUDE_PATH = [
	`!{SRC_PATH}/**/*.min.js`,
	`!{SRC_PATH}/**/*.min.css`
];

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
	js_path: [JS_PATH],
	css_path: [CSS_PATH],
	dist_path: DIST_PATH,
	// copy_path: COPY_PATH,
};