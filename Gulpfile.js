const gulp = require('gulp')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-csso')

gulp.task('style', () => {
    return gulp
        .src('./scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css'))
})

gulp.task('default', ['style'])
