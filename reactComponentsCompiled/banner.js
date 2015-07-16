'use strict';

var React = require('react');
var Banner = React.createClass({
	displayName: 'Banner',

	render: function render() {
		return React.createElement(
			'div',
			{ style: styles.wrapper, ref: 'wrapper' },
			React.createElement(
				'ul',
				{ style: styles.slider },
				this.props.banners.map(function (item, index) {
					return React.createElement(
						'li',
						{ style: styles.item },
						React.createElement('img', { src: item.picture, style: styles.img })
					);
				})
			)
		);
	},
	componentDidMount: function componentDidMount() {
		// console.log('componentDidMount fire', React.findDOMNode(this.refs.wrapper))
		Swipe(React.findDOMNode(this.refs.wrapper), {
			continuous: true
		});
	}
});

var styles = {
	wrapper: {
		position: 'relative',
		width: '375px',
		height: '150px',
		overflow: 'hidden'
	},
	slider: {
		overflow: 'hidden',
		listStyle: 'none',
		position: 'relative',
		bottom: 0,
		right: 0,
		left: 0,
		top: 0
	},
	item: {
		float: 'left',
		width: '100%',
		position: 'relative'
	},
	img: {
		width: '100%',
		height: '100%'
	}
};

module.exports = Banner;