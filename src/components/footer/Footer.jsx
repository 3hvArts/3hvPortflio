import React from 'react'
import './Footer.css'
import {CiFacebook} from 'react-icons/ci'
import {IoLogoInstagram} from 'react-icons/io'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>3hv</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><CiFacebook/></a>
        <a href="https://instagram.com"><IoLogoInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 3hv Design, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer