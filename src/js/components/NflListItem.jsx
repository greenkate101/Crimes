var React = require('react');
var NflDetails = require('./NflDetails.jsx');

var NflListItem = React.createClass({

	getInitialState: function () {
		return {
			detailsVisible: false
		};
	},

	render: function() {
		var details;

		if (this.state.detailsVisible) {
			details = <NflDetails team={this.props.team}  />;
		}

		return (
			<div onClick={this.handleDetailsClick}>
				<h3>{this.props.team.Team_name}</h3>
				{details}
			</div>
		);
	},

	handleDetailsClick: function (){
		this.setState({
			detailsVisible: !this.state.detailsVisible
		});
	}

});


module.exports = NflListItem;