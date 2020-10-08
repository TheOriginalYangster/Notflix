import React, { useEffect } from 'react'

import SearchBar from '../../common/SearchBar/SearchBar'

import './SearchPage.scss'

const baseClass = `search-page`
const container = `${baseClass}__container`

const searchContainerClass = `${baseClass}__search-container`
const SearchPage = () => {

  return (
    <div className={container}>
      <div className={searchContainerClass}>
        <SearchBar/>
      </div>
    </div>
  )
}

export default SearchPage