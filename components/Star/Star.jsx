import React from 'react';
import Image from '../../assets/images/RedStar.png';
import Image2 from '../../assets/images/greyStar.png';

export default function Rating(props){
     
    const Stars=[]
    for(let i=0; i<5; i++){
        (i<props.redStar)? Stars.push(Image) : Stars.push(Image2)
    }
    
    return (
        <div className='stars'>
          {Stars.map((data,index) => <img key={index} src={data} alt='étoiles' />) }
        </div>
    )
}





 