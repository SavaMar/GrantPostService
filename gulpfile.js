var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var jade = require('gulp-jade');

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
	})
})

gulp.task('sass', function(){
	return gulp.src('app/scss/style.scss')
	.pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
	.pipe(gulp.dest('dist/css/'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('jade', function() {
    return gulp.src('app/jade/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('dist/')) // указываем gulp куда положить скомпилированные HTML файлы
        .pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('js', function() {
  return gulp.src("app/js/modules/*.js")
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch', ['browserSync', 'sass', 'jade', 'js'], function (){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/jade/**/*.jade', ['jade']);
	gulp.watch('app/js/**/*.js', ['js']);
});
