import React from 'react'
import Footer from '../../components/Footer'
import Gen_Header from '../../components/Gen_Header'
import '../../CSS/file.css'
import Headerimg from '../../images/header_bg_1.jpg'

const About = () => {
  return (
    <div>
      <div className=''><Gen_Header img={Headerimg}  title="About Us"/></div>
      
      <Footer/>
    </div>
  )
}

export default About