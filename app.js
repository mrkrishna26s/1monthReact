import React from "react";
import ReactDOM from "react-dom/client"

const header = React.createElement("div", {id:"heading"},
    [React.createElement("h1", {id:"parent"}, "This is parent"),
        React.createElement("div", {id:"child"},
    [React.createElement("h1",{},"I am child in react"),
     React.createElement("h3",{},"I am child in react")   
     ])]);

const jsxHeading = <h1>Namaste React using JSX</h1>;
console.log(jsxHeading);
 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
