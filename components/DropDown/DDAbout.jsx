import React from 'react';
import { useState } from 'react';
import ChevronUp from './../../assets/images/chevronUp.png'
import ChevronDown from './../../assets/images/chevronDown.png'

export default function DropDown(props){
    const [isOpen, setIsOpen] = useState(false)
    return  (
        
            <div className='dropdown'>
                <button className='dropdown-toogle-button' onClick={() => setIsOpen(!isOpen)}>
                    <h1>{props.title}</h1>
                    {isOpen ? <img src={ChevronUp} alt='fermer'/> :<img src={ChevronDown} alt='ouvrir'/>}
                </button>
                {isOpen && <p className='texte'> {props.texte} </p>}
            </div>
        
    )
}