import React from 'react'
import Navbarr from '../../Components/Common/Navbar'
import { Outlet } from 'react-router-dom'

const LandingPageLayout = () => {
  return (
    <div>
    <Navbarr/>
    <dib>
        <Outlet/>
    </dib>
</div>
  )
}

export default LandingPageLayout