import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Card({ id, cover, title }) {
    const navigate = useNavigate()
    return (
        <li key={id} className='logement'>
            <img onClick={()=> navigate(`/ficheLogement/${id}`)} className='kasa-item-cover' src={cover} alt={`${title} cover`} />
            <span className='title'>{title}</span>
        </li>
    )
}
    