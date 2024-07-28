import React from 'react';
import './WorkExperienceDetails.css';

function WorkExperienceDetails() {
  return (
    <div className="work-experience-details">
    <h2>Work Experience</h2>
    <div className="experience-box">
      <h3>Web Developer at Cognizant Technology Solutions PVT. Ltd</h3>
      <p><strong>Role:</strong> Full Stack Web Developer</p>
      <p><strong>Duration:</strong> 17 months (Dec-2021 to June-2023)</p>
      <h4>Responsibilities:</h4>
      <ul>
        <li>Developed web applications using a full stack approach.</li>
        <li>Utilized .NET for backend development and React for frontend.</li>
        <li>Integrated REST APIs and worked with MS SQL databases.</li>
        <li>Collaborated with the team to identify and resolve application bugs.</li>
      </ul>
    </div>
  </div>
  );
}

export default WorkExperienceDetails;

