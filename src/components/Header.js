import React from 'react'
import bg1 from '../images/main_header.png'
import {Link } from 'react-router-dom'
import '../CSS/file.css'

const Header = () => {
    return (
        <div >
            <div className='container ' >
                <div className='row align-items-center justify-content-between'>
                    <div className='col-md-1   '>

                    </div>
                    <div className='col-md-5  text-start text-white '>
                        <h5 className='my-3 ' style={{color : "gold"}}>
                            #100 Days of workout
                        </h5>
                        <h1>
                            Join the legends of the Fitness world.
                        </h1>
                        <p className='my-4'>
                            Lorem Lorem ipsum dolor sit  Lorem ipsum dolor sit
                            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit vLorem ipsum dolor sit 
                        </p>
                        <Link to ="/plans">
                        <button type="button" class="btn btn-primary my-5">Get Started</button>
                        </Link>
                    </div>
                    <div className='col-md-1   '>

                    </div>
                    <div className='col-md-5' >
                        <img src={bg1}  className ="img-header" alt='100 days of workout'/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header