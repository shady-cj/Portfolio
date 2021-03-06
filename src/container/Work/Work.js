import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
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
    const [isMobile, setIsMobile] = useState(false);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);

        setAnimateCard([{ y: 100, opacity: 0 }]);
        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
            if (item === "All") {
                setFilterWork(
                    works.map((item) => {
                        return { ...item, readMore: false };
                    })
                );
            } else {
                setFilterWork(
                    works
                        .filter((work) => {
                            const tags = work.tags.filter(
                                (tag) => tag.name === item
                            );
                            if (tags.length > 0) {
                                return true;
                            }
                            return false;
                        })
                        .map((item) => {
                            return { ...item, readMore: false };
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
                setFilterWork(
                    data.map((item) => {
                        return { ...item, readMore: false };
                    })
                );
            });
        });

        const checkMedia = (e) => {
            if (window.innerWidth > 900) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        };
        window.addEventListener("resize", checkMedia);
        checkMedia();
        return () => {
            window.removeEventListener("resize", checkMedia);
        };
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

            {isMobile === false ? (
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
                                    {work.projectLink && (
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
                                    )}

                                    {work.codeLink && (
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
                                    )}
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
                        </div>
                    ))}
                </motion.div>
            ) : (
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
                        preventClicks={false}
                        preventClicksPropagation={false}
                    >
                        {filterWork.map((work, index) => (
                            <SwiperSlide key={index}>
                                <div className="app__work-img app__flex">
                                    <img
                                        src={work.imgUrl && urlFor(work.imgUrl)}
                                        alt={work.name}
                                        className="app__work-img-for-swiper"
                                    />
                                </div>
                                <div className="app__work-content app__flex">
                                    <div
                                        style={{
                                            backgroundColor:
                                                "rgb(223, 231, 240)",
                                            color: "black",
                                        }}
                                        className="app__work-tag app__flex"
                                    >
                                        <p className="p-text">
                                            {work.tags[0].name}
                                        </p>
                                    </div>
                                    <h4 className="bold-text">{work.title}</h4>
                                    <p
                                        className="p-text"
                                        style={{ marginTop: 10 }}
                                    >
                                        {work.readMore ? (
                                            <>
                                                {work.description}
                                                <br />
                                                <span
                                                    style={{ color: "#313bac" }}
                                                    onClick={() =>
                                                        setFilterWork(
                                                            filterWork.map(
                                                                (item) => {
                                                                    if (
                                                                        item._id ===
                                                                        work._id
                                                                    ) {
                                                                        return {
                                                                            ...item,
                                                                            readMore: false,
                                                                        };
                                                                    }
                                                                    return item;
                                                                }
                                                            )
                                                        )
                                                    }
                                                >
                                                    read less.
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                {work.description.slice(0, 100)}
                                                {"..."}
                                                <br />
                                                <span
                                                    style={{ color: "#313bac" }}
                                                    onClick={() =>
                                                        setFilterWork(
                                                            filterWork.map(
                                                                (item) => {
                                                                    if (
                                                                        item._id ===
                                                                        work._id
                                                                    ) {
                                                                        return {
                                                                            ...item,
                                                                            readMore: true,
                                                                        };
                                                                    }
                                                                    return item;
                                                                }
                                                            )
                                                        )
                                                    }
                                                >
                                                    read more.
                                                </span>
                                            </>
                                        )}
                                    </p>
                                </div>

                                <section className="app__work-link-section">
                                    {work.codeLink && (
                                        <a
                                            href={work.codeLink}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <BiGitRepoForked /> code
                                        </a>
                                    )}
                                    {work.projectLink && (
                                        <a
                                            href={work.projectLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="live-link"
                                        >
                                            <AiFillEye /> Live
                                        </a>
                                    )}
                                </section>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, "app__works"),
    "work",
    "app__primarybg"
);
