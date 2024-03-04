import React from 'react'
import Food from '../../assets/images/food.jpg'
import Currency from '../../assets/images/currency.jpg'
import Plane from '../../assets/images/plane.jpg'
import Cloud from '../../assets/images/cloud.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {

  const blogArray = [
    {
      img: Food,
      heading: 'By Wilson Hutton',
      link: 'Treat yourself without worrying about money',
      discription: 'Our Simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...'
    },

    {
      img: Currency,
      heading: 'By Claire Robinson',
      link: 'Recieve money in any currency with no fees',
      discription: "The world is getting smaller and were becoming more mobile. So why should you be forced to only receive money in a single..."
    },

    {
      img:  Plane,
      heading: 'By Wilson Hutton',
      link: 'Take your Easybank card wherever you go',
      discription: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …"
    }, 

    {
      img: Cloud,
      heading: 'By Claire Robinson',
      link: 'Our invite-only Beta accounts are now live!',
      discription: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site .."
    }
  ]
  return (
    <div className='bg-[#F3F4F6] py-16 px-10'>
      <h2 className='text-3xl font-semibold text-gray-400'>Latest Article</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-5'>
        {
          blogArray.map(blog => (
            <div className='' style={{boxShadow: '0  0 10px grey'}}>
            <img src={blog.img} alt="" className='w-full' />            
            <div className='p-5'>
                <h3 className='text-sm my-2.5 font-medium'>{blog.heading}</h3>
                <Link className='text-sm'>{blog.link}</Link>
                <p className='text-sm mt-2.5'>
                    {blog.discription}
                </p>
            </div>
        </div>
          ))
        }
      
      </div>
         
    </div>
  )
}

export default Blog