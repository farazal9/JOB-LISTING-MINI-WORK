// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import JobListing from './JobListing/JobListing';
import MyJobs from './Components/MyJobs/MyJobs';
import LeftSec from './Components/LeftSec/LeftSec';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  const [favoritedJobs, setFavoritedJobs] = useState([]);

  const handleFavorite = (job) => {
    setFavoritedJobs((prevJobs) => {
      return prevJobs.some((savedJob) => savedJob.jobTitle === job.jobTitle)
        ? prevJobs
        : [...prevJobs, job];
    });
  };

  // Array of job data
  const jobs = [
    {
      jobTitle: "Frontend Developer",
      companyName: "Tech Corp",
      datePosted: "October 5, 2024",
      briefJobDescription: "A job for frontend developers.",
      fullJobDescription: "In-depth job description here.",
      responsibilities: ["Build UI", "Collaborate with team"],
      requirements: ["Experience with React", "Proficiency in JavaScript"],
      applyLink: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4021918315"
    },
    {
      jobTitle: "Backend Developer",
      companyName: "Dev Solutions",
      datePosted: "September 20, 2024",
      briefJobDescription: "A backend developer position.",
      fullJobDescription: "Backend Developer job details go here.",
      responsibilities: ["Develop APIs", "Integrate databases"],
      requirements: ["Experience with Node.js", "MongoDB knowledge"],
      applyLink: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4021918316"
    },
    {
      jobTitle: "Full Stack Developer",
      companyName: "Global Tech",
      datePosted: "October 1, 2024",
      briefJobDescription: "A full-stack development role.",
      fullJobDescription: "Full stack development job description.",
      responsibilities: ["Build frontend and backend", "Collaborate with cross-functional teams"],
      requirements: ["Experience with MERN stack", "Strong knowledge of JavaScript"],
      applyLink: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4021918317"
    },

    {
      jobTitle: "WordPress Developer",
      companyName: "Global Tech",
      datePosted: "October 4, 2024",
      briefJobDescription: "A WordPress Developerrole.",
      fullJobDescription: "Full stack development job description.",
      responsibilities: ["Build frontend and backend", "Collaborate with cross-functional teams"],
      requirements: ["Experience with MERN stack", "Strong knowledge of JavaScript"],
      applyLink: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4021918317"
    },
  ];

  return (
    <Router>
      <div>
        <Header />
        <div className="d-flex container">
          <LeftSec />
          <div className="job-listings">
            <Routes>
              <Route 
                path="/" 
                element={jobs.map((job, index) => (
                  <JobListing
                    key={index}
                    jobTitle={job.jobTitle}
                    companyName={job.companyName}
                    datePosted={job.datePosted}
                    briefJobDescription={job.briefJobDescription}
                    fullJobDescription={job.fullJobDescription}
                    responsibilities={job.responsibilities}
                    requirements={job.requirements}
                    applyLink={job.applyLink}
                    onFavorite={handleFavorite}
                  />
                ))} 
              />
              <Route 
                path="/my-jobs" 
                element={<MyJobs savedJobs={favoritedJobs} />} 
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
