import { Link } from "react-router";
import { LOGO } from "../../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
    const [btnType, setBtnType] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-9 py-3 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

            {/* Logo */}
            <div className="shrink-0">
                <img
                    className="w-24 sm:w-28 md:w-[133px]"
                    src={LOGO}
                    alt="Swiggy Logo"
                />
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2 sm:gap-4 md:gap-7">

                <ul className="flex items-center gap-2 sm:gap-4 md:gap-7 m-0 p-0 list-none">

                    <li>
                        <Link
                            className="text-sm sm:text-base md:text-xl font-medium text-gray-800 hover:text-[#fc8019] transition-colors"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="text-sm sm:text-base md:text-xl font-medium text-gray-800 hover:text-[#fc8019] transition-colors"
                            to="/about"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="text-sm sm:text-base md:text-xl font-medium text-gray-800 hover:text-[#fc8019] transition-colors"
                            to="/contact"
                        >
                            Contact Us
                        </Link>
                    </li>

                    {/* Online / Offline Status */}
                    <li
                        className={`flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ${onlineStatus
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                    >
                        <span
                            className={`w-2 h-2 rounded-full ${onlineStatus ? "bg-green-500" : "bg-red-500"
                                }`}
                        ></span>

                        {onlineStatus ? "Online" : "Offline"}
                    </li>

                    <li>
                        <Link
                            className="text-sm sm:text-base md:text-xl font-medium text-gray-800 hover:text-[#fc8019] transition-colors"
                            to="/grocery"
                        >
                            Grocery
                        </Link>
                    </li>

                    <li className="text-sm sm:text-base md:text-xl font-medium text-gray-800 hover:text-[#fc8019] cursor-pointer transition-colors">
                        Cart
                    </li>

                </ul>

                {/* Login / Logout Button */}
                <button
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-br from-[#fc8019] to-[#ff5722] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_5px_15px_rgba(252,128,25,0.3)] hover:-translate-y-0.5 hover:shadow-[0_9px_22px_rgba(252,128,25,0.45)] active:translate-y-0 active:scale-95 transition-all duration-300 whitespace-nowrap"
                    onClick={() => {
                        setBtnType(btnType === "Login" ? "Logout" : "Login");
                    }}
                >
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-0.5">
                        ↗
                    </span>
                    {btnType}
                </button>

            </div>
        </div>
    );
};

export default Header;
