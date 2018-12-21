/**
 * Does whatever the API needs to do, then returns data to the server, which outputs the data to the user.
 */
var friends = require('../data/friends');

// Functions and logic goes here
var api = {
  getBestMatch: function(user) {
    // the difference between input and best match's score
    var bff = {
      name: 'You have no friends.'
    };
    var bestMatch = 999;
    var curDif = 0;
    friends.forEach(function(friend) {
      for (var i = 0; i < friend.scores.length; i++) {
        curDif += Math.abs(friend.scores[i] - user.scores[i]);
      }
      if (curDif <= bestMatch) {
        bff = friend;
      }
    });
    return bff;
  }
};

module.exports = api;