import React from 'react'

import {

  
    NavLink
  } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to="/" className="navbar-brand" >HomePage</NavLink>
                
                </li>
                <li>
                <NavLink to="/Inicio" className="navbar-brand" >Inicio</NavLink>
                </li>
            
            </ul>
  
</nav>
            
        </div>
    )
}
