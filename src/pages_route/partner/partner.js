import React from 'react'
import '../../CSS/file.css'
import Footer from '../../components/Footer'
import GrowBusiness from './GrowBusiness'
import ClientReportChart from './ClientReportChart'
import WhyUs from './WhyUs'

const Partner = () => {
  return (
    <div className='text-white' style={{backgroundColor : "#0d0d0d"}}>
      <GrowBusiness/>
      <WhyUs/>
      <ClientReportChart/>
      <Footer/>
    </div>
  )
}

export default Partner