import React from 'react'
import '../../CSS/file.css'
import { plans } from '../../data'
import { Card } from 'react-bootstrap'
import { useState } from 'react'
import Footer from '../../components/Footer'

const Plans = () => {
  
  return (

<>
    <div className='container'>
      <h2  className='text-center text-white-50'>Plans</h2>
    <div className='row'>
      {
        plans.map(({ id, name, desc, price, features }) => {
          return (
            <div className='col-md-4 text-center text-white' style={{}}>
            <Card  className="card-css"   key={id} >

              <h3>
                {name}
              </h3>
              <small>
                {desc}
              </small>
              <h1>
                {'$' + price} <small>/mo</small>
              </h1>
            <h4>
              Features

            </h4>
            {
              features.map((feature) => {
                return (
                  <div >
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