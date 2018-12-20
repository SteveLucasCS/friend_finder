// Dependencies
// var apiRoutes = require("./routing/api_routes.js");
// var htmlRoutes = require("./routing/html_routes.js");
var express = require("express");
var path = require("path");
// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

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

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
