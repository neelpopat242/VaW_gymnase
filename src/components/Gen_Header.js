import React from 'react'

const Gen_Header = ({ img, title }) => {
  return (
    <div className='gen_header_css'>
      <div className=' gen_header_container' >
        <div className='gen_header_container_bg'>
          <img src={img} className=" opacity-50" />
        </div>
        <div className='row text-white' >
          <div className='col-3'></div>
          <div className='col-5 gen_header_content'>
            <h2 className=' '>
              {title}
            </h2>
            <small className=''>
              Lorem Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
              ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit vLorem ipsum dolor sit
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gen_Header