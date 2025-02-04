import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const Userlayout = ({children}: any ) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Userlayout
