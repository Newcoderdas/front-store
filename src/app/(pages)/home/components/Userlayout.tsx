import React from 'react'
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';


const Userlayout = ({children}: any ) => {
  console.log("Userlayout Rendered");
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Userlayout
