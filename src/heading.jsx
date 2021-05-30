import React from "react";
var Fname = "Mudit";
var Lname = " Rastogi";
function Heading() {
  return <h1 className="heading">Hello{Fname + "" + Lname}</h1>;
}

export default Heading;
