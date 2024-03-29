import React from 'react'
import mobile from '../../assets/images/mobile.png'

const Home = () => {
  return (
    <div className='bg-[#F3F4F6] flex items-center justify-between py-5 px-10 flex-col-reverse text-center md:flex-row md:text-left'>

        <div className='w-[62%] md:w-[42%] my-[5rem] md:my-[0]'>
            <h1 className='text-[30px] md:text-[35px] lg:text-[50px] font-normal mb-4 leading-tight'>
                Next generation digital banking
            </h1>

            <p className='text-[15px] md:text-[20px] mb-4 leading-7'>
                Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>

            <button className='bg-gradient-to-r  from-green-400 to-cyan-500 px-3.5 py-2 text-white rounded-3xl text-base'>
                Request Invite
            </button>
        </div>

        <img src={mobile} alt="" className='w-5/12'/>

    </div>
  )
}

export default Home