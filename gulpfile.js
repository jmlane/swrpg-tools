var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var packageJson = require('./package.json');
var mocha = require('gulp-mocha');

gulp.task('build', ['set prod', 'bundle']);

gulp.task('set prod', function () {
  process.env.NODE_ENV = 'production';
  gutil.log(gutil.colors.red('NODE_ENV='+process.env.NODE_ENV));
});

gulp.task('dev', ['watch-bundle'], function () {
  gutil.log('Now running in development mode.');
});

var bundleStream = function (browserify) {
  return browserify.bundle()
    .on('error', gutil.log.bind(gutil, gutil.colors.red('Browserify error:')))
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js/'));
};

gulp.task('bundle', function () {
  var b = browserify(packageJson.browserify.config);
  return bundleStream(b);
});

gulp.task('watch-bundle', function () {
  var w = watchify(browserify(packageJson.browserify.config));
  w.on('log', gutil.log.bind(gutil, 'Watchify:'));
  w.on('update', bundleStream.bind(w, w));
  return bundleStream(w);
});

gulp.task('mocha', function () {
  return gulp.src(['test/*.js'])
    .pipe(mocha({
      reporter: 'list',
      compilers: {js: require('babel/register')}
    }))
    .on('error', gutil.log);
});

gulp.task('watch-mocha', function () {
  gulp.watch(['test/**', 'src/**'], ['mocha']);
});
