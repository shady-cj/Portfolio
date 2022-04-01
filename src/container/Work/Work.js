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
    const [tags, setTags] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const handleWorkFilter = (item) => {
        setActiveFilter(item);

        setAnimateCard([{ y: 100, opacity: 0 }]);
        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
            if (item === "All") {
                setFilterWork(works);
            } else {
                setFilterWork(
                    works.filter((work) => {
                        const tags = work.tags.filter(
                            (tag) => tag.name === item
                        );
                        if (tags.length > 0) {
                            return work;
                        }
                    })
                );
            }
        }, 500);
    };

    useEffect(() => {
        const query = "*[_type == 'works']";
        const query2 = "*[_type == 'tags']";
        client.fetch(query2).then((data) => {
            setTags(data);
            client.fetch(query).then((data) => {
                setWorks(data);
                setFilterWork(data);
            });
        });
    }, []);
    return (
        <>
            <h2 className="head-text">
                My Creative <span>Portfolio</span> Section
            </h2>
            <div className="app__work-filter">
                {tags.map((item, index) => (
                    <div
                        className={`app__work-filter-item app__flex p-text ${
                            activeFilter === item.name ? "item-active" : ""
                        }`}
                        key={index}
                        onClick={() => handleWorkFilter(item.name)}
                    >
                        {item.name}
                    </div>
                ))}
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
                                    href={work.projectLink && work.projectLink}
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
                                    href={work.codeLink && work.codeLink}
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
                                <p className="p-text">{work.tags[0].name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio-mobile"
            >
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
                                    <p className="p-text">
                                        {work.tags[0].name}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, "app__works"),
    "work",
    "app__primarybg"
);
