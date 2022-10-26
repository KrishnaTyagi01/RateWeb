import React from "react";
import { render } from "react-dom";

function Popup() {
  return <div>Popup 3</div>;
}

render(<Popup />, document.getElementById("react-target"));
