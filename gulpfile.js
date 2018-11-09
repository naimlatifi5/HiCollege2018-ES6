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
// Static server
gulp.task('browser-sync', function () {
    server.init({
        server: {
            port: 8888,
            baseDir: "./src/assets"
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
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/styles'))
        .pipe(livereload())
        .pipe(notify({
            message: 'Styles task complete'
        }));
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src('src/assets/scripts/**/*.js')
        .pipe(babel())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/scripts'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'))
        .pipe(livereload())
        .pipe(notify({
            message: 'Scripts task complete'
        }));
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
        .pipe(notify({
            message: 'Images task complete'
        }));
});

// Clean
gulp.task('clean', function () {
    return del(['build/styles', 'build/scripts', 'build/images']);
});

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function () {
    livereload.listen();
    // Watch .scss files
    gulp.watch('src/assets/styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('src/assets/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('src/assets/images/**/*', ['images']);

    // Watch any files in build/, reload on change
    gulp.watch(['src/assets/**']).on('change', livereload.changed);

});