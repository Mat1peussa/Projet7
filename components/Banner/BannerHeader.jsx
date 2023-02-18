import React from 'react';
import Image from '../../assets/images/mer-mobile.png';
import Image2 from '../../assets/images/mer.png'

export default function Banner (){
    return(
        
            <div className='banner'>
                <img src={Image} alt='mer' className='mer-mobile'/>
                <img src={Image2} alt='mer' className='mer-desktop'/>
                <p className='slogan'>Chez vous, partout et ailleurs</p>
            </div>
        
    )  


}