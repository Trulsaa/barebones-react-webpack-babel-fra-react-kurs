import React from "React";
import ReactDOM from "ReactDOM";

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

ReactDOM.render(document.body, <AndAnother />);
