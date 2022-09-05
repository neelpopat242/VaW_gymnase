import React from 'react'
import Logo from '../images/logo.png'
import {AiOutlineInstagram} from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import  {AiFillTwitterCircle} from 'react-icons/ai'
import { trainers } from '../data'
const Footer = () => {
  return (
    <div  style={{ backgroundColor : "#0289f3"}}>
    <div className="py-5" >
        <div className='row text-white py-5  mx-4'>
            <div className='col-md-4 text-white'>
                
                <img src={Logo} alt="logo" style={{width : "50%" , display:"block",paddingBottom:"15px"}}  />
                
                <small className=''>Maiores fuga, cum praesentium esse laudantium! 
                  Distinctio nihil blanditiis accusantium atque, 
                  quo maxime inventore eum! Cum dolorem quibusdam amet et qui.</small>


                  <div className='d-flex justify-content-start my-3'>
                      <a href={trainers[0].socials[0]} className="btn btn-danger mx-3 my-2"><AiOutlineInstagram/></a>
                      <a href={trainers[0].socials[1]} className="btn btn-primary mx-3 my-2"><AiFillTwitterCircle/></a>
                      <a href={trainers[0].socials[2]} className="btn btn-primary mx-3 my-2 "><BsFacebook/></a>
                      <a href={trainers[0].socials[3]} className="btn btn-primary mx-3   my-2"><AiOutlineLinkedin/></a>
                      </div>
            </div>
            <div className='col-md-1'>
            </div>
            <div className='col-md-2'>
                <h4>Permalinks</h4>
                <ul className='list-unstyled'>
                    <li>About</li>
                    <li>Plans</li>
                    <li>Trainers</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='col-md-2'>
            <h4>Insights</h4>
                <ul className='list-unstyled'>
                    <li>Blog</li>
                    <li>Case Studies</li>
                    <li>Events</li>
                    <li>Communities</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='col-md-2'>
            <h4>Get in Touch</h4>
                <ul className='list-unstyled'>
                    <li>Contact Us</li>
                    <li>Support</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Footer