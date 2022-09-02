import React from 'react'
import Header from '../../components/Header'
import '../../CSS/file.css'
import FAQs from './FAQs'
import Programs from './Programs'
import Testimonials from './Testimonials'
import Values from'./Values'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div style={{ backgroundColor: "#001a66 !important" }}>
      <Header/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home