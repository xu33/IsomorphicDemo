var express = require('express');
var router = express.Router();
var React = require('react');
var App = require('../reactComponentsCompiled/app.js')
var Sequelize = require('sequelize')
var Q = require('q')

var sequelize = new Sequelize('test', 'root', 'ndslpsp1', {
	host: '127.0.0.1',
	dialect: 'mysql',
	port: 3306
})

var Threads = sequelize.import('../models/pre_forum_thread.js')
var Index = sequelize.import('../models/pre_forum_index.js')

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
	Threads
		.findAll({
			offset: req.query.offset,
			limit: 10
		})
		.then(function(result) {
			res.send(result)
		})
})

module.exports = router;