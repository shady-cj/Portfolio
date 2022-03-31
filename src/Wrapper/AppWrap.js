import React from "react";
import { NavigationDots, SocialMedia } from "../components";
const AppWrap = (Component, idName, classNames) =>
    function HOC() {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />
                <div className="app__wrapper app__flex">
                    <Component />
                    <div className="copyright">
                        <p className="p-text">
                            &copy; {new Date().getFullYear()} Peter
                        </p>
                        <p className="p-text">All rights reserved</p>
                    </div>
                </div>
                <NavigationDots active={idName} />
                {idName !== "home" && (
                    <div
                        className={
                            idName === "about" || idName === "skills"
                                ? "fadeOut-effect"
                                : "fadeOut-effect-blue"
                        }
                    />
                )}
            </div>
        );
    };

export default AppWrap;
