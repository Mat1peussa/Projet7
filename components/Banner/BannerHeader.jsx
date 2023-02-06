import React from 'react';
import Image from '../../assets/images/mer-mobile.png';

export default function Banner (){
    return(
        
            <div className='banner'>
                <img src={Image} alt='mer' className='mer'/>
                <p className='slogan'>Chez vous,<br/> partout et ailleurs</p>
            </div>
        
    )  


}