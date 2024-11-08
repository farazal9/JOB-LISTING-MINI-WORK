// src/Components/LeftSec/LeftSec.js
import React from 'react';

const LeftSec = () => {
  return (
    <div className="job-filter-section border p-3">
      <form>
        {/* Job Type */}
        <h5>Job Type</h5>
        {['Full-time', 'Part-time', 'Freelance', 'Contract', 'Internship', 'Temporary'].map(type => (
          <div key={type}>
            <input type="checkbox" id={type} name="jobType" />
            <label htmlFor={type}> {type}</label>
          </div>
        ))}

        {/* Work Environment */}
        <h5 className="mt-3">Work Environment</h5>
        {['Onsite', 'Online', 'Hybrid'].map(env => (
          <div key={env}>
            <input type="checkbox" id={env} name="workEnvironment" />
            <label htmlFor={env}> {env}</label>
          </div>
        ))}

        {/* Skills */}
        <h5 className="mt-3">Skills</h5>
        {['Data Analysis', 'Project Management', 'Software Development', 'Communication'].map(skill => (
          <div key={skill}>
            <input type="checkbox" id={skill} name="skills" />
            <label htmlFor={skill}> {skill}</label>
          </div>
        ))}

        {/* Additional Filters */}
        <h5 className="mt-3">Educational Level</h5>
        <select className="form-select">
          <option value="">Select Level</option>
          <option value="highSchool">High School</option>
          <option value="bachelors">Bachelor's</option>
          <option value="masters">Master's</option>
        </select>

        <h5 className="mt-3">Posted Date</h5>
        <select className="form-select">
          <option value="">Select Date</option>
          <option value="last24h">Last 24 hours</option>
          <option value="last7days">Last 7 days</option>
          <option value="last30days">Last 30 days</option>
        </select>

        <h5 className="mt-3">Salary Range</h5>
        <select className="form-select">
          <option value="">Select Range</option>
          <option value="0-50000">0-50,000</option>
          <option value="50000-100000">50,000-100,000</option>
          <option value="100000+">100,000+</option>
        </select>

        <h5 className="mt-3">Experience</h5>
        <select className="form-select">
          <option value="">Select Experience</option>
          <option value="0-1">0-1 years</option>
          <option value="1-3">1-3 years</option>
          <option value="3+">3+ years</option>
        </select>
      </form>
    </div>
  );
};

export default LeftSec;
