const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglifycss = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin');
const imageop = require('gulp-image');

gulp.task('styles', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('css', function () {
    gulp.src('src/css/*.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(gulp.dest('dist/css-min'));
  });

  gulp.task('minifyHtml', () => {
    return gulp.src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('imageop', function() {
    return gulp.src('src/images/*.png')
    .pipe(imageop())
    .pipe(gulp.dest('dist/image'));
  })
  gulp.task('develop', gulp.series('styles', 'css', 'minifyHtml', 'imageop'));