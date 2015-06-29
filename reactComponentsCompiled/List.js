'use strict';

var React = require('react');
var List = React.createClass({
	displayName: 'List',

	render: function render() {
		return React.createElement(
			'ul',
			null,
			this.props.arr.map(function (item, index) {
				return React.createElement(
					'li',
					{ key: index },
					item
				);
			}, this)
		);
	}
});

module.exports = List;