import React from 'react'
import { useParams } from 'react-router-dom'
//import logements from '../../gallery.json'


export default function FicheLogement() {
  const {id} = useParams()
  console.log(id);
  return (
    <>
      
    </>
  )
}
