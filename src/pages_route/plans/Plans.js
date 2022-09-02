import React from 'react'
import '../../CSS/file.css'
import { plans } from '../../data'

const Plans = () => {
  return (
    <div className='container'>
      <h2>Plans</h2>

      {
        plans.map(({ id, name, desc, price, features }) => {
          return (
            <>
              <table className='table text-white' key={id}>
                <thead>

                  <th scope="col" >{name}</th>

                </thead>
                <tbody>
                  <tr>
                    
                  </tr>
                </tbody>
              </table>

            </>
          )
        })

      }

    </div>
  )
}

export default Plans