import React from 'react'
import './About.css'
import bg from '../../assests/bb.jpg' 
const About = () => {
  return (
    <div className="abt-container">
    <div className="second">
      <h1 className="topic">About Me</h1>
      
      
      <div className="abt-text2">
        <img className="pp2 " src={bg} alt="" />
        <div className="desc">
          <div className="desc2">
              My name is Aayush Bikram Lamichhane, and I am currently pursuing<br/>
              a degree in Computer Engineering, entering my fourth and final year of<br/>
              studies. Welcome to my online portfolio! I'm delighted to have the<br/>
              opportunity to showcase my work and  my journey with<br/>
              you. Here, you'll find a collection of my works<br/>
              that represent my skills, interest and dedication.
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About