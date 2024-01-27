import React from 'react'
import './intro.css'
import bg from '../../assests/aayush.jpg' 

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>
                I'm<br/> 
                <span className='introName'>
                Aayush Bikram <br/>Lamichhane
                </span>
                <br />
            Computer Engineer
           </span>
        </div>
        <img src={bg} alt='Profile' className='bg'/> 
    </section>
  )
}

export default Intro