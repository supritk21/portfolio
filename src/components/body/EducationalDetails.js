import React from 'react';
import './EducationalDetails.css'; // Import the CSS file
import iiscLogo from '../logo/iisc.png';
import rcoemLogo from '../logo/rcoem.png';

function EducationalDetails() {
  return (
    <div className="educational-details">
      <h2>Educational Details</h2>
      <div className="grid-container">
        <div className="grid-item">
        <img src={iiscLogo} alt="IISc Logo" className="university-logo" />
          <h3>Master's Degree in Computational Data Sciences</h3>
          <p>Indian Institute of Science</p>
        </div>
        <div className="grid-item">
          <img src={rcoemLogo} alt="Shri Ramdeobaba College Logo" className="university-logo" />
          <h3>Bachelor's Degree in Civil Engineering</h3>
          <p>Shri Ramdeobaba College of Engineering</p>
        </div>
      </div>
    </div>
  );
}
// \logo\iisc.png
// \components\body\EducationalDetails.js
export default EducationalDetails;

