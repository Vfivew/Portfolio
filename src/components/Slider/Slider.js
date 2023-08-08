import React, { useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { galleryImage } from '../../resources/gallery-image/galleryImage';
import './Slider.css';

const Slider = ({ onClose, selectedImageIndex }) => {
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(selectedImageIndex);

  const handleCloseSlider = () => {
    onClose(activeIndex);
  };

  const handleSliderClick = (e) => {
    if (e.target.tagName === 'DIV') {
      handleCloseSlider();
    } 
  };

  return (
    <div className='slider-overlay' onClick={handleSliderClick}>
      <div className='slider-container' ref={sliderRef}>
        <button className='slider-close-button' onClick={handleCloseSlider}>
          Згорнути
        </button>
        <Carousel
          activeIndex={activeIndex}
          onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        >
          {galleryImage.map((image) => (
            <Carousel.Item key={image.id}>
              <img className='d-block mx-auto' src={image.imageUrl} alt={image.title} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;