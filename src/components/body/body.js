import React from 'react';

import EducationalDetails from './EducationalDetails';
import ProjectDetails from './ProjectDetails';
import WorkExperienceDetails from './WorkExperienceDetails'
import faceLogo from '../logo/face2.png';
import './body.css'

const Body = () => {
    return (
    <div>
        <main>
        <section id="home" className='body_back'>
        <img src={faceLogo} alt="IISc Logo" className="university-logo" />
          <h1>Suprit Chafle</h1>
          <h2>Asparing Data Scientist</h2>
        </section>
        <section id="about">
        <WorkExperienceDetails />
        <ProjectDetails />
        <EducationalDetails />        
        </section>
      </main>
    </div>
);
};


export default Body    