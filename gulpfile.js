var gulp = require('gulp')
var babel = require('gulp-babel')
var browserify = require('browserify')
var fs = require('fs')

gulp.task('compile', function() {
	var b = browserify({
		entries: 'reactComponentsCompiled/main.js'
	})

	var res = gulp.src('reactComponents/*.jsx')
						.pipe(babel())
						.pipe(gulp.dest('reactComponentsCompiled'))

	res.on('end', function() {
		b.bundle().pipe(fs.createWriteStream('public/javascripts/main.js'))
	})
})

gulp.task('watch', function() {
	var watcher = gulp.watch('reactComponents/*.jsx', ['compile'])
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks')
	})
})

gulp.task('default', ['watch'])