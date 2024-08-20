import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math.js"; 

const root = ReactDOM.createRoot(document.getElementById("root")); 

console.log(pi); // In chrome developer tools you can console log the thing thats being imported to see its member data and then use the dot operator to more effeciently access them

root.render(
  <React.StrictMode>
    <ul>
      <li>{pi.default}</li>
      <li>{pi.doublePi}</li>
      <li>{pi.triplePi}</li>
    </ul>
  </React.StrictMode>
  ); 