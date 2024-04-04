import { useState, useEffect } from "../../hook/hooks";

import Slider from '../Slider/Slider';
import Spinner from '../Spinner/Spinner';
import { galleryImage } from '../../resources/gallery-image/galleryImage';
import "./Gallery.css";

const Gallery = () => {
  const [imagesToShow, setImagesToShow] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const totalImages = galleryImage.length;

  useEffect(() => {
    setIsLoading(false);
  }, [imagesToShow]);

  const loadMoreImages = () => {
    if (imagesToShow < totalImages && !isLoading) {
      setIsLoading(true);
      setImagesToShow((prevImagesToShow) => prevImagesToShow + 4);
    }
  };

  const openSliderModal = (index) => {
    setSelectedImageIndex(index);
    setShowSlider(true);
  };

  const closeSliderModal = () => {
    setSelectedImageIndex(null);
    setShowSlider(false);
  };

  const handleImageKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      openSliderModal(index);
    }
  };

  return (
    <div className="gallary-wrapper">
      <section className="my-gallery">
        <h2 className="my-gallery-title">Мої роботи</h2>
        <ul className="gallery-images">
          {galleryImage.slice(0, imagesToShow).map((image, index) => (
            <li
              className="gallery-image"
              key={image.id}
              style={{ opacity: isLoading ? 0 : 1 }}
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                onClick={() => openSliderModal(index)}
                onKeyDown={(e) => handleImageKeyDown(e, index)}
                tabIndex={0}
              />
            </li>
          ))}
        </ul>
        {imagesToShow < totalImages && (
          <div className="button-container">
            <button className="button" onClick={loadMoreImages}>
              Показати більше
            </button>
            {isLoading && <Spinner />}
          </div>
        )}
      </section>
      {showSlider && (
        <Slider
          selectedImageIndex={selectedImageIndex}
          onClose={closeSliderModal}
        />
      )}
    </div>
  );
};

export default Gallery;