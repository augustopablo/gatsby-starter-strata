import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Just call me Pablo</strong>,
            <br /> a super React developer
            <br />
            with over 5+ years of experience
            <br />
            crafted by <a href="http://html5up.net">React.JS</a>
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
