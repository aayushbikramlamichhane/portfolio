import React from 'react'
import './Contact.css'
import gi from '../../assests/git.png'
import li from '../../assests/lin.png'

const Contact = () => {
return (
        <div id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={gi} alt='' className='link'/>
                    <img src={li}  alt='' className='link'/>
                </div> 
            </form>
        </div>
        </div>
)
}

export default Contact