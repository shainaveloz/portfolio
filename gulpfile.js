var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: "http://localhost:8080/"
        }));
});

gulp.task('default', ['webserver']);