/**
 * Does whatever the API needs to do, then returns data to the server, which outputs the data to the user.
 */
var friends = require('../data/friends');
var parrots = require('../data/parrots.js');

// Functions and logic goes here
var api = {
  friendsList: friends,
  parrotsList: parrots,
  getBestMatch: function (user, type) {
    // the difference between input and best match's score
    var bff = {
      name: 'You have no friends.'
    };
    var list = friends;
    var bestMatch = 999;
    var curDif = 0;

    if (type === 'parrot') {
      list = parrots;
    }
    list.forEach(function (index) {
      for (var i = 0; i < index.scores.length; i++) {
        curDif += Math.abs(index.scores[i] - user.scores[i]);
      }
      if (curDif <= bestMatch) {
        bff = index;
      }
    });
    return bff;
  }
};

module.exports = api;