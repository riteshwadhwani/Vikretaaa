import React from 'react'
import Navbarr from '../../Components/Common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Common/Footer'

const LandingPageLayout = () => {
  return (
    <div>
    <Navbarr/>
    <div>
        <Outlet/>
    </div>
    <Footer/>
</div>
  )
}

export default LandingPageLayout