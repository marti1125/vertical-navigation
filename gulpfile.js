'use strict';

var gulp       = require('gulp'),
    rename     = require('gulp-rename'),
    header     = require('gulp-header'),
    uglify     = require('gulp-uglify');

var about =  "/*  \n"   +
              " * vertical_navigation plugin \n"  +
              " * Original author: @willrre \n"  +
              " * Further changes, comments: @willrre \n"  +
              " * Licensed under the MIT license \n"  +
              " */\n\n";

gulp.task('jsmin', function() {
  return gulp.src("./src/*.js")
         .pipe(uglify())
         .pipe(rename({suffix: '.min'}))
         .pipe(header(about))
         .pipe(gulp.dest('dist'))
});

gulp.task('copy-js', function() {
  return gulp.src("./src/*.js")
         .pipe(gulp.dest('dist'));
});

gulp.task('default', ['jsmin', 'copy-js']);
