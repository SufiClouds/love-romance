

// import React, { useState } from 'react';
// import Modal from './components/Model/Modal'; // Import the Modal component
// import './App.css';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   const handleButtonClick = (message) => {
//     setModalMessage(message);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalMessage('');
//   };

//   return (
//     <div className="button-container">
//       <button className="btn" onClick={() => handleButtonClick('Take Care')}>Ek Advise</button>
//       <button className="btn" onClick={() => handleButtonClick('Bhul Na Jana')}>Ek Request</button>
//       <button className="btn" onClick={() => handleButtonClick('Khush Raho')}>Ek Tamana</button>
//       <button className="btn" onClick={() => handleButtonClick('App ka Sath')}>Ek Khawahish</button>
//       <button className="btn" onClick={() => handleButtonClick('I Really Miss You')}>Ek Sach</button>

//       <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import Modal from './components/Model/Modal'; // Import the Modal component
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [expectedClickIndex, setExpectedClickIndex] = useState(0);
  const [warningMessage, setWarningMessage] = useState('');

  // Define the sequence of button clicks
  const buttonSequence = [
    'Take Care', 
    'Bhul Na Jana', 
    'Khush Raho', 
    'App ka Sath', 
    'I Really Miss You'
  ];

  const handleButtonClick = (message) => {
    if (message === buttonSequence[expectedClickIndex]) {
      // Correct button clicked
      setModalMessage(message);
      setIsModalOpen(true);
      setExpectedClickIndex(prevIndex => prevIndex + 1);
    } else {
      // Incorrect button clicked
      setWarningMessage('Wrong button clicked! Please follow the sequence.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
  };

  const closeWarning = () => {
    setWarningMessage('');
  };

  return (
    <div className="button-container">
      <h1 className="heading">Click This Button With A Flow</h1>
      <button className="btn" onClick={() => handleButtonClick('Take Care')}>Ek Advise</button>
      <button className="btn" onClick={() => handleButtonClick('Bhul Na Jana')}>Ek Request</button>
      <button className="btn" onClick={() => handleButtonClick('Khush Raho')}>Ek Tamana</button>
      <button className="btn" onClick={() => handleButtonClick('App ka Sath')}>Ek Khawahish</button>
      <button className="btn" onClick={() => handleButtonClick('I Really Miss You')}>Ek Sach</button>

      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />

      {warningMessage && (
        <Modal isOpen={!!warningMessage} onClose={closeWarning} message={warningMessage} />
      )}
    </div>
  );
};

export default App;
