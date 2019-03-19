const React = require("react");
const ReactDOM = require("react-dom");

function Clock(props) {
  return (
      <span><h1>{props.date.toLocaleTimeString()}</h1></span>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById("content")
  );
}

setInterval(tick, 1000);
