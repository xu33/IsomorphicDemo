var React = require('react')
var List = require('./list.js')

var App = React.createClass({
	render: function() {
		return (
		<div>
		<List arr={this.props.arr} />
		<button onClick={this.handleClick}>我可以点击</button>
		</div>
		)
	},
	handleClick: function() {
		var arr = this.props.arr
		arr.push(arr.length + 1)

		this.setProps({
			arr: arr
		})
	}
})

module.exports = App