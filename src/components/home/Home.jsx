import React from 'react'
import "./home.css"
import Me from "../../assets/profile1.jpg"
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    
    <section className='home container' id='home'>
      <div className="intro">
        <img src={Me} alt="" className="home__img" width="200px" height="200px" />
        <h1 className="home__name">Elisheva Einhoren</h1>
        <span className="home__education">I am a Front-End developer</span>

        <HeaderSocial />

        <a href="#about" className="btn">Know Me</a>

        <ScrollDown />
        
      </div>
    </section>
    
  )
}

export default Home