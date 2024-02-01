import React from 'react'
import Wrapper from '../Shared/Wrapper'
import Image from 'next/image'
import customerimg from '@/Images/customer1.png.webp'
import { FaStar } from "react-icons/fa6";
const Customer = () => {
    const data = [
        {
            desc:"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
            img: customerimg,
            name:"Jimmy Changa"
        },
        {
            desc:"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
            img: customerimg,
            name:"Jimmy Changa"
        },
        {
            desc:"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
            img: customerimg,
            name:"Jimmy Changa"
        },
    ]
  return (
   <section className='pt-[10%] pb-[10%]'>
    <Wrapper>
        <div className='text-center'>
        <div className='h-[4px] w-[50px] mb-7 bg-red-600 rounded-lg m-auto'></div>
        <h1 className='text-[42px] font-bold mb-8'>CUSTOMERS SAY ABOUT US</h1>
        <div className='grid grid-cols-3 gap-x-3'>
            {
                data.map((item, id)=>{
                    return(
                        <div key={id} className='border shadow-lg p-7'>
                            <div className='flex justify-center mb-7 mt-4 text-yellow-500'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                            <p className='mb-9 text-[18px]'>{item.desc}</p>
                            <div className='flex gap-x-4'>
                            <Image className='w-[50px] h-[50px] rounded-[50%]' src={item.img} alt='Images'/>
                            <h4 className='mt-2 font-bold'>{item.name}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </Wrapper>
   </section>
  )
}

export default Customer