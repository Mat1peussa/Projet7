import React from 'react';

export default function Host(props){
    return(
        <>
            <div className='kasa-host'>
               <p className='name'>{props.name}</p> 
               <img className='profilPhoto' src={props.profilPhoto} alt="Photoprofil"/>
            </div>
        </>
    )
}
