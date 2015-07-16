'use strict';

var React = require('react');

var mixin = function mixin() {
	var ret = {};
	var args = arguments;
	for (var i = 0; i < args.length; i++) {
		for (var key in args[i]) {
			if (args[i].hasOwnProperty(key)) {
				ret[key] = args[i][key];
			}
		}
	}
	return ret;
};

var bannerBound = {
	width: 0,
	height: 0
};

var Banner = React.createClass({
	displayName: 'Banner',

	render: function render() {
		return React.createElement(
			'div',
			{ style: mixin(styles.wrapper, bannerBound), ref: 'wrapper' },
			React.createElement(
				'ul',
				{ style: mixin(styles.slider, bannerBound) },
				this.props.banners.map(function (item, index) {
					return React.createElement(
						'li',
						{ style: mixin(styles.item, bannerBound), key: index },
						React.createElement('img', { src: item.picture, style: mixin(styles.img, bannerBound) })
					);
				})
			)
		);
	},
	componentDidMount: function componentDidMount() {
		var _this = this;

		bannerBound.width = window.innerWidth + 'px';
		bannerBound.height = Math.round(366 * window.innerWidth / 1000) + 'px';

		this.setState({}, function () {
			Swipe(React.findDOMNode(_this.refs.wrapper), {
				continuous: true
			});
		});
	}
});

var styles = {
	wrapper: {
		position: 'relative',
		overflow: 'hidden'
	},
	slider: {
		overflow: 'hidden',
		listStyle: 'none',
		position: 'relative'
	},
	item: {
		float: 'left',
		position: 'relative'
	},
	img: {}
};

module.exports = Banner;