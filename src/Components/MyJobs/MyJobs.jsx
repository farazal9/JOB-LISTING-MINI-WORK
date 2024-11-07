import React, { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const MyJobs = ({ savedJobs }) => {
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);

  const toggleJobDetails = (index) => {
    setSelectedJobIndex(selectedJobIndex === index ? null : index);
  };

  return (
    <div className="my-jobs container">
      <h2>My Saved Jobs</h2>
      {savedJobs.length === 0 ? (
        <p>No jobs saved yet.</p>
      ) : (
        savedJobs.map((job, index) => (
          <div key={index} className="job-listing container">
            <div className="job-header">
              <h2>{job.jobTitle}</h2>
              <p>{job.datePosted}</p>
              <p>{job.briefJobDescription}</p>
            </div>
            <div className="job-actions">
              <BookmarkIcon
                onClick={() => toggleJobDetails(index)}
                style={{
                  cursor: 'pointer',
                  color: selectedJobIndex === index ? '#007bff' : 'gray',
                  fontSize: '24px',
                }}
              />
            </div>

            {selectedJobIndex === index && (
              <div className="job-modal">
                <p><strong>Company:</strong> {job.companyName}</p>
                <p><strong>Full Description:</strong> {job.fullJobDescription}</p>
                <h4>Key Responsibilities:</h4>
                <ul>
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <h4>Requirements:</h4>
                <ul>
                  {job.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="apply-link">
                  Apply Here
                </a>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MyJobs;
