const express = require("express");
const ReactDOM = require("react-dom");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname));

console.log(__dirname);

app.get("/", (req, res) => {
  res.render("layout");
});

const server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  if (host === "::")
  {
    host = "localhost";
  }
  console.log("Server is listening at http://%s:%s", host, port);
});