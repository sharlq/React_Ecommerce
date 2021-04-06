import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "./style/main.css"





console.log(process.env.REACT_APP_CHEC_PUBLIC_KEY)

ReactDOM.render(<App />,document.getElementById("root"))