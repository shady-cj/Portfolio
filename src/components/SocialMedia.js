import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = ({ mobile, className }) => {
    return (
        <div
            className={`app__social ${mobile ? "app__social-mobile" : ""} ${
                className ? className : ""
            }`}
        >
            <div>
                <a
                    href="https://twitter.com/_c_e_e_j_a_y"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="twitter"
                >
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a
                    href="https://github.com/shady-cj"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="github"
                >
                    <FaGithub />
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/erinfolami-peter-3330111a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="linkedin"
                >
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
