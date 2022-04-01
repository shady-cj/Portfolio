import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// const abouts = [
//     {
//         title: "Web Development",
//         description: "I am a good web developer",
//         ImgUrl: images.about01,
//     },
//     {
//         title: "Backend Developer",
//         description: "I am a good web designer",
//         ImgUrl: images.about02,
//     },
//     {
//         title: "Frontend Developer",
//         description: "I am a good web developer",
//         ImgUrl: images.about03,
//     },
//     {
//         title: "Web Development",
//         description: "I am a good web developer",
//         ImgUrl: images.about04,
//     },
// ];
const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = "*[_type == 'abouts']";
        client.fetch(query).then((data) => setAbouts(data));
    }, []);
    return (
        <>
            <h1 className="head-text">
                About <span>Me</span>
            </h1>

            <div className="app__profile">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                >
                    {abouts.map((about, index) => (
                        <SwiperSlide key={index}>
                            <img src={urlFor(about.imgUrl)} alt={about.title} />
                            <h2 className="bold-text" style={{ marginTop: 20 }}>
                                {about.title}
                            </h2>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                {about.description}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, "app__about"),
    "about",
    "app__whitebg"
);
