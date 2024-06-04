import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import WhyChoose from './components/WhyChoose'
import About from './components/About'
import Contact from './components/Contact'
import Popup from './components/Popup'
import AOS from "aos";
import "aos/dist/aos.css"


function App() {
  const [showPopup, setShowPopup] = useState(false);

  const HandlePopup = () => {
    setShowPopup(true)
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, [])

  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar HandlePopup={HandlePopup} />
        <Hero />
        <Banner />
        <WhyChoose />
        <About HandlePopup={HandlePopup} />
        <Banner />
        <Contact />
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </>
  )
}

export default App
