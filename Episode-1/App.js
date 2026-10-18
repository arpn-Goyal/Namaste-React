import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child1" }, [React.createElement('h1', null, "H1 Tag"), React.createElement('h2', null, "H2F Tag")]),
    React.createElement("div", { id: "child2" }, [React.createElement('h1', null, "H1 Tag"), React.createElement('h2', null, "H2F Tag")])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
