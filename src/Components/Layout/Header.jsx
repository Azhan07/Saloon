"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import logoimg from '@/Images/logo.png.webp'
import Link from 'next/link'
import Button from '../Shared/Button'
import {BiMenuAltLeft } from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
const Header = () => {
    const data = [
        
            {id:1, title: "Home", path: "/"},
            {id:2, title: "About", path: "/"},
            {id:3, title: "Serivce", path: "/"},
            {id:4, title: "Gallery", path: "/"},
            {id:5, title: "Blog", path: "/"},
            
            {id:6, title: "Contact", path: "/"},
        
    ]
    const[menuOpen , setMenuOpen] = useState(false);

    const handleNav = () => {
      setMenuOpen(!menuOpen);
    }
    
  return (
    <header className='px-7 bg-black p-5 w-full fixed top-0 left-0 right-0 z-10 shadow-2xl'>
        <div className='flex justify-between items-center '>
            <div>
            <Image src={logoimg} alt='logo-img'/>
            </div>
            <div className='hidden md:flex'>
                {
                    data.map((item,id)=>{
                        return(
                            <ul key={id} className='flex mx-6 text-white my-auto'>
                            <Link href={item.path}>
                              <li className='hover:underline hover:text-red-500 text-lg' key={item.id}>{item.title}</li>
                            </Link>
                          </ul>
                        )
                    })
                }
            <Button text={"Get Quote"}/>
            </div>
            <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <BiMenuAltLeft className='text-white' size={25}/>
            </div>
        </div>
           {/* Mobile Responsive */}
           <div className={
            menuOpen
            ? "fixed top-0 left-0 w-full md:hidden h-screen bg-[#ecf0f3] p-10 ease-linear duration-700 z-10"
            : "fixed left-[-100%] top-0 p-10 ease-linear duration-700"
        } > 
         <div className='flex justify-end items-center w-full'>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <AiOutlineClose size={25}/>
            </div>
        </div>
        <div className='text-center'>
        {
                    data.map((item,id)=>{
                        return(
                            <ul key={id} className='flex text-center mb-6  '>
                            <Link href={item.path}>
                              <li className='hover:underline hover:text-red-500 hover:w-full text-lg' key={item.id}>{item.title}</li>
                            </Link>
                          </ul>
                        )
                    })
                }
            <Button text={"Get Quote"} className='block m-auto'/>
        </div>
        </div>
    </header>
  )
}

export default Header