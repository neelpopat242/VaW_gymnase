import React from 'react'
import Footer from '../../components/Footer'
import Gen_Header from '../../components/Gen_Header'
import '../../CSS/file.css'
import Filter from './Filter'
import GymCard from './GymCard'
import Header_img from '../../images/gym.png'
import gymlogo from '../../images/gym_logo.jpeg'
const Gyms = () => {
  return (
    <div>
      <Gen_Header img={Header_img}  />
      <div className='row'>
        <div className='col-md-4'>
          <Filter/>
        </div>
        <div className='col-md-8'>  
        <GymCard gym_logo={gymlogo}/>
        <GymCard gym_logo={gymlogo}/>
        {/* <GymCard gym_logo={gymlogo}/>
        <GymCard gym_logo={gymlogo}/>
        <GymCard gym_logo={gymlogo}/>

        <GymCard gym_logo={gymlogo}/> */}
        
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Gyms