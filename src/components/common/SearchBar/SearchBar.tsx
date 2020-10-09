import React, { useEffect } from 'react'


import searchIcon from '../../../static/images/searchIcon.png'


import './SearchBar.scss'



const SearchBar = () => {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Submit')
  }

  return (
    <form className="search-bar-container">
      <input className="search-bar">
      </input>
      <button className="search-button" onClick={onSubmit}>
        <img src={searchIcon} />
      </button>
    </form>
  )
}

export default SearchBar