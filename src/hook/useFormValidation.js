import { useState, useEffect } from "../hook/hooks";

const useFormValidation = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [comments, setComments] = useState("");

  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isPhoneNumberDirty, setIsPhoneNumberDirty] = useState(false);
  const [isServiceDirty, setIsServiceDirty] = useState(false);
  const [isCommentsDirty, setIsCommentsDirty] = useState(false);

  const [nameError, setNameError] = useState("Ім'я складається лише з букв");
  const [phoneNumberError, setPhoneNumberError] = useState(
    'Формат номеру телефону "0999999999"'
  );
  const [selectedServiceError, setSelectedServiceError] =
    useState("Оберіть послугу");
  const [commentsError, setCommentsError] = useState(
    "Не більше 200 символів"
  );

  useEffect(() => {
    const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїҐґ]+$/;

    if (isNameDirty && !nameRegex.test(name)) {
      setNameError("Ім'я повинно містити тільки літери");
    } else if (isNameDirty && (name.length < 2 || name.length > 20)) {
      setNameError("Ім'я повинно містити від 2 до 20 літер");
    } else {
      setNameError("");
    }
  }, [name, isNameDirty]);

  useEffect(() => {
    if (isCommentsDirty && comments.length > 200) {
      setCommentsError("Будь ласка, не більше 200 символів");
    } else {
      setCommentsError("");
    }
  }, [isCommentsDirty, comments]);

  useEffect(() => {
    if (isServiceDirty && !selectedService) {
      setSelectedServiceError("Оберіть послугу");
    } else {
      setSelectedServiceError("");
    }
  }, [isServiceDirty, selectedService]);

  useEffect(() => {
    const phoneNumberRegex = /^[0]\d{9}$/;
    if (isPhoneNumberDirty && !phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError('Формат номеру телефону повинен бути "0999999999"');
    } else {
      setPhoneNumberError("");
    }
  }, [isPhoneNumberDirty, phoneNumber]);

  const isFormValid =
    !nameError &&
    !phoneNumberError &&
    !selectedServiceError &&
    (!commentsError || (commentsError && comments.length <= 200));

  return {
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
  };
};

export { useFormValidation };
