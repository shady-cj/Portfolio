import React from "react";

const NavigatorDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {["home", "about", "work", "skills", "testimonials", "contact"].map(
                (item, index) => (
                    <a
                        // onClick={() => setToggle(false)}

                        href={`#${item}`}
                        key={item + index}
                        className="app__navigation-dot"
                        style={
                            active === item
                                ? { backgroundColor: "#313BAC" }
                                : {}
                        }
                    />
                )
            )}
        </div>
    );
};

export default NavigatorDots;
