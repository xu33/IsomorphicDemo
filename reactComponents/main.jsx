var React = require('react')
var App = require('./app.js')

document.addEventListener('DOMContentLoaded', function() {
	React.render(<App arr={ReactData.arr}/>, document.body)
})