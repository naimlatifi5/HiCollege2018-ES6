/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync'),
    del = require('del');


var server = browserSync.create();
var reload = browserSync.reload;

// Start browswer sync
gulp.task('browser-sync', function () {
    server.init({
        server: {
            proxy: "http://localhost/ecmascript6-es6/"
        }
    });
});
// Styles
gulp.task('styles', function () {
    return gulp.src('src/assets/styles/**/*.scss', {
            style: 'expanded'
        })
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('build/styles'))
        .pipe(cssnano())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.stream())

});

// Scripts
gulp.task('scripts', function () {
    return gulp.src('src/assets/scripts/**/*.js')
        .pipe(babel())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('build/scripts'))
        //.pipe(rename({
        //   suffix: '.min'
        //}))
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'))
        .pipe(browserSync.stream())

});

// Images
gulp.task('images', function () {
    return gulp.src('src/assets/images/**/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('build/images'))
        .pipe(browserSync.stream())

});

// Clean
gulp.task('clean', function () {
    return del(['build/styles', 'build/scripts', 'build/images']);
});

// Watch
gulp.task('watch', ['browser-sync', 'styles', 'scripts', 'images'], function () {
    // Watch .scss files
    gulp.watch('src/assets/styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('src/assets/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('src/assets/images/**/*', ['images']);

    // Watch any files in build/, reload on change
    gulp.watch(['src/assets/**']).on('change', livereload.changed);

});

// Default task
gulp.task('default', ['browser-sync', 'styles', 'scripts', 'images', 'watch'], function () {
    gulp.start('styles', 'scripts', 'images');
});