var React = require('react')
var List = require('./list.js')
var Banner = require('./banner.js')

var App = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {
		return (
			<div>
				<h1 style={styles.header}>论坛</h1>
				<Banner banners={this.props.banners} />
				<List threads={this.props.threads} onChange={this.handleListChange}/>
			</div>
		)
	},
	handleListChange: function(newThreads) {
		var threads = this.props.threads.concat(newThreads)
		this.setProps({
			threads: threads
		})
	}
})

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
}

module.exports = App