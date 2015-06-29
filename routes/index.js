var express = require('express');
var router = express.Router();
var React = require('react');

var App = require('../reactComponentsCompiled/app.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	var arr = [1, 2, 3]

	var el = React.createElement(App, {
		arr: arr
	})

	res.render('index', {
		title: 'Express',
		markup: React.renderToString(el),
		arr: arr
	});
});

module.exports = router;