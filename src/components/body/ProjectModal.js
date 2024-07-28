import React from'react';
import Modal from'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '1000px',
    innerHeight: '1000px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
};

Modal.setAppElement('#root'); // Set the app element for accessibility

function ProjectModal({ isOpen, closeModal, projectTitle, projectDetails }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Project Details Modal"
    >
      <div className="ReactModal__Content">
        <h2>{projectTitle}</h2>
        <p>{projectDetails}</p>
        <button onClick={closeModal} className="close-modal">
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ProjectModal;