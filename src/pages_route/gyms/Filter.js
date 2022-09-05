import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Filter = () => {
  return (
    <div className='text-white mx-5 my-4'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <h2 className='my-3'>
            Filters
          </h2>
          <button className='btn btn-danger my-3'> Reset</button>
        </div>
        <h5 className='my-3' >
          Location
        </h5>







        <form className="d-flex py-1 my-3 bg-dark border rounded " role="search">
          <h4 className='mx-2 text-white'><AiOutlineSearch /></h4><input className="form-control border-0 bg-transparent  " type="search" placeholder="Search" aria-label="Search" />
        </form>

        <h5 className='my-4' >
          Price
        </h5>

        <div className='row'>
          <div className="col-4">
            <form className="d-flex bg-dark border rounded" role="search">
              <input className="form-control border-0 bg-transparent  " type="search" placeholder="Min" aria-label="Search" />
            </form>
          </div>
          <div className='col-1'>
          </div>
          <div className="col-4">
            <form className="d-flex  bg-dark border rounded" role="search">
              <input className="form-control border-0 bg-transparent  " type="search" placeholder="Max" aria-label="Search" />
            </form>
          </div>
        </div>


        <h5 className='my-4' >
          Cities
        </h5>

        <Dropdown>
        <Dropdown.Toggle className='px-3 btn-block w-50 text-center' id="" variant="secondary" style={{}}>

          Select City 
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Noida
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">New Delhi </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Ghaziabad</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Delhi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>

    </div>
  )
}

export default Filter