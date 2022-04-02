import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";
import "./Navbar.scss";
import SocialMedia from "../SocialMedia";
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const bodyEl = document.querySelector("body");
        const htmlEl = document.querySelector("html");
        bodyEl.classList.toggle("navbar-isopen", toggle);
        htmlEl.classList.toggle("navbar-isopen", toggle);
        const windowResize = () => {
            if (window.innerWidth > 900) {
                setToggle(false);
            }
        };
        window.addEventListener("resize", windowResize);
        return () => {
            window.removeEventListener("resize", windowResize);
        };
    }, [toggle]);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
                {["home", "about", "work", "skills", "contact"].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                <div
                    className={`app__navbar-menu-container ${
                        toggle && "app__navbar-menu-open"
                    }`}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {["home", "about", "work", "skills", "contact"].map(
                            (item, index) => (
                                <li
                                    key={item}
                                    className={
                                        toggle
                                            ? `animate__navbar-item-${index}`
                                            : ""
                                    }
                                >
                                    <a
                                        onClick={() => setToggle(false)}
                                        href={`#${item}`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>

                    <SocialMedia mobile={true} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
