import React from "react";
import "../index.css";
import "./styles/contact.css";
import Button from "./Button";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiMailLine } from "react-icons/ri";
export default function Contact() {
  return (
    <div id="contact" className="contact fade-in">
      <div className="heading">
        <hr className="line"></hr>
        <span className="code title_code blue">03.</span>
        <span className="title heading_text">&nbsp;Contact</span>
        <hr className="line"></hr>
      </div>
      <span className="title title_text">Get in touch</span>
      <div className="body paragraph">
        Currently, I'm not actively searching for new roles, but my inbox is
        always open. If you have a question or want to say hi, I'm always
        willing to respond.
      </div>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/danyalbabar/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://github.com/DanyalBabar/"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="mailto:danyalbabarcs@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <RiMailLine size={20} />
        </a>
      </div>
      <a
        href="https://www.linkedin.com/in/danyalbabar/"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="title_button">Say Hello!</Button>
      </a>
    </div>
  );
}
