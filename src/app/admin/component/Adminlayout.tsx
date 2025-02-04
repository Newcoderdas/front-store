import React from 'react'
import Sidenavbar from './Sidenavbar'

const Adminlayout = ({children}: any ) => {
  return (
    <>
      
        <Sidenavbar/>
        {children}
      
    </>
  )
}

export default Adminlayout
