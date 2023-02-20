import React from 'react'
import Card from '../Card/Card'
import logements from '../../gallery.json'


export default function Gallery() {
    return (
      
        <div className='kasa-array-list'>
          <ul className='kasa-logement-list'>
              {logements.map(data => <Card key={data.id} data={data} />) }
          </ul>
        </div>
      
      
    )
    
    
  }