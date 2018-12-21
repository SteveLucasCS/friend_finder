// Dependencies
// var apiRoutes = require("./routing/api_routes.js");
// var htmlRoutes = require("./routing/html_routes.js");
var express = require("express");
var path = require("path");
var api = require('./app/routing/api_routes');

// Create express app instance.
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Routes
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, "app/public/index.html"));
});

app.get('./home', function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/index.html"));
});

app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get('/api/friends', function(req, res) {
  res.send(api.friends);
});

app.get('/api/parrots', function(req, res) {
  res.send(api.parrots);
});

app.post('/api/survey', function(req, res) {
  res.send(api.getBestMatch(req.body, 'friend'));
});

app.post('/api/parrot', function(req, res) {
  res.send(api.getBestMatch(req.body, 'parrot'));
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
