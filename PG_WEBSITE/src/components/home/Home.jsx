import React from 'react'
import Herosection from './Herosection'
import Roomservice from './Roomservice'
import Mess from "./Mess"
import Laundry from './Laundry'
import Testmonials from './Testmonials'
import Contact from './Contact'
// images
const Home = () => {
  return (
    <section className='backgroundgradient'>
      <Herosection />
      <Roomservice />
      <Mess />
      <Laundry />
      <Testmonials />
      <Contact />
    </section>
  )
}

export default Home