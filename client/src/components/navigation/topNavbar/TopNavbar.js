import React, { useContext, useState } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import { userContext } from "../../../context/userContext";
import Hamburger from "../hamburguer/Hamburger";
// import cookieMonster from "../../../utils/cookieMonster";

export default function TopNavbar() {
    const { userLoged } = useContext(userContext);
    const [menuActive, setMenuActive] = useState(false);

    // useEffect(() => {
    //     const tokenBoolean = cookieMonster("token");
    //     setIsLoged(tokenBoolean);
    //     if (tokenBoolean === false) {
    //         setMenuActive(false);
    //     }
    // });

    function handleMenu() {
        setMenuActive(!menuActive);
    }
    return (
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <Link to="/">
                        {" "}
                        <span>K</span>now<span>U</span>s
                    </Link>
                </h2>
            </div>

            <div className="menu-link">
                <ul>
                    {userLoged ? (
                        <li>
                            <button
                                className="options"
                                type="button"
                                onClick={handleMenu}
                            >
                                Options
                            </button>
                            <div className="burger-desktop">
                                <Hamburger />
                            </div>
                        </li>
                    ) : (
                        <li className="log-register-btn">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Signup</Link>
                        </li>
                    )}
                </ul>
                <li className="burger-mobile">
                    {userLoged && menuActive && <Hamburger />}
                </li>
            </div>
            {userLoged && menuActive && <Hamburger />}
        </nav>
    );
}
