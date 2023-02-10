import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


export default function DropDown(props){
    const [isOpen, setIsOpen] = useState(false)
    return  (
        <>
            <div className='dropdown'>
                <button className='dropdown-toogle-button' onClick={() => setIsOpen(!isOpen)}>
                    <h1>{props.title}</h1>
                    {isOpen ? <FontAwesomeIcon icon={faChevronUp}/> :<FontAwesomeIcon icon={faChevronDown}/>}
                </button>
                {isOpen && <p className='texte'> {props.texte}{props.liste}</p>
                  }
            </div>
        </>
    )
}