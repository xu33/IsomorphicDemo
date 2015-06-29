var React = require('react')
var List = React.createClass({
	render: function() {
		return (
				<ul>
				{this.props.arr.map(function(item, index) {
					return <li key={index}>{item}</li>
				}, this)}
				</ul>
		)
	}
})

module.exports = List