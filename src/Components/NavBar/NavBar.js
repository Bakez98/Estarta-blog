import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='Containers'>

        <Link to={"/"} className="styling"><h1>Estarta Blog</h1> </Link>
        <div className='Buttons'>
        <Link to={"/"} className="styling"><h2>Home</h2></Link>
        <button><Link to={"/CreateBlog"} >New Blog</Link></button>
        </div>
    </div>
  )
}

export default NavBar