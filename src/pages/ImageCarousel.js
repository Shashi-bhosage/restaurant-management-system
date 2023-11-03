import React, { useState, useEffect } from 'react';
import "../styles/HomeStyles.css";
const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Automatically switch to the next slide at the specified interval
  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, interval]);

  return (
    <div className="image-carousel">
      <button onClick={prevSlide} className="nav-button prev">
        Previous
      </button>
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="nav-button next">
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
