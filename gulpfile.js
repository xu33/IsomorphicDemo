var gulp = require('gulp')
var babel = require('gulp-babel')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var fs = require('fs')

gulp.task('compile', function() {
	var bs = browserify({
		entries: 'reactComponentsCompiled/main.js'
	})

	var res = gulp.src('reactComponents/*.jsx')
		.pipe(babel())
		.pipe(gulp.dest('reactComponentsCompiled'))

	res.on('end', function() {
		bs.bundle()
		.pipe(source('main.js')) // Creates a through stream which takes text as input, and emits a single vinyl file instance for streams down the pipeline to consume.
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./public/javascripts/'))
	})
})

gulp.task('watch', function() {
	var watcher = gulp.watch('reactComponents/*.jsx', ['compile'])
	watcher.on('change', function(event) {
		console.log('文件 ' + event.path + ' 类型 ' + event.type + ', 开始构建')
	})
})

gulp.task('default', ['watch'])