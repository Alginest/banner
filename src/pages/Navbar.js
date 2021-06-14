import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaHome, FaBookOpen, FaFlickr } from 'react-icons/fa'
const Navbar = () => {
  return (
    <header>
      <div className='nav-container'>
        <div className='logo'>
          <FaRegHeart className='icon-color' />
          <Link to='/' className='logo-icon'>
            Earth conservation
          </Link>
        </div>
        <nav className='nav-bar'>
          <ul>
            <li>
              <FaHome className='icon-snd' />
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li>
              <FaBookOpen className='icon-snd' />
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li>
              <FaFlickr className='icon-snd' />
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='container'>
        <div className='header-info'>
          <h1>Save The World.</h1>
          <p>Animals are not option , they are necessary.</p>
        </div>
      </div>
    </header>
  )
}

export default Navbar
