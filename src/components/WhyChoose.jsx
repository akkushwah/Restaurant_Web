import React from 'react';
import { FaBus } from 'react-icons/fa6';


function WhyChoose() {
  return (
    <>
      <div className='relative bg-slate-50' >
        <div className='py-16 container'>
          <h1 data-aos="fade"
            className='text-2xl py-8 tracking-wider font-semibold text-dark text-center'>Why Choose Us</h1>

          {/* Card  section */}
          <div data-aos="fade"
            data-aos-delay="300"
          >
            <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>

              {/* first Card */}
              <div className='flex text-center justify-center items-center flex-col gap-2 px-2'>
                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laborum!</p>
                <p className='text-primary text-6xl rotate-90 text-content translate-x-5'>....</p>
                <FaBus className='text-6xl text-primary' />
              </div>

              {/* second Card */}
              <div className='flex text-center justify-center items-center flex-col gap-2 px-2'>
                <FaBus className='text-6xl text-secondary' />
                <p className='text-secondary text-6xl rotate-90 text-content translate-x-5'>....</p>
                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laborum!</p>
              </div>

              {/* third Card */}
              <div className='flex text-center justify-center items-center flex-col gap-2 px-2'>
                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laborum!</p>
                <p className='text-primary text-6xl rotate-90 text-content translate-x-5'>....</p>
                <FaBus className='text-6xl text-primary' />
              </div>

              {/* fourth Card */}
              <div className='flex text-center justify-center items-center flex-col gap-2 px-2'>
                <FaBus className='text-6xl text-secondary' />
                <p className='text-secondary text-6xl rotate-90 text-content translate-x-5'>....</p>
                <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laborum!</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoose