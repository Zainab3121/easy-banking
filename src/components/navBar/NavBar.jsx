import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-5 px-10'>
        <Link to='/'>
            <img src={logo} alt="" />
        </Link>

        <ul className='flex gap-[50px] text-[#908080]'>
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

        <button className='bg-gradient-to-r  from-green-400 to-cyan-500 px-3.5 py-2 text-white rounded-3xl'>
            Request Invite
        </button>
    </div>
  )
}

export default NavBar