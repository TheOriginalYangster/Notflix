import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../store/reducer'


import Slider from 'react-slick'
import Carousel from 'react-multi-carousel'
import MoviePoster from './MoviePoster/MoviePoster'
import './Carousel.scss'
import "react-multi-carousel/lib/styles.css"
const CarouselComponent = () => {

  const state = useSelector<AppState, AppState>(state => state)
  const { carouselMovies } = state

  const settings = {
    swipeable: false,
    draggable: true,
    infinite: true,
    transitionDuration: 700,
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if(carouselMovies){
    const moviePosters = carouselMovies.map(movie => <MoviePoster movie={movie} key={movie.imdbID}/>)
    return (
      <div className="carousel">
        <Carousel responsive={responsive} {...settings}>
          { moviePosters }
        </Carousel>
      </div>
    )
  } else return null
}

export default CarouselComponent