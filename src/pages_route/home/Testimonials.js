import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoIosPeople } from 'react-icons/io'
import { FaBackward, FaForward } from 'react-icons/fa'

import { testimonials } from '../../data';


const Testimonials = () => {
  const [Testimonialindex, setTestimonialindex] = useState(1);

  const fwdtestimonial = () => {
    setTestimonialindex(Testimonialindex+1);
    if(Testimonialindex>=5){
      setTestimonialindex(1);
    }
    console.log(Testimonialindex);
  }

  const bktestimonial = () => {
    setTestimonialindex(Testimonialindex-1);
    if(Testimonialindex<=0){
      setTestimonialindex(5);
    }
    console.log(Testimonialindex);

  }
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-center  align-self-center '>
        <a class="btn btn-primary mx-3" style={{ color: "gold", fontSize: "1.5rem" }}><IoIosPeople /></a>
        <h1 className='text-center text-white'>Testimonials</h1>
      </div>
      <div className='my-5 py-3 d-flex justify-content-center align-self-center text-center'>

        {
          testimonials.map(   ({id, name,job,quote,avatar})  => {
            return(
              Testimonialindex && 
              <>
              <Card className='card-css' style={{ width: '22rem' }} key = {id} >

                
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h6>
              {job}
            </h6>
            <Card.Text>
              {quote}
            </Card.Text>
          </Card.Body>
          <div className='row py-4'>
            <div className='col-3'></div>
            <div className='col-3'>
              <Button variant="primary" onClick={bktestimonial}><FaBackward /></Button>
            </div>
            <div className='col-3 '>
              <Button variant="primary" onClick={fwdtestimonial}><FaForward /></Button>
            </div>

          </div>

        </Card>
                
              </>
            )
          } )

        }
        




      </div>



    </div>
  )
}

export default Testimonials