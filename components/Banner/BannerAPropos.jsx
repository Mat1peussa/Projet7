import React from 'react';
import Image from '../../assets/images/mountain-mobile.png';
import Image2 from '../../assets/images/mountain.png'

export default function Banner (){
    return(
        <div className='banner'>
            <img src={Image} alt='montagne' className='mountain-mobile'/>
            <img src={Image2} alt='montagne' className='mountain-desktop'/>
        </div>
    )
}