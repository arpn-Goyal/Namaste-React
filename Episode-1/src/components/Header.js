import { Link } from "react-router";
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
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}> About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
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