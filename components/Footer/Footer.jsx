import React from 'react'
import Logo from '../../assets/images/logoFooter.png'
import Copyright from '../../assets/images/copyright.png'

export default function Footer() {
  return (
    <div className='footer'>
        <img src={Logo} alt='Logo' className='kasa-logo'/>
        <img src ={Copyright} alt='Copyright' className='kasa-copyright'/>
    </div>
  )
}


