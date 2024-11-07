import React, { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './JobListing.css';

const JobListing = ({ 
  jobTitle, 
  companyName, 
  datePosted, 
  briefJobDescription, 
  fullJobDescription, 
  responsibilities, 
  requirements, 
  applyLink, 
  onSave, 
  onFavorite 
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  // Toggle bookmark status and save to "My Jobs"
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked && onSave) {
      onSave({
        jobTitle,
        companyName,
        datePosted,
        briefJobDescription,
        fullJobDescription,
        responsibilities,
        requirements,
        applyLink
      });
    }
  };

  // Toggle favorite status and add to "My Jobs"
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    if (!isFavorited && onFavorite) {
      onFavorite({
        jobTitle,
        companyName,
        datePosted,
        briefJobDescription,
        fullJobDescription,
        responsibilities,
        requirements,
        applyLink
      });
    }
  };

  return (
    <div className="job-listing container">
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
        <FavoriteBorderIcon 
          onClick={toggleFavorite}
          style={{
            cursor: 'pointer',
            color: isFavorited ? 'red' : 'gray',
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
            <button onClick={() => setIsApplied(true)} className="apply-button">
              Apply
            </button>
          )}
        </div>
      )}
    </div>




  );
};

export default JobListing;
