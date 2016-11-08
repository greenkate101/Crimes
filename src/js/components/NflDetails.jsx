var React = require('react');

var NflDetails = React.createClass({

	render: function () {
		return (
			<div>
				<h5>{this.props.team.Team_city}</h5>
				<h5>{this.props.team.arrest_count}</h5>
				
			</div>
		);
	}

});


module.exports = NflDetails;