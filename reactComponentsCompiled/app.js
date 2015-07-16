'use strict';

var React = require('react');
var List = require('./list.js');
var Banner = require('./banner.js');

var App = React.createClass({
	displayName: 'App',

	componentDidMount: function componentDidMount() {},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				{ style: styles.header },
				'论坛'
			),
			React.createElement(Banner, { banners: this.props.banners }),
			React.createElement(List, { threads: this.props.threads, onChange: this.handleChange })
		);
	},
	handleChange: function handleChange(newThreads) {
		var threads = this.props.threads.concat(newThreads);
		this.setProps({
			threads: threads
		});
	}
});

var styles = {
	header: {
		backgroundColor: '#2776dc',
		color: '#fff',
		fontSize: '16px',
		height: '50px',
		lineHeight: '50px',
		padding: '0 50px',
		textAlign: 'center'
	}
};

module.exports = App;