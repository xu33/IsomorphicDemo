var express = require('express');
var router = express.Router();
var React = require('react');
var App = require('../reactComponentsCompiled/app.js')
var Sequelize = require('sequelize')
var Q = require('q')

var sequelize = new Sequelize('test', 'uroot', '', {
	host: '127.0.0.1',
	dialect: 'mysql',
	port: 3306
})

var Threads = sequelize.import('../models/pre_forum_thread.js')
var Index = sequelize.import('../models/pre_forum_index.js')
var Posts = sequelize.import('../models/pre_forum_post.js')

router.get('/', function(req, res, next) {
	Q
		.all([
			Threads.findAll({
				offset: 0,
				limit: 10
			}),
			Index.findAll({
				offset: 0,
				limit: 5
			})
		])
		.spread(function(threads, banners) {
			res.render('index', {
				title: 'Express',
				markup: React.renderToString(
					React.createElement(App, {
						banners: banners,
						threads: threads
					})
				),
				banners: banners,
				threads: threads
			})
		})
})

router.get('/getThreads', function(req, res, next) {
	var offset = req.query.offset || 0
	Threads
		.findAll({
			offset: offset,
			limit: 10
		})
		.then(function(result) {
			if (offset > 0) {
				setTimeout(function() {
					res.send(result)
				}, 1000)
			} else {
				res.send(result)
			}
		})
})

router.get('/getThread', function(req, res, next) {
	Posts
		.findAll({
			where: {
				tid: req.query.tid
			}
		})
		.then(function(result) {
			res.send(result)
		})
		.done()
})

module.exports = router;