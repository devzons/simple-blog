import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper indigo darken-4'>
        <div className='container'>
          <a href='/' className='brand-logo'>
            BLOG
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
