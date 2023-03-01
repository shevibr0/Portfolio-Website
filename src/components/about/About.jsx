import React from 'react'
import "./about.css"
import Image from "../../assets/profile2.jpg"
import CV from "../../assets/CV.pdf"

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img"  width="200px" height= "200px"/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            A software engineering student at the College of Management.
            Skilled in SQL, Java, C#, React and Angular
            Loves self learning.
            Experienced former social worker with a proven history of working in the private and family services industry. Skilled in communication, leadership, training and interpersonal communication.
            Looking for the next position.
            </p>
            <a href={CV} className="btn">Download Resume</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About