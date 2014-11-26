var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cssMinify = require('gulp-csso'),
    comb = require('gulp-csscomb'),
    file = require('gulp-file-include'),
    htmlMinify = require('gulp-minify-html'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    jsMinify = require('gulp-uglify'),
    util = require('gulp-util'),
    htmlFiles = ['html/header.html', 'html/projects.html', 'html/jobs.html', 'html/skills.html', 'html/posts.html', 'html/footer.html'],
    cssFiles = 'css/*.css',
    jsFiles = 'js/main.js';

gulp.task('css', function () {
    return gulp.src('css/main.scss')
    .pipe(sass())
    .pipe(comb())
    .pipe(cssMinify())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('js', function () {
    return gulp.src('js/main.js')
    .pipe(jsMinify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('html', function () {
    return gulp.src('main/index.html')
    .pipe(file({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(htmlMinify({
        conditionals: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(''))
});

gulp.task('site', function () {
    gulp.run('css');
    gulp.run('js');
    gulp.run('html');
});

gulp.task('watch', function() {
    gulp.run('site');

    gulp.watch('js/*.js', ['js']);
    gulp.watch('css/*.scss', ['css']);
    gulp.watch(['html/*.html', 'main/index.html'], ['html']);
});
