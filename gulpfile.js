var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
concat = require('gulp-concat'),
cssMinify = require('gulp-csso'),
comb = require('gulp-csscomb'),
//htmlReplace = require('gulp-html-replace'),
file = require('gulp-file-include'),
htmlMinify = require('gulp-minify-html'),
rename = require('gulp-rename'),
sass = require('gulp-sass'),
jsMinify = require('gulp-uglify'),
util = require('gulp-util'),
htmlFiles = ['html/header.html', 'html/projects.html', 'html/jobs.html', 'html/skills.html', 'html/posts.html', 'html/footer.html'],
cssFiles = 'css/*.css',
jsFiles = 'js/*.js';

gulp.task('css', function() {
    return gulp.src('css/main.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(comb())
    .pipe(cssMinify())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('js', function() {
    return gulp.src('js/*.js')
    .pipe(jsMinify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('html', function() {
    return gulp.src(htmlFiles)
    .pipe(htmlMinify())
    .pipe(concat('main.html'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('site', function() {
    return gulp.src('main/index.html')
    .pipe(file({
        prefix: '@@',
        basepath: '@file'
    }))
    //.pipe(htmlReplace({
        //'css': ['dist/main.min.css'],
        //'html': 'dist/main.html'//,
        //'js': ['dist/main.min.js'],
    //}))
    .pipe(htmlMinify())
    .pipe(rename('index.html'))
    .pipe(gulp.dest(''))
});
