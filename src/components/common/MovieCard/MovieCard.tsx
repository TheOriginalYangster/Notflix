import React, { useEffect } from 'react'


import MetaLogo from '../../../static/images/metacriticLogo.png'
import RTLogo from '../../../static/images/rottenTomatoesLogo.png'
import IMDBLogo from '../../../static/images/imdbLogo.png'

import './MovieCard.scss'

const baseClass = 'movie-card'

const topContainer = `${baseClass}__container-top`

const poster = `${topContainer}__poster`
const imgHelper = `${poster}__img-helper`

const summary = `${topContainer}__summary`
const titleBar = `${summary}__title-bar`
const ratings = `${titleBar}__ratings`
const actorBar = `${summary}__actor-bar`
const description = `${summary}__description`

const MovieCard = ({ movie }) => {

  const {
    Title,
    Actors,
    Released,
    Runtime,
    Ratings,
    Poster,
    Plot,
  } = movie

  const sortedRatings = {
    imdb: null,
    rt: null,
    mc: null,
  }

  Ratings.forEach(x => {
    if(x.Source === "Internet Movie Database") sortedRatings.imdb = x.Value
    else if(x.Source === "Rotten Tomatoes") sortedRatings.rt = x.Value
    else if(x.Source === "Metacritic") sortedRatings.mc = x.Value
  })

  return (
    <div className={baseClass}>
      <div className={topContainer}>
        <div className={poster}>
          <span className={imgHelper} />
          <img src={Poster} />
        </div>
        <div className={summary}>
          <div className={titleBar}>
            <h1>{Title}</h1>
            <div className={ratings}>
              { sortedRatings.imdb && (<>
                <img src={IMDBLogo}/>
                <span>{sortedRatings.imdb}</span>
              </>)}
              { sortedRatings.mc && (<>
                <img src={MetaLogo}/>
                <span>{sortedRatings.mc}</span>
              </>)}
              { sortedRatings.rt && (<>
                <img src={RTLogo}/>
                <span>{sortedRatings.rt}</span>
              </>)}
            </div>
          </div>
          <div className={actorBar}>
            <b>Actors: </b>
            <span>{Actors}</span>
          </div>
          <div className={description}>
            <b>Plot: </b>
            {Plot}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard