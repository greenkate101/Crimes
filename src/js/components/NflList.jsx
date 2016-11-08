var React = require('react');

var nflStore = require('../store/nflStore.js');
var NflListItem = require('./NflListItem.jsx');

var NflList = React.createClass({
	getInitialState: function() {
		return {
			teams: nflStore.fetchTeams()
			//ajax request nd previous state
		};	
	},

	componentWillMount: function() {
		var _this = this;
		nflStore.on('update', function() {
			_this.setState({
				teams: nflStore.getTeams()
			});
		});	
	},
	render: function() {
		var nflListItems = this.state.teams.map(function (team) {
			return <NflListItem key={team.Team} team={team} />
		});
		return (
			<div>
				<button onClick={this.handleLoadClick}>Load More</button>
				{nflListItems}
			</div>
		);
	},
	handleLoadClick: function(){
		nflStore.fetchTeams();
	}

	
});
module.exports = NflList;