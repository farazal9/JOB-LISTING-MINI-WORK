import React, { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './JobListing.css';

const JobListing = ({ 
  jobTitle, 
  companyName, 
  datePosted, 
  briefJobDescription, 
  fullJobDescription, 
  responsibilities, 
  requirements, 
  applyLink 
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleApply = () => {
    setIsApplied(true);
  };

  return (
    <div className="job-listing">
      <div className="job-header">
        <h2>{jobTitle}</h2>
    
        <p>{datePosted}</p>
        <p>{briefJobDescription}</p>
      </div>
      <div className="job-actions">
        <BookmarkIcon 
          onClick={toggleBookmark}
          style={{
            cursor: 'pointer',
            color: isBookmarked ? '#007bff' : 'gray',
            fontSize: '24px',
          }}
        />

      </div>

      {isBookmarked && (
        <div className="job-modal">
          
          <p><strong>Company:</strong> {companyName}</p>
          <p><strong>Full Description:</strong> {fullJobDescription}</p>
          <h4>Key Responsibilities:</h4>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4>Requirements:</h4>
          <ul>
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <a href={applyLink} target="_blank" rel="noopener noreferrer" className="apply-link">
            {isApplied ? "Applied" : "Apply Here"}
          </a>
          {!isApplied && (
            <button onClick={handleApply} className="apply-button">
              Apply
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
