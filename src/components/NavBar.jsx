/* eslint-disable no-labels */
import React from 'react'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  const activeNavBar = {
    color: "white",
    background: "green",
    borderRadius: 8 + "px",
  }

  return (
    <div className='navbar'>
      <h1> Random Blog</h1>
      <div className='links' style={{  }}>
        <NavLink to='/' style={({ isActive }) => isActive ? activeNavBar : {} } > Home </NavLink>
        <NavLink
          to='/create'
          style={({ isActive }) => isActive ? activeNavBar: {} }
        >
          New Blog
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar
