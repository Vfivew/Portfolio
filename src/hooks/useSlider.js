import { useState } from "./hooks";

const useSlider = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openSlider = (image) => {
    setSelectedImage(image);
    setShowSlider(true);
  };

  const closeSlider = () => {
    setShowSlider(false);
  };

  return {
    showSlider,
    selectedImage,
    openSlider,
    closeSlider,
  };
};

export { useSlider };
