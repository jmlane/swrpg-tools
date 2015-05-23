var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

gulp.task('bundle', function () {
  var b = browserify();
  b.add('./src/app.js');

  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch-bundle', function () {
  var w = watchify(browserify(watchify.args));
  w.on('log', gutil.log);
  w.add('./src/app.js');

  var watchifyBundle = function () {
    return w.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(gulp.dest('./dist/js/'));
  };
  w.on('update', watchifyBundle);

  return watchifyBundle();
});
