import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function DropDown(props){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ?(
        <>
            <div className='dropdown'>
                <button className='dropdown-toogle-button' onClick={() => setIsOpen(false)}>
                    <h1>{props.title}</h1>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
                <p> {props.texte} className='texte'</p>
            </div>
        </>
    ) : (
            <div className='dropdown-closed'>
                <button className='dropdown-toogle-button'onClick={() => setIsOpen(true)}>
                    <h1> {props.title}</h1> 
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
    )
}