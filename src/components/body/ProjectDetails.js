// ProjectDetails.js
// import React, { useState } from 'react';
// import './ProjectDetails.css';
// import ProjectModal from './ProjectModal'; // Import your modal component

// function ProjectDetails() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       title: 'GPU Based Query Execution Using Raytracing Indexing',
//       details:
//         <p>OptiX is a GPU-based raytracing engine that harnesses the power 
//          of GPUs for raytracing. When a ray intersects with an object in a 3D scene,
//          it's considered a hit. This feature can be utilized for database lookups by modeling database indexes 
//         as objects in a 3D scene. Lookups are done by intersecting rays with these objects. Performance evaluation involves comparing this new method with traditional GPU-based indexing methods like Hash tables and B+ trees by varying nine different dimensions in the experiment.</p>,
//     },
//     {
//       title: 'Machine Translation',
//       details:
        
//          <p>
//           English to Hindi machine translation on movie subtitles. The performance of translation is evaluated based on the BLEU (BiLingual Evaluation Understudy) score. Experiments are performed across three dimensions:
//           <ul>
//             <li>Tokenization - word level, subword level.</li>
//             <li>Architecture - RNN, LSTM, Transformer.</li>
//             <li>Mode of Training - Gradient clipping and without gradient clipping.</li>
//           </ul>
//           As expected, the Transformer performs best in translation tasks, but bidirectional LSTM trained with gradient clipping on small sequences can also achieve good translation results.
//         </p>
        
//     },
//     // Add more projects as needed
//   ];

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="project-details">
//       <h2>Project Details</h2>
//       <div className="project-grid">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="project-box"
//             onClick={() => openModal(project)}
//           >
//             <h3>{project.title}</h3>
//           </div>
//         ))}
//       </div>
//       {selectedProject && (
//         <ProjectModal
//           isOpen={modalIsOpen}
//           closeModal={closeModal}
//           projectTitle={selectedProject.title}
//           projectDetails={selectedProject.details}
//         />
//       )}
//     </div>
//   );
// }

// export default ProjectDetails;




import React from 'react';
import './ProjectDetails.css';

function ProjectDetails() {
  return (
    <div className="project-details">
      <h2>Project Details</h2>
      
      <div className="project-box">
        <h3>GPU Based Query Execution Using Raytracing Indexing</h3>
        <ul> 
           <li><strong>OptiX</strong>: This is a GPU-based raytracing engine that leverages the computational power of GPUs for raytracing.</li>
           <li><strong>Ray Intersections</strong>: When a ray intersects with an object in a 3D scene, it’s considered a “hit.”</li> 
           <li><strong>Database Lookups</strong>: You propose using this ray-object intersection feature for database lookups. In this approach, database indexes are modeled as objects in a 3D scene, and lookups are performed by intersecting rays with these objects.</li>
           <li><strong>Performance Evaluation</strong>: To evaluate this method, you plan to compare it with traditional GPU-based indexing techniques (such as Hash tables and B+ trees). The experiment will vary across nine different dimensions.</li> 
        </ul>
      </div>

      {/* <div className="project-box">
        <h3>Machine Translation</h3>
        <p>
          English to Hindi machine translation on movie subtitles. The performance of translation is evaluated based on the BLEU (BiLingual Evaluation Understudy) score. Experiments are performed across three dimensions:
          <ul>
            <li>Tokenization - word level, subword level.</li>
            <li>Architecture - RNN, LSTM, Transformer.</li>
            <li>Mode of Training - Gradient clipping and without gradient clipping.</li>
          </ul>
          As expected, the Transformer performs best in translation tasks, but bidirectional LSTM trained with gradient clipping on small sequences can also achieve good translation results.
        </p>
      </div> */}
      <div className='project-box'>
      <h3>Machine Translation with Data Augmentation</h3>
      <p>
      <ul>
        <li>Developed a machine translation model for low-resource languages (Marathi, local Indian languages) by performing data augmentation.</li>
        <li>Utilized subword-level and word-level tokenization techniques.</li>
        <li>Trained the model using a 4-layer bidirectional LSTM architecture, implementing gradient clipping to prevent the exploding gradient problem.</li>
        <li>Also trained the model on a 6-layer encoder-decoder Transformer architecture.</li>
        <li>Achieved a good BLEU score of 0.66 on translation tasks, making it applicable to most Indic languages.</li>
      </ul>
      </p>
      </div>
      <div className='project-box'>
      <h3>UNET Architecture for Image Segmentation</h3>
      <p>
      <ul>
        <li>Built and trained a UNET architecture from scratch using PyTorch.</li>
        <li>Trained the model on the Carvana dataset, leveraging GPU acceleration.</li>
        <li>Achieved an impressive dice score of 0.98, closely matching the performance of the best segmentation models for that dataset.</li>
      </ul>
      </p>
      </div>
      <div className='project-box'>
      <h3>CIFAR Image Classification using Multiple Models</h3>
      <p>
      <ul>
        <li>Developed various models for image classification in 10 classes:</li>
        <ul>
          <li>KNN</li>
          <li>Softmax regression</li>
          <li>SVM</li>
          <li>MLP</li>
          <li>CNN</li>
        </ul>
        <li>Implemented vectorized code for forward pass, loss calculation, and model parameter updates using the NumPy library.</li>
        <li>CNN (2-layer) outperformed other models, followed by MLP (2-layer), SVM, Softmax regression, and KNN.</li>
      </ul>
      </p>
      </div>
    </div>
  );
}

export default ProjectDetails;
