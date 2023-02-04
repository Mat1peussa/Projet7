import React from 'react';
import { useState } from 'react';

export default function DropDownAbout (){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen ?(
        <>
            <div className='dropdown'>
                <button className='dropdown-toogle-button'
                    onClick={() => setIsOpen(false)}
                >Fermer</button>
                <h1>Salut</h1>
            </div>

            {/* <div className='dropdown'>
                <button className='dropdown-toogle-button'
                    onClick={() => setIsOpen(false)}
                >Fermer</button>
                <h1>Salut</h1>
            </div>

            <div className='dropdown'>
                <button className='dropdown-toogle-button'
                    onClick={() => setIsOpen(false)}
                >Fermer</button>
                <h1>Salut</h1>
            </div>

            <div className='dropdown'>
                <button className='dropdown-toogle-button'
                    onClick={() => setIsOpen(false)}
                >Fermer</button>
                <h1>Salut</h1>
            </div> */}
        </>

        
    ) : (
        <>
            <div className='dropdown-closed'>
                <button className='dropdown-toogle-button'
                    onclick={() => setIsOpen(true)}
                >Ouvrir</button>
            </div>

            

            {/* <div className='dropdown-closed'>
                <button className='dropdown-toogle-button'
                    onclick={() => setIsOpen(true)}
                >Ouvrir</button>
            </div>

            <div className='dropdown-closed'>
                <button className='dropdown-toogle-button'
                    onclick={() => setIsOpen(true)}
                >Ouvrir</button>
            </div>

            <div className='dropdown-closed'>
                <button className='dropdown-toogle-button'
                    onclick={() => setIsOpen(true)}
                >Ouvrir</button>
            </div> */}
        </>
    )
}