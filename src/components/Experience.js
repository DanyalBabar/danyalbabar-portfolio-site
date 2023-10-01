import React from "react";
import "../index.css";
import styles from "./styles/experience.module.css";
import Button from "./Button";

export default function Experience() {
  const jobs = [
    {
      company: "Amazon Web Services",
      position: "Software Development Engineer Intern",
      date: "Sep - Dec 2022",
      location: "Seattle, WA",
    },
    {
      company: "Cisco Meraki",
      position: "Full Stack Engineer Intern",
      date: "May - Aug 2022",
      location: "San Francisco, CA",
    },
    {
      company: "Cloud DX",
      position: "Web Developer Co-op",
      date: "Sep - Dec 2021",
      location: "Kitchener, ON",
    },
    {
      company: "NCR Corporation",
      position: "Software Quality Engineer Co-op",
      date: "Jan - Aug 2021",
      location: "Waterloo, ON",
    },
    {
      company: "Betstamp",
      position: "Full Stack Engineer Co-op",
      date: "May - Aug 2020",
      location: "Toronto, ON",
    },
  ];

  return (
    <div id="experience" className={styles.experience}>
      <div className={`${styles.heading} fade-in`}>
        <hr className={styles.line}></hr>

        <span className={`code ${styles.title_code} blue`}>01.</span>
        <span className={`title ${styles.heading_text}`}>
          &nbsp;Where I've Worked
        </span>
        <hr className={styles.line}></hr>
      </div>
      <div style={{ width: "90%" }} className="fade-in">
        {jobs.map((job) => (
          <div className={styles.job}>
            <div className={styles.job_desc}>
              <span className={`title ${styles.company_text} blue`}>
                {job.company}
              </span>
              <span className={`body ${styles.position_text}`}>
                {job.position}
              </span>
            </div>
            <hr className={styles.separator}></hr>
            <div className={styles.job_details}>
              <span className={`code ${styles.date_text} blue`}>
                {job.date}
              </span>
              <span className={`code ${styles.location_text}`}>
                {job.location}
              </span>
            </div>
          </div>
        ))}
      </div>
      <a
        href={process.env.PUBLIC_URL + "/Danyal_Babar_Resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          style={{ alignSelf: "center" }}
          className={`${styles.title_button} fade-in`}
        >
          Check out my Resume
        </Button>
      </a>
    </div>
  );
}
