import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsBehance} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://behance.com" target="_blank"><BsBehance/></a>
    </div>
  )
}

export default HeaderSocials