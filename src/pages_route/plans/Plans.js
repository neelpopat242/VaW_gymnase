import React from 'react'
import '../../CSS/file.css'
import { plans } from '../../data'
import { Card } from 'react-bootstrap'
import { useState } from 'react'
import Footer from '../../components/Footer'
import Gen_Header from '../../components/Gen_Header'
import Header_img from '../../images/header_bg_4.jpg'

const Plans = () => {
  
  return (

<>
<Gen_Header img={Header_img } title="Membership Plans"/>
    <div className='container my-4'>
      <h2  className='text-center text-white'>Plans</h2>
    <div className='row my-5 py-5'>
      {
        plans.map(({ id, name, desc, price, features }) => {
          return (
            <div className='col-md-4 text-center text-white' style={{}} key={id}>
            <Card  className="card-css text-center mx-3 px-3"   key={id} >
              <h3 className='py-3'>
                {name}
              </h3>
              <small>
                {desc}
              </small>
              <h1 className='my-2 py-3 '>
                {'$' + price} <small>/mo</small>
              </h1>
            <h4 >
              Features

            </h4>
            {
              features.map((feature, idx) => {
                return (
                  <div className='my-2' key={idx}>
                    <small className={feature.available ? 'text-white': 'text-white-50'}>
                      {feature.feature}
                    </small>
                  </div>
                )
              })
            }

            </Card>
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

export default Plans