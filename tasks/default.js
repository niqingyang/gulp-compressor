
const JS_PATH = `./src/**/*.js`;

const CSS_PATH = `./src/**/*.css`;

const DIST_PATH = './dist/default/';

const COPY_PATH = [
	`./src/**/*.jpg`,
	`./src/**/*.jpeg`,
	`./src/**/*.png`,
	`./src/**/*.gif`,
	`./src/**/*.svg`,
	`./src/**/*.otf`,
	`./src/**/*.eot`,
	`./src/**/*.ttf`,
	`./src/**/*.woff`,
	`./src/**/*.min.js`,
	`./src/**/*.min.map`
];

module.exports = {
	js_path: [JS_PATH],
	css_path: [CSS_PATH],
	dist_path: DIST_PATH,
	copy_path: COPY_PATH,
};