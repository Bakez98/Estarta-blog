import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='Container'>

        <h1>Estarta Blog</h1>
        <div className='Buttons'>
        <a href='#'>Home</a>
        <button><a href='/create'>New Blog</a></button>
        </div>
    </div>
  )
}

export default NavBar