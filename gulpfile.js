var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('webserver', function() {
  gulp.src('dist/')
    .pipe(webserver({
      fallback: 'login.html',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

/*gulp.task('script', function(){
  gulp.src('src/js/custom.js')
  .pipe(concat('script.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});*/
gulp.task('script', function(){
  //tarea
  gulp.src('src/js/custom.js')
  //unirlo
  .pipe(concat('script.min.js'))
  //minificarlo
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));//para dejarlo en esa carpeta
});

gulp.task('image', function() {
     gulp.src('src/**/*.{jpg,jpeg,gif,png,svg}')
   .pipe(gulp.dest('dist/img'));
});

gulp.task('style', function(){
  gulp.src('src/sass/global.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('dist/css'))

});
gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['style']);
});
gulp.task('default', ['style','script','image','webserver']);