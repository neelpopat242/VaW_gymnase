import React from 'react'
import { programs } from '../../data'
import { Link } from 'react-router-dom'
import { FaCrown } from 'react-icons/fa';
const Programs = () => {
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='d-flex justify-content-center  align-self-center my-4'>
                    <a class="btn btn-primary mx-3" style={{ color: "yellow", fontSize: "1.5rem" }}><FaCrown /></a>
                    <h1 className='text-center text-white'>Our Programs</h1>
                </div>
                <div className='row my-5'>
                    {
                        programs.map(({ id, icon, title, info, path }

                        ) => {
                            return (
                                <div className='col-md-3 text-center'>
                                    <div class="card-css text-white px-3 py-3"  key={id}>
                                        <div class="card-body">
                                            <a className='btn btn-primary'>{icon}</a>
                                            <h6 class="card-title my-3">{title}</h6>
                                            <small class="card-text my-2">{info}</small>
                                            <br/>
                                            <Link to={path}><a href="#" class="btn btn-primary my-3">Learn more</a></Link>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Programs