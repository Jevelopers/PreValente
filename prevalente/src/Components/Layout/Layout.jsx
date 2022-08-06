import React from 'react'
import NavegationBar from '../Navbar/NavegationBar'
import { Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <div>
      <NavegationBar />
      <Outlet />
    </div>
  )
}

export default Layout
