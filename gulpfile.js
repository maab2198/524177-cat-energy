"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var run = require("run-sequence");
var minifyjs = require('gulp-minify');
var deploy = require('gulp-gh-pages');


gulp.task("style", function() {
 gulp.src("source/less/style.less")
    .pipe(plumber()) //errors
    .pipe(less()) //less
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css")) //file css to folder source
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task('minify-js', function(){
  gulp.src('source/js/**/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('build/js'));
});

//Минификация изображений
gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}") // any ing files in any folder after img
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}), //безопасное сжатие
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
    ]))
  .pipe(gulp.dest("build/img"));
});

//Изображения в формате WebP
gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});


//SVG-спрайт
gulp.task("sprite", function () {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("serve", function() {
  server.init({
    server: "build/"
  });

  gulp.watch("source/less/**/*.less", ["style"]).on("change", server.reload);
  gulp.watch("source/*.html",["html"]).on("change", server.reload);
});

gulp.task("copy", function(){
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
    ], {
      base: "source"
    })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", function(done) {
  run(
      "clean",
      "copy",
      "style",
      "minify-js",
      "sprite",
      "html",
      done
    );
});


gulp.task('deploy', function () {
  return gulp.src("./build/**/*")
    .pipe(deploy())
});
