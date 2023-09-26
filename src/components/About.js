import React from "react";
import "../index.css";
import "./styles/about.css";
import Button from "./Button";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiMailLine } from "react-icons/ri";

export default function About() {
  return (
    <div className="about">
      <p
        className="code blue title_code fade-in-initial"
        style={{
          transitionDelay: "1s",
        }}
      >
        Hi, my name is
      </p>
      <div
        className="title title_text fade-in-initial"
        style={{
          transitionDelay: "1.4s",
        }}
      >
        Danyal Babar.
      </div>
      <div
        className="title title_text offwhite fade-in-initial"
        style={{
          transitionDelay: "1.6s",
        }}
      >
        I'm a UWaterloo alumni.
      </div>
      <div
        className="body paragraph fade-in-initial"
        style={{
          transitionDelay: "1.8s",
        }}
      >
        <span>
          I’m a computer science alumni from the University of Waterloo who is
          passionate about software engineering. Last year, I interned at
          <span className="blue bold"> Amazon Web Services</span> and{" "}
          <span className="blue bold">Cisco Meraki</span>. Right now, I’m
          searching for entry level software engineering roles.
        </span>
      </div>
      <div
        className="socials  fade-in-initial"
        style={{
          transitionDelay: "2s",
        }}
      >
        <a
          href="https://www.linkedin.com/in/danyalbabar/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="title_button">Hire me</Button>
        </a>
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
    </div>
  );
}
