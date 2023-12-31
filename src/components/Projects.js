import React from "react";
import "../index.css";
import styles from "./styles/projects.module.css";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useWindowDimensions } from "../utilities/WindowDimensions";

export default function Projects() {
  const { width } = useWindowDimensions();

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  // Listen for new scroll events
  document.addEventListener("scroll", storeScroll);

  // Update scroll position for first time
  storeScroll();

  const projects = [
    {
      title: "myHouseKeeper.app",
      description:
        "Housekeeping web app that allows users to invite friends to " +
        "house groups using email signup links. Users can manage expenses" +
        " and auto-recurring chores that cycle through house members.",
      imgSrc: "myhousekeeper.png",
      tools: ["MongoDB", "Express", "React", "Node", "AWS"],
      gitLink: "https://github.com/DanyalBabar/myHouseKeeper",
      extLink: "https://myhousekeeper.app/",
    },
    {
      title: "AssistiveNote",
      description:
        "Assistive technology app that helps users see text that they " +
        "encounter in real life more accessibly. Users can upload images of " +
        "text and view the text in legible fonts and with text-to-speech.",
      imgSrc: "assistivenote.png",
      tools: ["React Native", "Node", "Firebase", "Google Cloud Platform"],
      gitLink: "https://github.com/DanyalBabar/AssistiveNoteApp",
      extLink: "https://github.com/DanyalBabar/AssistiveNoteApp",
    },
    {
      title: "@AmazonDeals_Bot",
      description:
        "A Twitter bot that tweets out Amazon-related deals from the r/deals" +
        " subreddit. Reddit posts are processed for links and keywords to be " +
        "eligible to tweet out.",
      imgSrc: "amazondeals.png",
      tools: ["Python", "Tweepy", "PRAW API"],
      gitLink: "https://github.com/DanyalBabar/AmazonDealsBot",
      extLink: "https://twitter.com/amazondeals_bot",
    },
  ];

  return (
    <div id="projects" className={styles.projects}>
      <div className={`${styles.heading} fade-in`}>
        <hr className={styles.line}></hr>

        <span className={`code ${styles.title_code} blue`}>02.</span>
        <span className={`title ${styles.heading_text}`}>
          &nbsp;Things I've Built
        </span>
        <hr className={styles.line}></hr>
      </div>
      {projects.map((project, key) => {
        return (
          <div
            className={`${styles.proj} fade-in`}
            style={{
              flexDirection: key % 2 ? "row-reverse" : "row",
            }}
          >
            <div
              className={styles.proj_details}
              style={
                width <= 1200
                  ? {
                      background: `linear-gradient(0deg, #071417e9, #071417e9), url(${require(`../static/${project.imgSrc}`)})`,
                      backgroundBlendMode: "multiply",
                      backgroundSize: "cover",
                    }
                  : {
                      alignItems: key % 2 ? "flex-end" : "flex-start",
                      marginRight: key % 2 ? "0" : "-10%",
                      marginLeft: key % 2 ? "-10%" : "0",
                    }
              }
            >
              <div
                className={styles.proj_header}
                style={{
                  alignItems:
                    width >= 1200 && key % 2 ? "flex-end" : "flex-start",
                }}
              >
                <span className={`code ${styles.proj_header_intro} blue`}>
                  Featured Project
                </span>
                <a
                  className={`title ${styles.proj_title}`}
                  href={project.extLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.title}
                </a>
              </div>
              <span className={`body ${styles.proj_desc}`}>
                {project.description}
              </span>
              <div className={`code offwhite ${styles.tools}`}>
                {project.tools.map((tool) => {
                  return <span>{tool}</span>;
                })}
              </div>
              <div className={styles.links}>
                <a href={project.gitLink} target="_blank" rel="noreferrer">
                  <FiGithub size={17} />
                </a>
                <a href={project.extLink} target="_blank" rel="noreferrer">
                  <FiExternalLink size={17} />
                </a>
              </div>
            </div>
            <a href={project.extLink} target="_blank" rel="noreferrer">
              <div className={styles.proj_img_container}>
                <img
                  className={styles.proj_img}
                  src={require(`../static/${project.imgSrc}`)}
                  alt="project"
                />
              </div>
            </a>
          </div>
        );
      })}
      ;
    </div>
  );
}
