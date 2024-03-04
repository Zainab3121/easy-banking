import React from 'react'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-between items-center py-5 px-10 bg-[#2D314D]'>
      <div>
       <Link to='/'>
        <img src={Logo} alt="logo" className='mb-5 invert' />
       </Link>

       <ul className='flex justify-between items-center gap-y-24 text-white'>
        <li>
          <Link><i class="ri-facebook-circle-fill"></i></Link>
        </li>
        <li>
          <Link><i class="ri-youtube-line"></i></Link>
        </li>
        <li>
          <Link><i class="ri-twitter-line"></i></Link>
        </li>
        <li>
          <Link><i class="ri-whatsapp-line"></i></Link>
        </li>
        <li>
          <Link><i class="ri-instagram-line"></i></Link>
        </li>
       </ul>
      </div>

      <div className='flex justify-between items-center text-white gap-x-24 '>
        <ul>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>

        <ul>
          <li><Link to='/carrers'>Carrers</Link></li>
          <li><Link to='/support'>Support</Link></li>
          <li><Link to='/privat'>Private Policies</Link></li>
        </ul>
      </div>

      <div>
      <button className='bg-gradient-to-r  from-green-400 to-cyan-500 px-3.5 py-2 text-white rounded-3xl'>
            Request Invite
        </button>

        <p className='text-white mt-5 text-xs'>&copy;Easybank. All right reserved</p>
      </div>

    </div>
    
  )
}

export default Footer