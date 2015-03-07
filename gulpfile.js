var gulp = require('gulp'),
	mainBowerFiles = require('main-bower-files'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	gulpFilter = require('gulp-filter'),
	connect = require('gulp-connect');

// Копируем все библиотеки из папки Bower
gulp.task('bower', ['bower:css','bower:js'], function() {
	var jsFilter = gulpFilter('**/*.js');
	return gulp.src(mainBowerFiles(/* options */), { base: 'bower_components' })
		.pipe(jsFilter)
		.pipe(gulp.dest('./public/js/vendor'))
});

// Копируем JavaScript библиотеки из папки Bower
gulp.task('bower:css', function() {
	var jsFilter = gulpFilter('**/*.css');
	return gulp.src(mainBowerFiles(/* options */), { base: 'bower_components' })
		.pipe(jsFilter)
		.pipe(gulp.dest('./public/css/vendor'))
});

// Копируем JavaScript библиотеки из папки Bower
gulp.task('bower:js', function() {
	var jsFilter = gulpFilter('**/*.js');
	return gulp.src(mainBowerFiles(/* options */), { base: 'bower_components' })
		.pipe(jsFilter)
		.pipe(gulp.dest('./public/js/vendor'))
});

// Запускаем сервер для папки public
gulp.task('server', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
});

// Компилируем JADE и копируем в папку public
gulp.task('jade', function() {
	gulp.src('./app/**/[^_]*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./public/'))
});

// Компилируем SCSS и копируем в папку public
gulp.task('sass', function() {
	return gulp.src(['./app/scss/style.scss'])
		.pipe(sass())
		.on('error', function(err){ console.log(err.message); })
		.pipe(gulp.dest('./public/css'));
});

// Копируем JS в папку public
gulp.task('js', function() {
	return gulp.src(['./app/js/**/*'])
		.pipe(gulp.dest('./public/js'));
});

// Наблюдаем за изменениями файлов
gulp.task('watch', function() {
	gulp.watch('./app/**/*.jade', ['jade']);
	gulp.watch('./app/**/*.scss', ['sass']);
	gulp.watch('./app/**/*.js', ['js']);
});

// Задача по-умолчанию
gulp.task('default', ['bower','server','jade','sass','js','watch']);