"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

function Clock(props) {
  return React.createElement(
    "span",
    null,
    React.createElement(
      "h1",
      null,
      props.date.toLocaleTimeString()
    )
  );
}

function tick() {
  ReactDOM.render(React.createElement(Clock, { date: new Date() }), document.getElementById("content"));
}

setInterval(tick, 1000);