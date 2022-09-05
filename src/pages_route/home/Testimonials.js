import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoIosPeople } from 'react-icons/io'
import { FaBackward, FaForward } from 'react-icons/fa'

import { testimonials } from '../../data';


const Testimonials = () => {
  const [Testimonialindex, setTestimonialindex] = useState(0);
  const [testdata, settestdata] = useState(testimonials[Testimonialindex]);

  useEffect(() => {
    const lastIndex = testimonials.length - 1;
    if (Testimonialindex < 0) {
      setTestimonialindex(lastIndex);
    }
    if (Testimonialindex > lastIndex) {
      setTestimonialindex(0);
    }
    settestdata(testimonials[Testimonialindex]);
  }, [Testimonialindex]);



  const fwdtestimonial = () => {
    setTestimonialindex(Testimonialindex + 1);
    if (Testimonialindex >= testimonials.length - 1) {
      setTestimonialindex(0);
      console.log(Testimonialindex);

    }
    settestdata(testimonials[Testimonialindex]);
    // console.log(Testimonialindex);
  }

  const bktestimonial = () => {
    console.log(Testimonialindex);
    setTestimonialindex(Testimonialindex - 1);
    if (Testimonialindex <= 0) {
      setTestimonialindex(4);
      console.log(Testimonialindex);
    }
    console.log(Testimonialindex);
    settestdata(testimonials[Testimonialindex]);

  }
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-center  align-self-center '>
        <a className="btn btn-primary mx-3" style={{ color: "gold", fontSize: "1.5rem" }}><IoIosPeople /></a>
        <h1 className='text-center text-white'>Testimonials</h1>
      </div>
      <div className='my-5 py-3 d-flex justify-content-center align-self-center text-center'>




        <>
          <div className='card-css test-white' style={{ width: '22rem' }}  >
            <>
            <div className='row'>
              <div className='col-md-4'>
              </div>
              <div className='col-md-4'>
              <img variant="top" src={testdata.avatar} className="img-style-testimonial"  />
              </div>

            </div>
              
              <h3>{testdata.name}</h3>
              <h6>
                {testdata.job}
              </h6>
              <small className='text-white'>
                {testdata.quote}
              </small>
            </>
            <div className='row py-4'>
              <div className='col-3'></div>
              <div className='col-3'>
                <Button variant="primary" onClick={bktestimonial}><FaBackward /></Button>
              </div>
              <div className='col-3 '>
                <Button variant="primary" onClick={fwdtestimonial}><FaForward /></Button>
              </div>

            </div>

          </div>

        </>








      </div>



    </div>
  )
}

export default Testimonials