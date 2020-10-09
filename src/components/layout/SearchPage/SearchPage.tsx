import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../store/reducer'

import SearchBar from '../../common/SearchBar/SearchBar'
import MovieCard from '../../common/MovieCard/MovieCard'

import searchResults from '../../../static/initialMovies.json'

import './SearchPage.scss'

const baseClass = `search-page`

const searchContainerClass = `${baseClass}__search`
const resultsContainerClass = `${baseClass}__results`
const SearchPage = () => {

  const state = useSelector<AppState, AppState>(state => state)
  const results = state.data

  return (
    <div className={baseClass}>
      <div className={searchContainerClass}>
        <SearchBar/>
      </div>
      <div className={resultsContainerClass}>
        {results && results.length > 0 && (
          <>{results.map(movie => <MovieCard movie={movie} />)}</>
        )}
      </div>
    </div>
  )
}

export default SearchPage