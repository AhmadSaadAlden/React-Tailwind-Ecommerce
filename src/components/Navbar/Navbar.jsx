import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Shop",
        link: "/shop"
    },
    {
        id: 3,
        name: "About",
        link: "/about"
    },
    {
        id: 4,
        name: "Blogs",
        link: "/blog"
    },
]

const DropdownLinks = [
    {
        id: 1,
        name: "Treading product",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    },
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 z-40'>
        <div className='py-4'>
            <div className="container flex justify-between items-center">
                {/* logo & link section */}
                <div className='flex items-center gap-4'>
                    <a href="#" 
                        className='text-primary font-semibold tracking-widest text-2xl sm:text-3xl'>
                        Eshop
                    </a>
                    {/* Menu Items */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-4'>
                            {MenuLinks.map((data,index) => (
                                <li key={index}>
                                    <a href={data.link}
                                        className='inline-block px-4 font-semibold text-gray-500
                                                    hover:text-black dark:hover:text-white duration-200'>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                            {/* DropDown */}
                            <li className='relative cursor-pointer group'>
                                <a href="#" 
                                    className='flex items-center gap-[2px] font-semibold
                                                text-gray-500 dark:hover:text-white py-2'>
                                    Quick Links
                                    <span>
                                        <FaCaretDown  className='group-hover:rotate-180 duration-300'/>
                                    </span>
                                </a>
                                {/* DropDown Links */}
                                <div className='absolute z-[9999] hidden group-hover:block
                                                w-[200px] bg-white rounded-md shadow-md
                                                dark:bg-gray-900 dark:text-white p-2'>
                                    <ul className='space-y-2'>
                                        {DropdownLinks.map((data,index) => (
                                            <li key={index}>
                                                <a className='text-gray-500 hover:text-black
                                                            dark:hover:text-white duration-200 p-2
                                                            hover:bg-primary/20 w-full inline-block
                                                            rounded-md font-semibold'
                                                href={data.link}>
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Navbar Right Section */}
                <div className='flex justify-between items-center gap-4'>
                    {/* Search bar Section */}
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='Search'
                        className='search-bar' />
                        <IoSearch className="text-xl text-gray-600 dark:text-gray-400
                                    group-hover:text-primary
                                    absolute top-1/2 right-3 -translate-y-1/2" />
                    </div>
                    {/* order button section */}
                    <button className='relative p-3' onClick={handleOrderPopup}>
                        <FaCartShopping  className='text-xl text-gray-600 dark:text-gray-400' />
                        <div
                            className='w-4 h-4 bg-red-500 text-white rounded-full
                                        absolute top-0 right-0 flex items-center 
                                        justify-center text-xs'
                        > 4
                        </div>
                    </button>
                    {/* darkMode Section */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar