import React from 'react'
import Heading from "../shared/Heading"
import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogData = [
  {
    img: Img1,
    published: "Jan 20, 2024 by Dilshad",
    title: "How to choose perfect smartwatch",
    subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi...",
    aosDelay: "0"
  },
  {
    img: Img2,
    published: "Jan 20, 2024 by Satya",
    title: "How to choose perfect gadget",
    subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi...",
    aosDelay: "200"
  },
  {
    img: Img3,
    published: "Jan 20, 2024 by Sabir",
    title: "How to choose perfect VR headset",
    subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi...",
    aosDelay: "400"
  },
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/* Header Section */}
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"}/>
        {/* Blog Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-y-7'>
          {BlogData.map((data) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} 
            key={data.title} className='bg-white dark:bg-gray-900'>
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img src={data.img} alt="image" 
                className='w-full h-[220px] rounded-2xl object-cover hover:scale-105 duration-500'/>
              </div>
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.published}</p>
                <p className='font-bold line-clamp-1'>{data.title}</p>
                <p className='text-sm line-clamp-2 text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs