import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';



function Menu() {
  return (
    <div className='App menu'>
        <Link to='/Posts'>Posts</Link>
        <Link to='/Comments'>Comments</Link>
        <Link to='/Albums'>Albums</Link>
        <Link to='/Photos'>Photos</Link>
        <Link to='/Todos'>Todos</Link>
        <Link to='/Users'>Users</Link>
    </div>
  )
}

export default Menu;
