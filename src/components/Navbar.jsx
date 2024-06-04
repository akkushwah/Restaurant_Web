import React, { NavLinks } from "react";
import { FaCaretDown, FaUser } from 'react-icons/fa';


const NavItems = [
  {
    id: 1,
    name: "Home",
    links: "/#"
  },
  {
    id: 2,
    name: "About",
    links: "/#"
  },
  {
    id: 3,
    name: "Contact",
    links: "/#"
  },

]

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    links: "/#"
  },
  {
    id: 2,
    name: "Fruits",
    links: "/#"
  },
  {
    id: 3,
    name: "Grains",
    links: "/#"
  },

]

const Navbar = ({ HandlePopup }) => {
  return <>
    <div data-aos="fade" className='bg-white shadow-md'>
      <div className="container flex justify-between py-5 sm:py-3">
        {/*  logo section */}
        <div className="font-bold text-3xl cursor-pointer">Logo</div>
        {
          <div>
            <ul className="flex items-center gap-6">
              {
                NavItems.map(({ id, name, link }) => (
                  <li key={id}>
                    <a href={link} className="hidden sm:inline-block hover:text-primary text-xl font-semibold cursor-pointer">{name}</a>
                  </li>
                ))}

              {/* simple dropdown and links */}

              <li className="hidden md:block cursor-pointer group">
                <a href="/#" className="inline-block hover:text-primary text-xl font-semibold">
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdown
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300 inline-block" />
                    </span>
                  </div>
                </a>
                {/* dropdon section */}

                <div className="absolute z-[9999] hidden group-hover:block w-[180px] bg-white text-black shadow-md p-2">
                  <ul>
                    {
                      DropdownLinks.map(({ name, id, links }) => (
                        <li key={id}>
                          <a href={links} className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20">
                            {name}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </li>

              {/* Log in button */}

              <li>
                <button className="flex justify-center items-center gap-2 bg-secondary text-white text-xl h-[40px] 
                px-2 md:px-5 py-2 hover:scale-105 duration-300 rounded-md" onClick={HandlePopup}>
                  <FaUser />
                  My Account
                </button>
              </li>


            </ul>
          </div>
        }
      </div>

    </div>
  </>
}



export default Navbar