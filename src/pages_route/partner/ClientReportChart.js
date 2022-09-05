import React from 'react'

const ClientReportChart = () => {
  return (
    <div className='my-5'>
      <h2 className='fw-bold container my-5 fs-1 px-3'>Our client
        <br /> have witnessed</h2>

      <div className='row'>
        <div className="col-2">

        </div>
        <div className="col-2">
          <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart orange">
              <path className="circle-bg"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path className="circle"
                stroke-dasharray="60, 100"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">60%</text>
            </svg>
          </div>
          <h4 className='text-white text-center'>increase in revenue </h4>
        </div>
        <div className="col-1">

        </div>
        <div className="col-2">
        <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart orange">
              <path className="circle-bg"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path className="circle"
                stroke-dasharray="40, 100"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">40%</text>
            </svg>
          </div>
          <h4 className='text-white text-center'>increase in sales</h4>

        </div>
        <div className="col-1">

        </div>
        <div className="col-2">
        <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart orange">
              <path className="circle-bg"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path className="circle"
                stroke-dasharray="30, 100"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">30%</text>
            </svg>
          </div>
          <h4 className='text-white text-center'>increase in Physical</h4>

        </div>

      </div>
    </div>
  )
}

export default ClientReportChart