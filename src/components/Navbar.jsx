import React from 'react'
import logo from '../assets/logo1.png'

const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
        <div className="container">
            <div className="container logo col-2">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" width="90" height="45"/>
            </a>
            </div>
            <div className="container title p-1 text-end col-9">
                <p className='h3 pe-12'>aDMe - A Business Co-pilot</p>
            </div>
  </div>
</nav>
    </>
  )
}

export default Navbar