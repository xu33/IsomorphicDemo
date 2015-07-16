'use strict';

var React = require('react');
var App = require('./app.js');

document.addEventListener('DOMContentLoaded', function () {
	React.render(React.createElement(App, {
		banners: ReactData.banners,
		threads: ReactData.threads
	}), document.body);
});