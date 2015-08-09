var express = require('express');
var router = express.Router();
var fs = require('fs');

function readDir(Path, callback) {
	fs.readdir(Path, function(err, files) {
		var fileData = files.map(function(filename) {
			var stat = fs.statSync(Path + filename)

			if (stat.isFile()) {
				return {
					label: filename,
					leaf: true
				}	
			} else if (stat.isDirectory()) {
				return {
					label: filename,
					leaf: false
				}
			}
		})

	  callback && callback(fileData)
	})
}

router.get('/', function(req, res, next) {
	var Path = 'D://gupiao/'
	readDir(Path, function(fileData) {
		res.render('folder.ejs', {
	  	fileData: fileData
	  })
	})
});

router.get('/fetchFolder', function(req, res, next) {
	var Path = req.query.folderName + '/'

	readDir(Path, function(fileData) {
		res.send({
	  	fileData: fileData
	  })
	})
})

module.exports = router;