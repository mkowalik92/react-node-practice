"use strict";

var express = require("express");
var ReactDOM = require("react-dom");

var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname));

console.log(__dirname);

app.get("/", function (req, res) {
  res.render("layout");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  if (host === "::") {
    host = "localhost";
  }
  console.log("Server is listening at http://%s:%s", host, port);
});
