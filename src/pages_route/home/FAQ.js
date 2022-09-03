import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../../CSS/file.css'
const FAQ = ({id,question,answer}) => {
    return (
        <div className='col-md-6 my-3 py-3 '>

        <Accordion  className=' accordion-css' defaultActiveKey="0">
            <Accordion.Item eventKey={id}  key={id}className='accordion-css' >
                <Accordion.Header className='accordion-css-header'>{question}</Accordion.Header>
                <Accordion.Body className='text-white'>
                    {answer} </Accordion.Body>
            </Accordion.Item>

        </Accordion>
        </div>
    )
}

export default FAQ