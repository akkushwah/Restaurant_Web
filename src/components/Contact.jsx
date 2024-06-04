import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md"
import { IoCall } from "react-icons/io5";


function Contact() {
  return (
    <>
      <div className='text-white mt-20 border-red-900'>
        <div data-aos="fade-down"

          className='container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl'>
          <div>
            {/* Heading section */}
            <h1 className='text-3xl font-bold text-yellow text-center py-10'>
              Contact Us
            </h1>
            {/* grid section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>

              {/* Address section */}
              <div className='text-center space-y-4'>
                <div className='flex justify-center'>
                  <IoLocationSharp className="text-5xl" />
                </div>
                <p>
                  92, 3rd Main, Virgo Nagar, Post,<br />
                  Seegehalli, Bengaluru, Karnataka 560049
                </p>
              </div>
              {/* Email section */}
              <div className='text-center space-y-4'>
                <div className='flex justify-center'>
                  <MdEmail className="text-5xl" />
                </div>
                <p>info@goodfood.com
                  <br />hr@goodfood.com</p>
              </div>

              <div className='text-center space-y-4'>
                <div className='flex justify-center'>
                  <IoCall className="text-5xl" />
                </div>
                <div>
                  <p>+91 9643224232 - Sales and Services</p>
                  <p>+91 9623423436 - Hiring Queries</p>
                  <p> +91 2345232445 - Whatsapp</p>
                </div>
                <br />

                <br />

              </div>

            </div>
            {/* footer section */}
            <div className='flex justify-between items-center  p-4 '>
              <p>© 2022 TCJ. All rights reserved</p>
              <div className='flex items-center gap-6'>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>

          </div>
        </div>
      </div >

    </>
  )
}

export default Contact