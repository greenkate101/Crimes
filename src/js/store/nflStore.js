var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var nflStore = Object.create(EventEmitter.prototype);
EventEmitter.call(nflStore);

var teams = [];

nflStore.getTeams = function () {
	return teams;
};

nflStore.fetchTeams = function () {
	$.ajax({
		url: "http://nflarrest.com/api/v1/crime/topTeams/Theft",
		success: function (response) {
			teams = teams.concat(response);
			nflStore.emit('update'); 
		}
	});
	return teams;
};

module.exports = nflStore;
