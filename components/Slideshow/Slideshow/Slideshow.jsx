import React, { useState } from 'react';
import ChevronRight from './../../../assets/images/chevronRight.png'
import ChevronLeft from './../../../assets/images/chevronLeft.png'


export default function Slideshow(props) {
  const nbSlides = props.pictures.length

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex(currentIndex === 0 ? nbSlides - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === nbSlides - 1 ? 0 : currentIndex + 1);
  };
  
  
  return (
    
    <div className="slideshow">
      {props.pictures.map((data,index) => (
        <img 
          key={index} 
          src={data} 
          alt="carroussel de photos"
          className={index === currentIndex ? 'visible' : 'hidden'}
        />
      ))}
      
      {nbSlides > 1 && <div className='button-slideshow'> 
        <button className='prev' onClick={previousImage}><img src={ChevronLeft} alt='chevron gauche'/></button>
        <button className='next' onClick={nextImage}><img src={ChevronRight} alt='chevron droite'/></button> 
      </div> } 

      <span className='slide-count'>{currentIndex +1}/{nbSlides}</span>
      
      
    </div>
  );
}





