import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div className='skills'>
        <h1 className='skill'>My Skills</h1>
        <div className='car'>
          <ul>
            <h2 className='pro'>Programming Language</h2>
            <div className='skil'>
            <li>HTML</li>
            <li>CSS</li>
            <li>C</li>
            <li>C++</li>
            <li>Javascript</li>
            <li>Python</li>
            </div>
          </ul>
        </div>
        <div className='car'>
          <ul>
            <h2 className='pro'>Framework & Libraries</h2>
            <div className='skil'>
            <li>React.js</li>
            <li>Django</li>
            <li>Tailwind Css</li>
            </div>
          </ul>
        </div>
        <div className='car'>
          <ul>
            <h2 className='data'>Database</h2>
            <div className='db'>
              <li>MySQl</li>
              <li>MongoDB</li>
            </div>
          </ul> 
        </div> 
    </div>
  )
}

export default Skills