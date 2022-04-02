import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
    // Create a useState hook for experiences and skills
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const skillsQuery = "*[_type == 'skills']";

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);
    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>
            <div className="app__skills-container">
                {/* create motion.div as usual */}
                <motion.div className="app__skills-list">
                    {skills.map((skill, index) => {
                        return (
                            //create a motion.div tag
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className="app__skills-item app__flex"
                                key={skill.name + index}
                            >
                                <div
                                    className="app__flex"
                                    style={{ background: skill.bgColor }}
                                >
                                    <img
                                        src={urlFor(skill.icon)}
                                        alt={skill.name}
                                    />
                                </div>
                                <p className="p-text">{skill.name}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "skills",
    "app__whitebg"
);
