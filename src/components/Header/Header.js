import "./Header.scss"
import React from 'react'
import logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img className="header-logo-image" src={logo} alt="logo" />
        <div className="header-logo-name">coketriks</div>
      </div>
      <div className="header-nav">
        <div className="header-nav-item">Home</div>
        <div className="header-nav-item">Our</div>
        <div className="header-nav-item">Mine</div>
        <div className="header-nav-item">Me</div>
      </div>
    </div>
  )
}

export default Header
