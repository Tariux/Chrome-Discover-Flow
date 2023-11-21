import React from 'react'
import Nav from './Nav'

var Logo = require('../../../public/images/logo.png');


function Header() {
  return (
    <div className='header'>
      <img src={Logo.default.replace(/([^:]\/)\/+/g, "$1")} />
      <Nav /> 
    </div>
  )
}

export default Header
