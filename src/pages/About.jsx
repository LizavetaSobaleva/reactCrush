import React from 'react'
import Counter from '../components/Counter'
import Repeater from '../components/Repeater'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Project to practice my skills and understand React better.</h2>
      <div className='about'>
        <Counter/>
        <Repeater/>
      </div>

    </div>
    
  )
}

export default About