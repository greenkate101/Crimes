var React = require('react');
var NflList = require('./NflList.jsx');

var App = React.createClass({
	render: function() {
		return (
			<main>
			<h1>Crime</h1>
			<NflList/>
			</main>
		);
	}
});


module.exports = App;