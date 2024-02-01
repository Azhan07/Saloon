"use client"
import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';
import logoimg from '@/Images/logo.png.webp'
import Wrapper from '../Shared/Wrapper';
const Footer = () => {
    const data = [
        {
            icon : IoIosCall,
            title:"CONTACT INFO",
            para:"913-473-7000",
            para1:"contact@cakeshop.com",
        },
       
        {
            icon : FaLocationArrow,
            title:"CONTACT INFO",
            para:"913-473-7000",
            para1:"contact@cakeshop.com",
        },

    ]
  return (
    <footer className='bg-black p-[5%] pb-[5%]'>
       <Wrapper>
      <div className='grid grid-cols-3 gap-x-6'>
        <div>
            <Image src={logoimg} alt='logo-img'/>
            <p className='text-white text-[20px] mt-5'>There are many variations of passages of Lorem Ipsum available be the majority</p>
        </div>
      {
            data.map((item, id) =>{
                return(
                   <div key={id} className='text-white'>
                   <item.icon className='text-red-600 text-[32px]'/>
                   <p className='text-[18px] mb-5 mt-5'>{item.para}</p>
                   <p className='text-[18px]'>{item.para1}</p>
                   </div>

                )
            })
        }
      </div>
      <div className='h-[1px] w-full bg-slate-500 mt-40'></div>
      <div>
        <h3 className='text-center text-white mt-5'>Copyright ©2024 All rights reserved</h3>
      </div>
       </Wrapper>
    </footer>
  )
}

export default Footer