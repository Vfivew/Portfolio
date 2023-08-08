import React, { useState } from 'react';
import useFormValidation from '../../hook/UseValidate';
import './Form.css';

const Form = ({ closeModal,handleBackdropClick }) => {
  const {
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    selectedService,
    setSelectedService,
    comments,
    setComments,
    isNameDirty,
    setIsNameDirty,
    isPhoneNumberDirty,
    setIsPhoneNumberDirty,
    isServiceDirty,
    setIsServiceDirty,
    isCommentsDirty,
    setIsCommentsDirty,
    isFormValid,
    nameError,
    phoneNumberError,
    selectedServiceError,
    commentsError,
  } = useFormValidation();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setIsNameDirty(true);
        break;
      case 'phoneNumber':
        setIsPhoneNumberDirty(true);
        break;
      case 'selectedService':
        setIsServiceDirty(true);
        break;
      case 'comments':
        setIsCommentsDirty(true);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Name:', name);
      console.log('Phone Number:', phoneNumber);
      console.log('Selected Service:', selectedService);
      console.log('Comments:', comments);
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className="modal-container" onClick={handleBackdropClick}>
      <div className="modal-content-inner">
        {isFormSubmitted ? (
          <div>
            <h2>Дякуємо за заповнення форми!</h2>
            <p>Ваша заявка успішно відправлена.</p>
            <button className='button-close-modal' type="button" onClick={closeModal}>
              Закрити
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <h2>Записатись</h2>
            <p>Заповніть форму</p>
            <div>
              <label htmlFor="name">Ім'я:</label>
              {isNameDirty && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setIsNameDirty(true);
                }}
                onBlur={(e) => blurHandler(e)}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Номер телефону:</label>
              {isPhoneNumberDirty && phoneNumberError && (
                <div style={{ color: 'red' }}>{phoneNumberError}</div>
              )}
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setIsPhoneNumberDirty(true);
                }}
                onBlur={(e) => blurHandler(e)}
                required
              />
            </div>
            <div>
              <label htmlFor="service">Оберіть послугу:</label>
              {isServiceDirty && selectedServiceError && (
                <div style={{ color: 'red' }}>{selectedServiceError}</div>
              )}
              <select
                id="service"
                name="selectedService"
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  setIsServiceDirty(true);
                }}
                onBlur={(e) => blurHandler(e)}
                required
              >
                <option value="">Оберіть тип послуги</option>
                <option value="Услуга 1">Послуга 1</option>
                <option value="Услуга 2">Послуга 2</option>
                <option value="Услуга 3">Послуга 3</option>
                <option value="Інше">Інше...</option>
              </select>
            </div>
            <div>
              <label htmlFor="comments">Побажання та коментар</label>
              {isCommentsDirty && commentsError && (
                <div style={{ color: 'red' }}>{commentsError}</div>
              )}
              <textarea
                id="comments"
                name="comments"
                value={comments}
                onChange={(e) => {
                  setComments(e.target.value);
                  setIsCommentsDirty(true);
                }}
                onBlur={(e) => blurHandler(e)}
                style={{ width: '100%', height: '6em', resize: 'vertical' }}
              />
            </div>
            <button type="submit" className="submit-button" disabled={!isFormValid}>
              Відправити
            </button>
          </form>
          )}
      </div>
    </div>
  );
};

export default Form;