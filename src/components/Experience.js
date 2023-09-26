import React from "react";
import "../index.css";
import "./styles/experience.css";
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
    <div id="experience" className="experience">
      <div className="heading fade-in">
        <hr className="line"></hr>

        <span className="code title_code blue">01.</span>
        <span className="title heading_text">&nbsp;Where I've Worked</span>
        <hr className="line"></hr>
      </div>
      <div style={{ width: "90%" }} className="fade-in">
        {jobs.map((job) => (
          <div className="job ">
            <div className="job_desc">
              <span className="title company_text blue">{job.company}</span>{" "}
              <span className="body position_text">{job.position}</span>
            </div>
            <hr className="separator"></hr>
            <div className="job_details">
              <span className="code date_text blue">{job.date}</span>
              <span className="code location_text">{job.location}</span>
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
          className="title_button fade-in"
        >
          Check out my Resume
        </Button>
      </a>
    </div>
  );
}
