var AutoComplete = React.createClass({
	getInitialState: function() {
		return {
			hasMatched: false
		}
	},
	render: function() {
		return (
			<div>
				<input type="text" onChange={this.handleChange} />
				<div style={{
					display: this.state.hasMatched ? '' : 'none'
				}}>
					<div style={styles.item}></div>
				</div>
			</div>
		)
	},
	handleChange: function() {

	}
})

var styles = {
	item: {

	}
}