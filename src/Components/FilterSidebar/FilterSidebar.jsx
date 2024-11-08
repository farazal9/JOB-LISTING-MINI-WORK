// JobFilterSidebar.js
import React, { useState } from 'react';

const FilterSidebar = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="job-filter-section border p-3">
      <button onClick={toggleFilterVisibility} className="btn btn-secondary mb-3">
        {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
      </button>

      {isFilterVisible && (
        <form>
          {/* Add your filter options here, like checkboxes and dropdowns */}
          <h5>Job Type</h5>
          <div>
            <input type="checkbox" id="fulltime" />
            <label htmlFor="fulltime">Full-time</label>
          </div>
          {/* More filter options can go here */}
        </form>
      )}
    </div>
  );
};

export default FilterSidebar;
