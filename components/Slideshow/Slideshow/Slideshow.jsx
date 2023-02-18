import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default function Slideshow(props) {
  console.log(props);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex(currentIndex === 0 ? props.pictures.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === props.pictures.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    
    <div className="slideshow">
      {props.pictures.map((data,index) => (
        <img 
          key={index} 
          src={data} 
          alt=""
          className={index === currentIndex ? 'visible' : 'hidden'}
        />
      ))}
      
      {props.pictures.length > 1 && <div className='button-slideshow'> 
        <button onClick={previousImage}><FontAwesomeIcon icon={faChevronLeft}/></button>
        <button onClick={nextImage}><FontAwesomeIcon icon={faChevronRight}/></button> 
      </div> } 
      
      
    </div>
  );
}





