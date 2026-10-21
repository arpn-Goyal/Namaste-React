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

// Header Component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/ewzI2BNExKkTNC5LMvnU6o4TvGxF_gGqb_tJGUnd4A0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NTgyLzk3Ni9zbWFs/bC9mbGF0LWlsbHVz/dHJhdGlvbi1vZi1h/LWJ1cmdlci1mcmll/cy1hbmQtZHJpbmst/ZmFzdC1mb29kLW1l/YWwtaW4tYS1tb2Rl/cm4tc3R5bGUtcG5n/LnBuZw" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
// Restraunt Container
const RestrauntCard = () => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h8cn0ae8cdykxczx5ffb" alt="Mrs & Mr Kitchen" />
            <div className="res-card-details">
                <h3>Mrs & Mr Kitchen</h3>

                <div className="res-rating">
                    <span>★</span> 4.2 · 25–30 mins
                </div>

                <p>North Indian, Chinese, Thalis</p>
                <p>Civil Lines</p>
                {/* <p>₹300 for two</p> */}
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />

            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            {/* Body */}
            <Body />
            {/* Footer */}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
