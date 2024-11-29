import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';
import Banner from './components/Banners/Banner';
import BannerNext from './components/Banners/BannerNext';
import BannerLast from './components/Banners/BannerLast';
import Footer from './components/Footer/Footer';




const App = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Menus/>
      <Banner/>
      <BannerNext/>
      <BannerLast/>
       <Footer/>
    </div>
    </>
  )
}

export default App;