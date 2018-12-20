/**
 * Does whatever the API needs to do, then returns data to the server, which outputs the data to the user.
 */
var mysql = require("mysql");
var responseData;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root",
  database: "friendfinder_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("mysql: error connecting: " + err.stack);
    return;
  }
  console.log("mysql: connected as id " + connection.threadId);
});

// Functions and logic goes here


module.exports =  responseData;