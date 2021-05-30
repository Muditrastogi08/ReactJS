import React from "react";
import ReactDOM from "react-dom";
import Heading from "./heading";

ReactDOM.render(
  <div>
    <Heading />
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YnvUiROv0VRX317ooP_9XwHaFj%26pid%3DApi&f=1 "
      alt="booklylogo"
    />
    <ul className="list">
      <li>Name</li>
      <li>Class</li>
    </ul>
  </div>,
  document.getElementById("root")
);
