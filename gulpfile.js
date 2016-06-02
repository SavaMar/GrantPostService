var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
	})
})

gulp.task('sass', function(){
	return gulp.src('app/scss/style.scss')
	.pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
	.pipe(gulp.dest('app/css/'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('js', function() {
  return gulp.src("app/js/modules/*.js")
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/js/'))
    .pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch', ['browserSync', 'sass', 'js'], function (){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', ['js']);
});