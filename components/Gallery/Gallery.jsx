import React from 'react'
import Card from '../Card/Card'
import logements from '../../gallery.json'
//useContext

export default function Gallery() {
    return (
      <>
        <ul className='kasa-logement-list'>
            {logements.map(({id, title, cover}) => 
                <Card id={id} title={title} cover={cover} key={id}/>
            )}
            
        </ul>
      </>
      
    )
    
    
  }