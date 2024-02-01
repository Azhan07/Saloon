"use client"
import React, {useState} from 'react'
import Wrapper from '../Shared/Wrapper'
import Image from 'next/image'
import servicepic from '@/Images/about2.jpg.webp'
const Service = () => {
    const [accordionopen, setaccordionopen]= useState(false)
    const handleAccordionClick = (index) => {
        setaccordionopen(accordionopen === index ? null : index);
    };
    const headingdata = [
        {
            title:"For Hair",
        },
        {
            title:"For Bread",
        }
    ]                                                       
    const pricesdata = [
        {
            id:"1",
            deal:"Trim your Hair",
            from:"From",
            price:"40$"
        },
        {
            id:"2",
            deal:"Special Beard Treatment",
            from:"From",
            price:"40$"
        },
        {
            id:"3",
            deal:"Color your Beard",
            from:"From",
            price:"40$"
        },
        {
            id:"4",
            deal:"Wax your Beard",
            from:"From",
            price:"40$"
        },
    ]
  return (
  <section className='pb-[10%]'>
    <Wrapper>
        <div className='grid grid-cols-2 gap-7'>
        <div>
            <div className='h-[4px] w-[30px] bg-red-600 rounded-lg'></div>
            <h1 className='text-[37px] mb-6 font-bold'>ALL WE DO FOR YOU</h1>
            {headingdata.map((item, index) => (
                <div key={index} onClick={() => handleAccordionClick(index)} className=' relative bg-black hover:bg-red-500 mb-5 p-5 text-white cursor-pointer rounded-lg'>
                    <button  className='flex '>
                        <h3 className='text-[35px] font-bold '>{item.title}</h3>
                        <span className='text-[32px] m-auto absolute right-12 '>{accordionopen === index ? '-' : '+'}</span>
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                        accordionopen === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0] opacity-0'
                    }`}>
                        <div className='overflow-hidden'>
                            {accordionopen === index &&
                                pricesdata.map((priceItem, id) => (
                                    <div key={id} className='flex mt-5 justify-between'>
                                        <h3 className='text-[20px] mb-3'>{priceItem.deal}</h3>
                                        <h4 >{priceItem.from} <span className='text-[22px]'>{priceItem.price}</span></h4>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <Image src={servicepic} alt='serivce-pic'/>
        </div>
           
        </div>
    </Wrapper>
  </section>
  )
}

export default Service