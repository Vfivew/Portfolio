import React, { useState } from 'react';
import Form from '../Form/Form';
import './Button.css';

const Button = ({ className, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    openModal();
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-container')) {
      closeModal();
    }
  };


  return (
    <div className='button-style'>
      {!isModalOpen && (
        <button type="button" className={`button${className}`} onClick={handleClick}>
          {text}
        </button>
      )}

      {isModalOpen && (
        <>
          <Form closeModal={closeModal} handleBackdropClick={handleBackdropClick} />
          <button className='button-close' type="button" onClick={closeModal}>
            Закрити
          </button>
        </>
      )}
    </div>
  );
};

export default Button;