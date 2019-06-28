var gulp = require('gulp');
var serve = require('gulp-serve');


gulp.task('default', done => {
  // place code for your default task here
  done();
});

gulp.task('serve', serve(['app']));