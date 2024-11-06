import React from 'react';
import JobListing from './Components/JobListing';
import './App.css'; // Optional: global styles

const jobData = {
  jobTitle: "Web Developer Intern",
  companyName: "Business Web Solutions",
  datePosted: "November 26",
  briefJobDescription: "Create engaging and user-friendly web interfaces for our clients.",
  fullJobDescription: `Create engaging and user-friendly web interfaces for our clients Business Web Solutions (BWS) was established in 2018 with a passionate team of Freelance Web Developers aiming to provide the most affordable web development and design services at the Lowest Price, tailored to small businesses, particularly those in tier-2 and tier-3 cities. BWS has its headquarters in USA and India and has a Global presence. We are a fast growing company so opportunities are more.`,
  responsibilities: [
    "Creating New website from the scratch",
    "Redesigning and rebuilding the old websites.",
    "Creating Sitemaps and designing Wireframes",
    "MORE......................................."
   
  ],
  requirements: [
    "Associate degree or equivalent experience.",
    "Language: English."
  ],
  applyLink: "https://www.linkedin.com/jobs/collections/remote-jobs/?currentJobId=4069887765&discover=true"
};

function App() {
  return (
    <div className="App">
      <JobListing {...jobData} />
    </div>
  );
}

export default App;
