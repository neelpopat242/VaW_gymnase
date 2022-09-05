import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {FaLocationArrow} from 'react-icons/fa'
const GymCard = (props) => {
  

  return (
    <div>
    <div className =' container py-4 my-4 ' style={{}}>
        <div className='row'>
            <div className='col-md-4'>
            <img src={props.gym_logo} alt="gym" />
            </div>
            <div className='col-md-4 text-white'>
                <h4>WTF : Hybrid Gym</h4>
                <span>
                  <AiFillStar />  
                 </span>
                 <h6 className='py-3'>A 452 Basement, New Ashok Nagar</h6>
                 <FaLocationArrow/><small> 3.5 minutes away</small> <small>| 2.4 km</small>

                 
                  <h3 className='text-gold'></h3>$ 50 for 4 months
                 
            </div>
            <div className='col-md-3'>
            </div>

        </div>
        
    </div>
    </div>
  )
}

export default GymCard