import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const handleWorkFilter = (item) => {
        setActiveFilter(item);

        setAnimateCard([{ y: 100, opacity: 0 }]);
        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === "All") {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };

    useEffect(() => {
        const query = "*[_type == 'works']";
        client.fetch(query).then((data) => {
            setWorks(data);
            setFilterWork(data);
        });
    }, []);
    return (
        <>
            <h2 className="head-text">
                My Creative <span>Portfolio</span> Section
            </h2>
            <div className="app__work-filter">
                {["UI/UX", "Web App", "React Js", "Redux", "Django", "All"].map(
                    (item, index) => (
                        <div
                            className={`app__work-filter-item app__flex p-text ${
                                activeFilter === item ? "item-active" : ""
                            }`}
                            key={index}
                            onClick={() => handleWorkFilter(item)}
                        >
                            {item}
                        </div>
                    )
                )}
            </div>
            {/* create a motion.div tag */}
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img
                                src={work.imgUrl && urlFor(work.imgUrl)}
                                alt={work.name}
                            />
                            {/* create a motion.div tag */}
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                className="app__work-hover app__flex"
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                    staggerChildren: 0.5,
                                }}
                            >
                                <a
                                    href={work.projectLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <motion.div
                                        whileHover={{ scale: [1, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        className="app__flex"
                                        transition={{
                                            duration: 0.25,
                                        }}
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a
                                    href={work.codeLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <motion.div
                                        whileHover={{ scale: [1, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        className="app__flex"
                                        transition={{
                                            duration: 0.25,
                                        }}
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                {work.description}
                            </p>
                            <div className="app__work-tag app__flex">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="myCardSwiper"
            >
                {filterWork.map((work, index) => (
                    <SwiperSlide key={index}>
                        <div className="app__work-img app__flex">
                            <img
                                src={work.imgUrl && urlFor(work.imgUrl)}
                                alt={work.name}
                            />
                            {/* create a motion.div tag */}
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                className="app__work-hover app__flex"
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                    staggerChildren: 0.5,
                                }}
                            >
                                <a
                                    href={work.projectLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <motion.div
                                        whileHover={{ scale: [1, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        className="app__flex"
                                        transition={{
                                            duration: 0.25,
                                        }}
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a
                                    href={work.codeLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <motion.div
                                        whileHover={{ scale: [1, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        className="app__flex"
                                        transition={{
                                            duration: 0.25,
                                        }}
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                {work.description}
                            </p>
                            <div className="app__work-tag app__flex">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, "app__works"),
    "work",
    "app__primarybg"
);
