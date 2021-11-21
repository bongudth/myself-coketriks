import "./Header.scss"
import React from 'react'
import { Link } from 'react-location'
import logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img className="header-logo-image" src={logo} alt="logo" />
        <div className="header-logo-name">coketriks</div>
      </div>
      <div className="header-nav">
        <Link to="/" className="header-nav-item">Home</Link>
        <Link to="/our" className="header-nav-item">Our</Link>
        <Link to="/mine" className="header-nav-item">Mine</Link>
        <Link to="/me" className="header-nav-item">Me</Link>
      </div>
    </div>
  )
}

export default Header
