import React from "react";
import ReactDOM from "react-dom";
import pi, {doublePi, triplePi} from "./math.js"; 

const root = ReactDOM.createRoot(document.getElementById("root")); 


root.render(
  <React.StrictMode>
    <ul>
      <li>{pi}</li>
      <li>{doublePi}</li>
      <li>{triplePi}</li>
    </ul>
  </React.StrictMode>
  ); 