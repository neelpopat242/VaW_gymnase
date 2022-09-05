import React from 'react'
import Footer from '../../components/Footer'
import Gen_Header from '../../components/Gen_Header'
import '../../CSS/file.css'
import Filter from './Filter'
import GymCard from './GymCard'
import Header_img from '../../images/gym.png'
import gymlogo from '../../images/gym_logo.jpeg'
import {GoLocation} from 'react-icons/go'
import {AiOutlineSearch} from 'react-icons/ai'
const Gyms = () => {
  return (
    <div style={{backgroundColor : "#080808"}}>
      <Gen_Header img={Header_img}  />


      <div className="container border rounded my-5">
      <form class="d-flex py-2 mx-3" role="search">
      <h4 className='mx-2 text-white'><AiOutlineSearch /></h4><input class="form-control border-0 bg-transparent  " type="search" placeholder="Search" aria-label="Search"/>
        <button className='btn btn-danger mx-2'><GoLocation/></button><button class="btn btn-danger mx-2" type="submit">Search</button>
      </form>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <Filter/>
        </div>
        <div className='col-md-8'>  
        <GymCard gym_logo={gymlogo}/>
        <GymCard gym_logo={gymlogo}/>
        <GymCard gym_logo={gymlogo}/>
        <GymCard gym_logo={gymlogo}/>
        <GymCard gym_logo={gymlogo}/>

        <GymCard gym_logo={gymlogo}/>
        
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Gyms