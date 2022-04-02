import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";
import ReactTypingEffect from "react-typing-effect";
import $ from "jquery";
window.jQuery = $;
require("jquery.ripples");
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};
const Header = () => {
    useEffect(() => {
        const createBubbles = () => {
            const section = document.querySelector("#home");
            const createElement = document.createElement("span");
            createElement.classList.add("bubble");
            let size = Math.random() * 60;
            createElement.style.width = 20 + size + "px";
            createElement.style.height = 20 + size + "px";
            createElement.style.left = Math.random() * window.innerWidth + "px";
            section.appendChild(createElement);
            setTimeout(() => {
                createElement.remove();
            }, 4000);
        };

        function hasWebGL() {
            var supported;

            try {
                var canvas = document.createElement("canvas");
                supported =
                    !!window.WebGLRenderingContext &&
                    (canvas.getContext("webgl") ||
                        canvas.getContext("experimental-webgl"));
            } catch (e) {
                supported = false;
            }

            try {
                // let is by no means required, but will help us rule out some old browsers/devices with potentially buggy implementations: http://caniuse.com/#feat=let
                eval("let foo = 123;");
            } catch (e) {
                supported = false;
            }

            if (supported === false) {
                console.log("WebGL is not supported");
            }

            canvas = undefined;

            return supported;
        }

        if (hasWebGL()) {
            $(".app__header").ripples({
                dropRadius: 10,
                perturbance: 0.01,
            });
            $("#home").ripples({
                dropRadius: 10,
                perturbance: 0.01,
            });
        }
        console.log(hasWebGL());

        const interval = setInterval(createBubbles, 250);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div id="home" className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">
                                <ReactTypingEffect
                                    text={["Peter"]}
                                    eraseDelay={900000000}
                                />
                            </h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text">FullStack Developer</p>
                        <p className="p-text">Freelancer</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                initial={{ opacity: 0 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    initial={{ scale: 0 }}
                    className="overlay_circle"
                    src={images.circle}
                    alt="profile_circle"
                />
            </motion.div>
            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                initial={{ opacity: 0, scale: 0 }}
                className="app__header-circles"
            >
                {[images.python, images.javascript, images.django].map(
                    (circle, index) => (
                        <div
                            className="circle-cmp app__flex"
                            key={`circle-${index}`}
                        >
                            <img src={circle} alt="circle" />
                        </div>
                    )
                )}
            </motion.div>
        </div>
    );
};

export default AppWrap(Header, "home");
