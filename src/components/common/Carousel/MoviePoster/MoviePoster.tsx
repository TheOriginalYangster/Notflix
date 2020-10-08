import React, { useEffect } from 'react'


import './MoviePoster.scss'

const MoviePoster = ({ movie }) => {

  return (
    <div className="movie-poster">
      <img src={ movie.Poster } />
    </div>
  )
}

export default MoviePoster