import * as React from 'react'

import NotflixLogo from '../../../static/images/NotflixLogo.png'

import './Header.scss'

const baseClass = 'header'
const logoClass = `${baseClass}__logo`

const Header = () => {


  return (
    <div className={baseClass}>
      <img src={NotflixLogo} className={logoClass}/>
    </div>
  )
}

export default Header