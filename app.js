import React from "react";
import ReactDOM from "react-dom/client"

//react element
const header = React.createElement("div", {id:"heading"},
    [React.createElement("h1", {id:"parent"}, "This is parent"),
        React.createElement("div", {id:"child"},
    [React.createElement("h1",{},"I am child in react"),
     React.createElement("h3",{},"I am child in react")   
     ])]);

const jsxHeading = <h1>Namaste React using JSX</h1>;
console.log(jsxHeading);

//Functional component

const Title =() =>{
    return <h1>ARNAVI</h1>
}
const HeadingComponent = () => {
    return (
    <div>
        <Title />
        <h1>Namaste React using Functional Component</h1>
    </div>);
}

const HeadingComponent2 = () => <h1 className="heading">Namaste React using Functional Component</h1>;

 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
root.render(<HeadingComponent />)
