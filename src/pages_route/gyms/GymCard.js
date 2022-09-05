import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa'

import {Button} from 'react-bootstrap'
const GymCard = (props) => {

  return (
    <div style={{backgroundColor:"#131313"}}>
      <div className=' container py-4 my-4 ' style={{}}>
        <div className='row'>
          <div className='col-md-3'>
            <img src={props.gym_logo} alt="gym" />
          </div>
          <div className='col-md-2'></div>
          <div className='col-md-4 text-white '>
            <div className=''>
              <h4 className='my-2'>WTF : Hybrid Gym</h4>
              <span >
                <AiFillStar className='mx-1' /><AiFillStar className='mx-1' /><AiFillStar className='mx-1' /><AiFillStar className='mx-1'/><AiFillStar className='mx-1' />
              </span>
              <h6 className='my-2'>A 452 Basement, New Ashok Nagar</h6>
              <FaLocationArrow  style={{color : "#277b30"}}/><small> 3.5 minutes away</small> <small>| 2.4 km</small>
            </div>
          </div>
          <div className='col-md-1 text-white'></div>
          <div className='col-md-2 d-flex align-self-end text-center text-white'>
            <div className=''>
              
              <Button variant="danger">Book Now</Button>
              <br/>
              <small className= "fw-bold" style={{color : "#e2b411"}}>$ 50 for 3 months</small>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default GymCard