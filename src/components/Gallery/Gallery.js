import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import Spinner from '../Spinner/Spinner';
import './Gallery.css';
import { galleryImage } from '../../resources/gallery-image/galleryImage';

const Gallery = () => {
  const [imagesToShow, setImagesToShow] = useState(4);
  const [loading, setLoading] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const totalImages = galleryImage.length;

  const loadMoreImages = async () => {
    if (imagesToShow < totalImages && !loading) {
      setLoading(true);
      setImagesToShow((prevImagesToShow) => prevImagesToShow + 4);
      setLoading(false);
    }
  };

  const openSliderModal = (index) => {
    setSelectedImageIndex(index);
    setShowSlider(true);
  };

  const closeSliderModal = (index) => {
    setSelectedImageIndex(null);
    setShowSlider(false);
  };

  return (
    <div className='gallary-wrapper'>
      <section className='my-gallery'>
        <h2 className='my-gallery-title'>Мої роботи</h2>
        <ul className='gallery-images'>
          {galleryImage.slice(0, imagesToShow).map((image, index) => (
            <li className='gallery-image' key={image.id}>
              <img
                src={image.imageUrl}
                alt={image.title}
                onClick={() => openSliderModal(index)}
              />
            </li>
          ))}
        </ul>
        {imagesToShow < totalImages && (
          <div className='button-container'>
            <button className='button' onClick={loadMoreImages}>Показати більше</button>
            {loading && <Spinner />}
          </div>
        )}
      </section>
      {showSlider && <Slider selectedImageIndex={selectedImageIndex} onClose={closeSliderModal} />}
    </div>
  );
};

export default Gallery;