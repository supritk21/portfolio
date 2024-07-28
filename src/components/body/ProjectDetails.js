// ProjectDetails.js
import React, { useState } from 'react';
import './ProjectDetails.css';
import ProjectModal from './ProjectModal'; // Import your modal component

function ProjectDetails() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'GPU Based Query Execution Using Raytracing Indexing',
      details:
        <p>OptiX is a GPU-based raytracing engine that harnesses the power 
         of GPUs for raytracing. When a ray intersects with an object in a 3D scene,
         it's considered a hit. This feature can be utilized for database lookups by modeling database indexes 
        as objects in a 3D scene. Lookups are done by intersecting rays with these objects. Performance evaluation involves comparing this new method with traditional GPU-based indexing methods like Hash tables and B+ trees by varying nine different dimensions in the experiment.</p>,
    },
    {
      title: 'Machine Translation',
      details:
        
         <p>
          English to Hindi machine translation on movie subtitles. The performance of translation is evaluated based on the BLEU (BiLingual Evaluation Understudy) score. Experiments are performed across three dimensions:
          <ul>
            <li>Tokenization - word level, subword level.</li>
            <li>Architecture - RNN, LSTM, Transformer.</li>
            <li>Mode of Training - Gradient clipping and without gradient clipping.</li>
          </ul>
          As expected, the Transformer performs best in translation tasks, but bidirectional LSTM trained with gradient clipping on small sequences can also achieve good translation results.
        </p>
        
    },
    // Add more projects as needed
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="project-details">
      <h2>Project Details</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-box"
            onClick={() => openModal(project)}
          >
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          projectTitle={selectedProject.title}
          projectDetails={selectedProject.details}
        />
      )}
    </div>
  );
}

export default ProjectDetails;




// import React from 'react';
// import './ProjectDetails.css';

// function ProjectDetails() {
//   return (
//     <div className="project-details">
//       <h2>Project Details</h2>
      
//       <div className="project-box">
//         <h3>GPU Based Query Execution Using Raytracing Indexing</h3>
//         <p>
//           OptiX is a GPU-based raytracing engine that harnesses the power of GPUs for raytracing. When a ray intersects with an object in a 3D scene, it's considered a hit. This feature can be utilized for database lookups by modeling database indexes as objects in a 3D scene. Lookups are done by intersecting rays with these objects. Performance evaluation involves comparing this new method with traditional GPU-based indexing methods like Hash tables and B+ trees by varying nine different dimensions in the experiment.
//         </p>
//       </div>

//       <div className="project-box">
//         <h3>Machine Translation</h3>
//         <p>
//           English to Hindi machine translation on movie subtitles. The performance of translation is evaluated based on the BLEU (BiLingual Evaluation Understudy) score. Experiments are performed across three dimensions:
//           <ul>
//             <li>Tokenization - word level, subword level.</li>
//             <li>Architecture - RNN, LSTM, Transformer.</li>
//             <li>Mode of Training - Gradient clipping and without gradient clipping.</li>
//           </ul>
//           As expected, the Transformer performs best in translation tasks, but bidirectional LSTM trained with gradient clipping on small sequences can also achieve good translation results.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetails;
