import React from "react";

const NavigatorDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {["home", "about", "work", "skills", "contact"].map(
                (item, index) => (
                    <a
                        // onClick={() => setToggle(false)}

                        href={`#${item}`}
                        key={item + index}
                        className="app__navigation-dot"
                        aria-label={`${item}`}
                        style={
                            active === item
                                ? {
                                      backgroundColor: "#313BAC",
                                      textIndent: "100%",
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                  }
                                : {
                                      textIndent: "100%",
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                  }
                        }
                    >
                        <p aria-hidden="true" style={{ display: "none" }}>
                            {item}
                        </p>
                    </a>
                )
            )}
        </div>
    );
};

export default NavigatorDots;
