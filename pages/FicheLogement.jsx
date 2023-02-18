import React from 'react'
import CollapseLogements from '../components/Collapse/CollapseLogement/CollapseLogements'
import {useLocation} from 'react-router-dom';

export default function FicheLogement() {
  const location = useLocation();
  return (
    <div className='logements'>
      <CollapseLogements data={location.state}/>
    </div>
  )
}
