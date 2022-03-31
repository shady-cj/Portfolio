import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a
                    href="https://twitter.com/_c_e_e_j_a_y"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a
                    href="https://github.com/shady-cj"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/erinfolami-peter-3330111a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
