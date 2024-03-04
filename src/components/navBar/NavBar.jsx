import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-5 px-10'>
        <Link to='/'>
            <img src={logo} alt="" />
        </Link>

        {/* <div className='sm:hidden block'>
            <i class="ri-menu-line "></i>
        </div> */}

        <ul className='grid fixed sm:sticky text-center top-[10%] left-[50%] bg-white py-[3rem] px-[5rem] sm:px-0 sm:py-0 right-[50%]  md:flex gap-[50px] text-[#908080]'>
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>

            <li>
                <Link to='/about'>
                    About
                </Link>
            </li>

            <li>
                <Link to='/blog'>
                    Blog
                </Link>
            </li>
        </ul>

        <button className='hidden md:block bg-gradient-to-r  from-green-400 to-cyan-500 px-3.5 py-2 text-white rounded-3xl'>
            Request Invite
        </button>
    </div>
  )
}

export default NavBar