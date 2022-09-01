import React from 'react'
import Header from '../../components/Header'
import '../../CSS/file.css'
import Programs from './Programs'

const Home = () => {
  return (
    <div style={{ backgroundColor: "#001a66 !important" }}>
      <Header/>
      <Programs/>
    </div>
  )
}

export default Home