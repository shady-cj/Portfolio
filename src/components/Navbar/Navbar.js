import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";
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
                    // whileInView={{ x: [300, 0] }}
                    // transition={{
                    //     duration: 0.85,
                    //     ease: "easeOut",
                    // }}
                    // initial={{ x: 300 }}
                    className={toggle && "app__navbar-menu-open"}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {["home", "about", "work", "skills", "contact"].map(
                            (item, index) => (
                                <li
                                    key={item}
                                    // animate={{
                                    //     x: [500, 0],
                                    // }}
                                    // initial={{ x: 100 }}
                                    // transition={{
                                    //     delay: index,
                                    //     duration: 0.7,
                                    // }}
                                    className={
                                        toggle &&
                                        `animate__navbar-item-${index}`
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
