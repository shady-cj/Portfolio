import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";
import SocialMedia from "../SocialMedia";
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
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
