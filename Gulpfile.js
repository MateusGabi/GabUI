const gulp = require('gulp')
const serve = require('gulp-serve')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-csso')

gulp.task('css', () => {
    return gulp
        .src('./scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css'))
})

gulp.task('html', function () {
    return gulp.src('./examples/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist/examples/'))
})

gulp.task('serve', serve('dist'))

gulp.task('default', ['html', 'css', 'serve'])
