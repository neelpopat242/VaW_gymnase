import React from 'react'
import Logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { GoThreeBars } from 'react-icons/go'
import '../CSS/file.css'
const Navbar = () => {
    return (
        <nav className='navbar' style={{ backgroundColor : "#0289f3"}} >
            <div className='container  '>
                <Link to="/" className='logo '>
                <a class="navbar-brand" href="#">
                <img src={Logo} alt="logo" style={{width : "50%" , display:"block", paddingTop: "30px"}}  />
                </a>
            </Link>
            
            <div className='justify-content-end d-flex  '>
            
            <ul className='nav me-auto mb-2 mb-lg-0'>
                {
                    links.map(({ name, path }, index) => {
                        return (
                            <li class="nav-item mx-4 " >
                                <NavLink to={path} style={{color : "white"}} className={({isActive})=> isActive ? 'active-nav-item ' : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            
            </div>
            </div>
             
         </nav >
  )
}

export default Navbar