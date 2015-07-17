'use strict';

var React = require('react');
var Swipe = require('../public/javascripts/swipe.js');
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
	width: '100%',
	height: '36%'
};

var imgs = ['http://3gimg.qq.com/trom_s/uploads/2015071410/1000x300 (1).jpg', 'http://3gimg.qq.com/trom_s/uploads/2015061918/3B09A1F8-E449-42A7-8BCE-A9F72720B896.png', 'http://3gimg.qq.com/trom_s/uploads/2015071317/1000-300.png', 'http://3gimg.qq.com/trom_s/uploads/2015071621/1000-300.png', 'http://3gimg.qq.com/trom_s/uploads/2015071518/1000-300.png', 'http://3gimg.qq.com/trom_s/uploads/2015062909/run-1000x300.jpg', 'http://3gimg.qq.com/trom_s/uploads/2015070814/note_1000-300.png', 'http://3gimg.qq.com/wspbbs/nodepc/images/banner_4.png'];

var Banner = React.createClass({
	displayName: 'Banner',

	getInitialState: function getInitialState() {
		return {
			currentIndex: 0
		};
	},
	render: function render() {
		var _this = this;

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
						React.createElement('img', { src: imgs[index], style: mixin(styles.img, bannerBound) })
					);
				})
			),
			React.createElement(
				'div',
				{ className: 'cur' },
				this.props.banners.map(function (item, index) {
					return React.createElement(
						'a',
						{ key: index, href: 'javascript:;', className: _this.state.currentIndex === index ? 'active' : '' },
						index
					);
				})
			)
		);
	},
	componentDidMount: function componentDidMount() {
		var _this2 = this;

		bannerBound.width = window.innerWidth + 'px';
		bannerBound.height = Math.round(366 * window.innerWidth / 1000) + 'px';

		this.setState({}, function () {
			Swipe(React.findDOMNode(_this2.refs.wrapper), {
				continuous: true,
				transitionEnd: function transitionEnd(index) {
					_this2.setState({
						currentIndex: index % _this2.props.banners.length
					});
				}
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