import React from 'react'
import OnlineBanking from '../../assets/images/icon-online.svg'
import SimpleBudgeting from '../../assets/images/icon-budgeting.svg'
import FastOnboarding from '../../assets/images/icon-onboarding.svg'
import OpenAPI from '../../assets/images/icon-api.svg'

const About = () => {

    const aboutArray = [
        {
            img: OnlineBanking,
            heading: 'Online Banking',
            discription: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },

        {
            img: SimpleBudgeting,
            heading: 'Simple Budgeting',
            discription: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },

        {
            img: FastOnboarding,
            heading: 'Fast Onboarding',
            discription: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },

        {
            img: OpenAPI,
            heading: 'Open API',
            discription: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        }

    ]

  return (
    <div className='py-5 px-10'>
        <div className='w-[42%] mb-16'>
            <h2 className='text-4xl font-medium'>
                Why choose Easybank?
            </h2>

            <p className='text-base my-5 leading-7'>
                We leaverage Open Banking to turn your bank accout into your financial hub. Control your finances like never before.
            </p>
        </div>

        <div className='grid grid-cols-4 gap-8 my-5'>
            {
                aboutArray.map(about => (
                    <div>
                        <img src={about.img} alt="" />
        
                        <h3 className='my-3.5 text-lg font-medium'>
                            {about.heading}
                        </h3>
        
                        <p className='text-base leading-7'>
                           {about.discription}
                        </p>
                    </div> 
                ))
            }
            

            {/* <div>
                <img src={SimpleBudgeting} alt="" />

                <h3 className='my-3.5 text-lg font-medium'>
                    Simple Budgeting
                </h3>

                <p className='text-base leading-7'>
                    Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                </p>
            </div>

            <div>
                <img src={FastOnboarding} alt="" />

                <h3 className='my-3.5 text-lg font-medium'>
                    Fast Onboarding
                </h3>

                <p className='text-base leading-7'>
                    Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                </p>
            </div>

            <div>
                <img src={OpenAPI} alt="" />

                <h3 className='my-3.5 text-lg font-medium'>
                    Open API
                </h3>

                <p className='text-base leading-7'>
                    Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                </p>
            </div> */}
        </div>
    </div>
  )
}

export default About