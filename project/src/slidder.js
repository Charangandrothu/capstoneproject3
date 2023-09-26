import React, { useState } from 'react';
import h1 from './57.png';
import h2 from './46.png';
import h3 from './102.png';


function Slidder() {
  // Initialize the image index state with a default value of 0
  const [imageIndex, setImageIndex] = useState(0);

  // Array of image filenames
  const images = [h1, h2, h3];

  // Function to increment the image index
  const nextImage = () => {
    setImageIndex((imageIndex + 1) % images.length);
  }; // Function to decrement the image index
  const prevImage = () => {
    setImageIndex((imageIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <img src={images[imageIndex]} alt={` ${imageIndex + 1}`} />
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default Slidder;