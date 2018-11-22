import React from "react";
import ReactDOM from "react-dom";

const StatelessComponent = ({ children }) => (
  <div>
    <p> This is a stateless component </p>
    <div>{children}</div>
  </div>
);

const AndAnother = () => (
  <div>
    <StatelessComponent> Yo! </StatelessComponent>
  </div>
);

ReactDOM.render(<AndAnother />, document.body);
