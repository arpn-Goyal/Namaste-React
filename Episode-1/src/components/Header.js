import { LOGO } from "../../utils/constant";
import { useState } from "react";

// Header Component
const Header = () => {
    const[btnType, setBtnType] = useState('Login');

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} alt="Swiggy Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

                <button className="login-btn" onClick={() => {
                    if(btnType === 'Login' ? setBtnType('Logout') : setBtnType('Login'));
                }}>
                    <span className="login-icon">↗</span>
                    {btnType}
                </button>
            </div>
        </div>
    )
}

export default Header;