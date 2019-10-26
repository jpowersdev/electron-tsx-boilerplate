import * as React from "react";
import * as ReactDOM from "react-dom";

const SecondaryWindow = () => {
  return (
    <>
      <div>
        <h1>Hello from the Secondary Process!</h1>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
          }
          button {
            height: 20px;
            width: 150px;
            margin: 2rem 0;
          }
        `}</style>
      </div>
    </>
  );
};

ReactDOM.render(<SecondaryWindow />, document.getElementById("root"));
