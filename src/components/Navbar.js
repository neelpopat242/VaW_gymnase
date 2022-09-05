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
                <div className="navbar-brand" href="#">
                <img src={Logo} alt="logo" style={{width : "50%" , display:"block", paddingTop: "30px"}}  />
                </div>
            </Link>
            
            <div className='justify-content-end d-flex  '>
            
            <ul className='nav me-auto mb-2 mb-lg-0'>
                {
                    links.map(({ name, path }, index) => {
                        return (
                            <li className="nav-item mx-4 " key={index} >
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