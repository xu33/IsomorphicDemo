var React = require('react')
var Swipe = require('../public/javascripts/swipe.js')
var mixin = function() {
	var ret = {}
	var args = arguments
	for (var i = 0; i < args.length; i++) {
		for (var key in args[i]) {
			if (args[i].hasOwnProperty(key)) {
				ret[key] = args[i][key]
			}
		}
	}
	return ret
}

var bannerBound = {
	width: '100%',
	height: '36.6%'
}

var imgs = ["http://3gimg.qq.com/trom_s/uploads/2015071410/1000x300 (1).jpg", "http://3gimg.qq.com/trom_s/uploads/2015061918/3B09A1F8-E449-42A7-8BCE-A9F72720B896.png", "http://3gimg.qq.com/trom_s/uploads/2015071317/1000-300.png", "http://3gimg.qq.com/trom_s/uploads/2015071621/1000-300.png", "http://3gimg.qq.com/trom_s/uploads/2015071518/1000-300.png", "http://3gimg.qq.com/trom_s/uploads/2015062909/run-1000x300.jpg", "http://3gimg.qq.com/trom_s/uploads/2015070814/note_1000-300.png", "http://3gimg.qq.com/wspbbs/nodepc/images/banner_4.png"]

var Banner = React.createClass({
	getInitialState: function() {
		return {
			currentIndex: 0
		}
	},
	render: function() {
		return (
			<div style={mixin(styles.wrapper, bannerBound)} ref="wrapper">
				<ul style={mixin(styles.slider, bannerBound)}>
				{
					this.props.banners.map((item, index) => {
						return (
							<li style={mixin(styles.item, bannerBound)} key={index}>
								<img src={imgs[index]} style={mixin(styles.img, bannerBound)} />
							</li>
						)
					})
				}
				</ul>
				<div className="cur">
				{
					this.props.banners.map((item, index) => {
						return <a key={index} href="javascript:;" className={this.state.currentIndex === index ? 'active': ''}>{index}</a>
					})
				}
				</div>
			</div>
		)
	},
	componentDidMount: function() {
		bannerBound.width = window.innerWidth + 'px'
		bannerBound.height = Math.round(366 * window.innerWidth / 1000) + 'px'

		this.setState({}, () => {
			Swipe(React.findDOMNode(this.refs.wrapper), {
				continuous: true,
				transitionEnd: (index) => {
					this.setState({
						currentIndex: index % this.props.banners.length
					})
				}
			})
		})
	}
})

var styles = {
	wrapper: {
		position: 'relative',
		overflow:'hidden'
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
	img: {
		
	}
}

module.exports = Banner