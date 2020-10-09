import * as React from 'react'
import { NavLink } from 'react-router-dom'
import NotflixLogo from '../../../static/images/NotflixLogo.png'

import './Header.scss'

const baseClass = 'header'
const logoClass = `${baseClass}__logo`

const Header = () => {


  return (
    <div className={baseClass}>
      <NavLink to="/">
        <img src={NotflixLogo} className={logoClass}/>
      </NavLink>
    </div>
  )
}

export default Header