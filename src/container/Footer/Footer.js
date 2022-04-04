import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";
import { SocialMedia } from "../../components";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Create  a function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "" && email !== "" && message !== "") {
            setLoading(true);
            const contact = {
                _type: "contact",
                name: name,
                email: email,
                message: message,
            };
            client.create(contact).then(() => {
                setLoading(false);
                setIsSubmitted(true);
            });
        }
    };

    return (
        <>
            <h2 className="head-text">Chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:petersp2000@gmail.com" className="p-text">
                        petersp2000@gmail.com
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel:+2348159918440" className="p-text">
                        +2348159918440
                    </a>
                </div>
            </div>
            {!isSubmitted ? (
                <div className="app__footer-form app__flex">
                    {/* create a div with a class of app__flex and an input tag inside it with type="text" */}
                    <div className="app__flex">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            className="p-text"
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            type="email"
                            placeholder="Your 
                        Email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="p-text"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            className="p-text"
                            placeholder="Your Message"
                            value={message}
                            onChange={handleChange}
                        ></textarea>

                        {/* Create a button of type button and class of p-text and an onClick attribute of handleSubmit */}
                    </div>
                    <button onClick={handleSubmit} className="p-text">
                        {loading ? "Sending" : "Send Message"}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch
                    </h3>
                </div>
            )}
            <section className="social-mob-con">
                <SocialMedia mobile={true} className="social__mobile" />
            </section>
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__primarybg"
);
