var React = require('react')

var ThreadItem = React.createClass({
	render: function() {
		var avatar = 'http://bbs.tos.cn/ajax/getUserIcon?uid=' + this.props.authorid
		return (
			<div style={styles.thread}>
				<div style={styles.avatar}>
					<img src={avatar} style={styles.img}/>
				</div>
				<div style={styles.info}>
					<div style={styles.subject}>{this.props.subject}</div>
					<div style={styles.author}>{this.props.author}</div>
				</div>
			</div>
		)
	}
})

var List = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {
		return (
				<div style={styles.container}>
				{this.props.threads.map(function(item, index) {
					return (
						<ThreadItem
							subject={item.subject}
							author={item.author}
							authorid={item.authorid}
							key={item.tid}
						/>
					)
				}, this)}
				{this.renderFooter()}
				</div>
		)
	},
	renderFooter: function() {
		return (
			<div style={styles.footer}>
			<button style={styles.btn}onClick={this.loadMore}>加载更多</button>
			</div>
		)
	},
	loadMore: function() {
		fetch('/getThreads?offset=' + this.props.threads.length)
			.then(function(response) {
				return response.json()
			})
			.then((responseData) => {
				this.props.onChange(responseData)
			})
	}
})

var styles = {
	container: {

	},
	thread: {
		display: 'flex',
		flexDirection: 'row',
		padding: '10px 8px',
		borderBottom: '1px solid rgba(0,0,0,.15)'
	},
	avatar: {

	},
	img: {
		width: '160px',
		height: '90px'
	},
	info: {
		marginLeft: '10px',
		height: '90px',
		position:'relative'
	},
	subject: {
		
	},
	author: {
		color: '#92979a',
		position: 'absolute',
		bottom: 0
	},
	footer: {
		display:'flex',
		justifyContent: 'center',
		padding:'10px 0'
	},
	btn: {
		height: '28px',
  	lineHeight: '28px',
  	width: '94px',
  	backgroundColor: '#fff',
	  border: '1px solid #2776dc',
	  color: '#2776dc'
	}
}

module.exports = List