import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement("div", { id: "child1" }, [React.createElement('h1', null, "H1 Tag"), React.createElement('h2', null, "H2F Tag")]),
//     React.createElement("div", { id: "child2" }, [React.createElement('h1', null, "H1 Tag"), React.createElement('h2', null, "H2F Tag")])]
// );

// React Element
const headingElement = <h1>React Element </h1>

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <h2 className="heading">
            Once again React Component
        </h2>
    </div>
)

const title = (
    <div className="head" tabIndex="5">
        {headingElement}
        <h3> Here is it the React Component:</h3>
        <HeadingComponent />
    </div>

)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
