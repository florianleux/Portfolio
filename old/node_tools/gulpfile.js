var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('less', function () {
    return gulp.src('../styles/less/*.less')
        .pipe(plugins.less().on('error', plugins.util.log))
        .pipe(plugins.csscomb())
        .pipe(plugins.cssbeautify({indent: '  '}))
        .pipe(plugins.autoprefixer())
        .pipe(plugins.csso())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('../styles/css/'))
        .pipe(plugins.livereload());
});


gulp.task('watch', function () {
    plugins.livereload.listen();
    gulp.watch('../styles/less/*.less', ['less']);
});