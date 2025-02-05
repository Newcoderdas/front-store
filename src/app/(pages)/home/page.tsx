import React from 'react'
import Carousel from './components/Carousel'
import Flashsales from './components/Flashsales'
import Categories from './components/Categories'
import Bestselling from './components/Bestselling'
import Banner from './components/banner'

const page = () => {
  return (
    <>
    
    <Carousel/>
    <Flashsales/>
    <Categories/>
    <Bestselling/>
    <Banner/>
    
    </>
  )
}

export default page