'use strict';

var React = require('react');
var List = require('./list.js');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(List, { arr: this.props.arr }),
			React.createElement(
				'button',
				{ onClick: this.handleClick },
				'我可以点击'
			)
		);
	},
	handleClick: function handleClick() {
		var arr = this.props.arr;
		arr.push(arr.length + 1);

		this.setProps({
			arr: arr
		});
	}
});

module.exports = App;