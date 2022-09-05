import React from 'react'
import '../../CSS/file.css'
import { trainers } from '../../data'
import {AiOutlineInstagram} from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import  {AiFillTwitterCircle} from 'react-icons/ai'
import Footer from '../../components/Footer'
const Trainers = () => {


  const Trainer1 = require('../../images/trainer1.jpg')
  const Trainer2 = require('../../images/trainer2.jpg')
  const Trainer3 = require('../../images/trainer3.jpg')
  const Trainer4 = require('../../images/trainer4.jpg')
  const Trainer5 = require('../../images/trainer5.jpg')
  const Trainer6 = require('../../images/trainer6.jpg')
  
  return (
    <>
    <div className='container'>
      
      <div className='row '>
        
        
          {
            trainers.map(({ id,image,name,job,socials}) => {
              return (
                <div key={id}>
                <div className='col-md-1'></div>
                <div className='col-md-4  py-3 my-2 '>
                  <div className="card card-css text-white"  key={id}>
                    <img src={image} className="card-img-top mx-4 px-3 my-3  " style={{width : "80%", height : "50%" }} />
                    <div className="card-body">
                      <h5 className="card-title text-center">{name}</h5>
                      <h5 className="card-title text-center">{job}</h5>
                      <div className='d-flex justify-content-center'>
                      <a href={socials[0]} className="btn btn-danger mx-3 my-2"><AiOutlineInstagram/></a>
                      <a href={socials[1]} className="btn btn-primary mx-3 my-2"><AiFillTwitterCircle/></a>
                      <a href={socials[2]} className="btn btn-primary mx-3 my-2 "><BsFacebook/></a>
                      <a href={socials[3]} className="btn btn-primary mx-3   my-2"><AiOutlineLinkedin/></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-1'></div>
                </div>
              )
            })
          }
        
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Trainers