import React,{useRef} from 'react'
import './Contact.css'
import gi from '../../assests/git.png'
import li from '../../assests/lin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4uhjr9g', 'template_jwwc6u6', form.current, 'xrhbrGMskQRdhnm3p')
            .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      };
return (
        <div id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>

                <input type='text' className='name' placeholder='Your Name' name='user_name'/>
                <input type='email' className='email' placeholder='Your Email' name='user_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn' >Submit</button>
                <div className='links'>
                    <a href='https://github.com/aayushbikramlamichhane' target='__blank'>
                    <img src={gi} alt='' className='link'/></a>
                    <a href='https://www.linkedin.com/in/aayush-l-c-88ba79179/' target='__blank'>
                    <img src={li}  alt='' className='link'/></a>
                </div> 
            </form>
        </div>
        </div>
)
}

export default Contact