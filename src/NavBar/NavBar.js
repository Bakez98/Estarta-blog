import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='Container'>

        <h1>Estarta Blog</h1>
        <div className='Buttons'>
        <Link to={"/"}>Home</Link>
        <button><Link to={"/CreateBlog"}>New Blog</Link></button>
        </div>
    </div>
  )
}

export default NavBar