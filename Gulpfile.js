const fs = require('fs')

const gulp = require('gulp')
const babel = require('gulp-babel')
const serve = require('gulp-serve')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-csso')
const licenser = require('gulp-header-license')
const concat = require("gulp-concat")
const cleanDest = require('gulp-clean-dest')

const runSequence = require('run-sequence')

const DEST_CSS = './dist/assets/css'
const DEST_HTML = './dist/docs/'
const DEST_JS = './dist/assets/js'

var getCopyright = () => {
    var year = (new Date()).getFullYear();
    var license = getFile('LICENSE.md');

    return `\\* \n\ ${license}  \n\ */`;
};

var getFile = name => fs.readFileSync(name)

gulp.task('css', () => {

    return gulp
        .src('./scss/index.scss')
        .pipe(cleanDest(DEST_CSS))
        .pipe(sass())
        .pipe(minifyCSS())
        // .pipe(licenser(getCopyright(), {}))
        .pipe(gulp.dest(DEST_CSS))
})

gulp.task('html', () => {
    return gulp
        .src('./docs/**/*.pug')
        .pipe(cleanDest(DEST_HTML))
        .pipe(pug())
        .pipe(gulp.dest(DEST_HTML))
})

gulp.task('js', () => {
    return gulp
        .src('./javascript/index.js')
        .pipe(cleanDest(DEST_JS))
        .pipe(babel())
        .pipe(gulp.dest(DEST_JS))
})

gulp.task('serve', serve('dist'))
gulp.task('dist', ['css', 'html', 'js'])
gulp.task('default', ['dist', 'serve'])
