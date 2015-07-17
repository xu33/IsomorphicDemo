'use strict';

var React = require('react');

var ThreadItem = React.createClass({
	displayName: 'ThreadItem',

	render: function render() {
		var avatar = 'http://bbs.tos.cn/ajax/getUserIcon?uid=' + this.props.authorid;
		return React.createElement(
			'div',
			{ style: styles.thread },
			React.createElement(
				'div',
				{ style: styles.avatar },
				React.createElement('img', { src: avatar, style: styles.img })
			),
			React.createElement(
				'div',
				{ style: styles.info },
				React.createElement(
					'div',
					{ style: styles.subject },
					this.props.subject
				),
				React.createElement(
					'div',
					{ style: styles.author },
					this.props.author
				)
			)
		);
	}
});

var List = React.createClass({
	displayName: 'List',

	render: function render() {
		return React.createElement(
			'div',
			{ style: styles.container },
			this.props.threads.map(function (item, index) {
				return React.createElement(ThreadItem, {
					subject: item.subject,
					author: item.author,
					authorid: item.authorid,
					key: item.tid
				});
			}, this),
			this.renderFooter()
		);
	},
	renderFooter: function renderFooter() {
		return React.createElement(
			'div',
			{ style: styles.footer },
			React.createElement(
				'button',
				{ style: styles.btn, onClick: this.loadMore },
				'加载更多'
			)
		);
	},
	loadMore: function loadMore() {
		var _this = this;

		fetch('/getThreads?offset=' + this.props.threads.length).then(function (response) {
			return response.json();
		}).then(function (responseData) {
			_this.props.onChange(responseData);
		});
	}
});

var styles = {
	container: {},
	thread: {
		display: 'flex',
		flexDirection: 'row',
		padding: '10px 8px',
		borderBottom: '1px solid rgba(0,0,0,.15)'
	},
	avatar: {},
	img: {
		width: '34px',
		height: '34px'
	},
	info: {
		marginLeft: '10px',
		height: '40px',
		position: 'relative'
	},
	subject: {
		fontSize: '13px'
	},
	author: {
		color: '#92979a',
		position: 'absolute',
		fontSize: '11px',
		bottom: 0
	},
	footer: {
		display: 'flex',
		justifyContent: 'center',
		padding: '10px 0'
	},
	btn: {
		height: '28px',
		lineHeight: '28px',
		width: '94px',
		backgroundColor: '#fff',
		border: '1px solid #2776dc',
		color: '#2776dc'
	}
};

module.exports = List;