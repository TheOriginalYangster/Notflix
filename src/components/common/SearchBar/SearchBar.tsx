import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router'
import searchIcon from '../../../static/images/searchIcon.png'
import { inputChanged, submitSearch } from '../../../store/actions'
import { AppState } from '../../../store/reducer'

import './SearchBar.scss'



const SearchBar = ({ history, location }) => {

  const dispatch = useDispatch()
  const state = useSelector<AppState, AppState>(state => state)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(submitSearch())
    if(location.pathname === "/") history.push('/search')
  }

  const onChange = (e) => {
    if(e.keycode === 13) dispatch(submitSearch())
    else dispatch(inputChanged(e.target.value))
  }

  return (
    <form className="search-bar-container">
      <input className="search-bar" onChange={onChange}>
      </input>
      <button className="search-button" onClick={onSubmit}>
        <img src={searchIcon} />
      </button>
    </form>
  )
}

export default withRouter(SearchBar)