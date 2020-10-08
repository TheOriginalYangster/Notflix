import React, { useEffect } from 'react'

import Carousel from '../../common/Carousel/Carousel';
import SearchBar from '../../common/SearchBar/SearchBar';

import './LandingPage.scss';

const LandingPage = () => {


  useEffect(() => {
    console.log("landing page mounted")
  }, [])
  
  return (

    <div className="landing-page-container">
      <div className="search-area-container">
        <div className="search-area">
          <div className="search-text">
            <h1>Search for your favorite movies.</h1>
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  )
}

export default LandingPage