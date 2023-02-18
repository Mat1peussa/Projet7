import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({data}) {
    const navigate = useNavigate()
    const toDDLogements=()=>{
        navigate(`../FicheLogement/${data.id}`,{state:data})
    }
   
    return (
        <>
            <li key={data.id} className='logement'>
                <img onClick={()=>{toDDLogements()}} className='kasa-item-cover' src={data.cover} alt={`${data.title} cover`} />
                <span className='title'>{data.title}</span>
            </li>
        </>
    )
}
    