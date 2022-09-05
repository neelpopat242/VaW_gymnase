import React from 'react'
import FAQ from './FAQ'
import { faqs } from '../../data'
import {RiDoubleQuotesL} from 'react-icons/ri'
const FAQs = () => {
  return (
    <div className='container  '>
      <div className='d-flex justify-content-center  align-self-center '>
        <a className="btn btn-primary mx-3" style={{ color: "gold", fontSize: "1.5rem" }}><RiDoubleQuotesL /></a>
        <h1 className='text-center text-white'>FAQs</h1>
      </div>
      <div className='row'>
        {
          faqs.map(({ id, question, answer }) => {
            return (<FAQ key={id} question={question} answer={answer} />
            )
          })


        }

      </div>

    </div>
  )
}

export default FAQs