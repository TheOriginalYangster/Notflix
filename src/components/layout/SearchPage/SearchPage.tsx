import React, { useEffect } from 'react'

import SearchBar from '../../common/SearchBar/SearchBar'
import MovieCard from '../../common/MovieCard/MovieCard'

import searchResults from '../../../static/initialMovies.json'

import './SearchPage.scss'

const baseClass = `search-page`

const searchContainerClass = `${baseClass}__search`
const resultsContainerClass = `${baseClass}__results`
const SearchPage = () => {

  const results = searchResults

  const movieCards = results.map(movie => <MovieCard movie={movie} />)

  return (
    <div className={baseClass}>
      <div className={searchContainerClass}>
        <SearchBar/>
      </div>
      <div className={resultsContainerClass}>
        {movieCards}
      </div>
    </div>
  )
}

export default SearchPage