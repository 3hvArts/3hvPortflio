import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset()

    emailjs.sendForm('service_ltpwczp', 'service_ltpwczp', form.current, 'TbRb0reo3CbTxwcl7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>3hvArts@gmail.com</h5>
            <a href="mailto:3hvArts@gmail.com" target="_blank">Send a messages</a>
          </article>
          <article className="contact__option">
            <FiFacebook className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>3hv Arts</h5>
            <a href="https://facebook.com/profile.php?id=100085850448187" target="_blank">View my Facebook Pages</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h5>+12345678910</h5>
            <a href="https://api.whatsapp.com/send?phone+12345678910" target="_blank">Send a messages</a>
          </article>
        </div>
        {/* END OF THE CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='email' required />
          <textarea name="message " rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact