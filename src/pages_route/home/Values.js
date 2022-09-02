import React from 'react'

import Img_jpg from '../../images/values.jpg'
import { values } from '../../data'
import { FaCrown } from 'react-icons/fa'

const Values = () => {
    return (
        <div>
            <div className="container my-5 py-5">
                <div className='row'>
                    <div className='col-4'>
                        <img src={Img_jpg} alt="values" className="px-3 py-4 my-3"style={{ width: "100%", height: "90%" }} />
                    </div>
                    <div className='col-1'></div>
                    <div className='col-7'>
                        <div className='row  '>
                            <div className='d-flex justify-content-center  align-self-center '>
                                <a class="btn btn-primary mx-3" style={{ color: "yellow", fontSize: "1.5rem" }}><FaCrown /></a>
                                <h1 className='text-center text-white'>Our Programs</h1>
                                
                            </div>
                            <small className='text-white my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                     aliquip ex ea commodo. 
                                     </small>


                            {
                                values.map(({ id, icon, title, desc }) => {
                                    return (
                                        <>
                                            <div className='col-6 my-3 py-4 px-4 text-center'>
                                                <div class="card-css text-white  py-3" key={id}>
                                                    <div class="card-body">
                                                        <a className='btn btn-primary'>{icon}</a>
                                                        <h6 class="card-title my-3">{title}</h6>
                                                        <small class="card-text my-2">{desc}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values