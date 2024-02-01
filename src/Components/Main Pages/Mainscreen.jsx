import React from 'react'
import Wrapper from '../Shared/Wrapper'
import { GiScissors } from "react-icons/gi";
import Button from '../Shared/Button';
import heroimg from '@/Images/heroimg.jpg.webp'
import Image from 'next/image';
const Mainscreen = () => {
  return (
   <section className='pt-[15%] bg-black pb-[10%]'>
    <Wrapper>
    <div class="grid grid-cols-2 gap-4  ">
    <div className='sm:w-full lg:w-[50%]'>
        <GiScissors className='text-[70px] text-red-500'/>
        <h1 className='text-[60px] text-white mb-4 font-bold '>WE'RE THE LAST OF BREED</h1>
        <p className='text-white mb-5 text-[24px]'>Achieve Your Dream Style</p>
        <Button text={"Book Now"}/>
    </div>
    <div className=' lg:animate-bounce'>
    <Image src={heroimg} alt='hero-img' className=''/>
    </div> 
    </div>
    </Wrapper>
   </section>
  )
}

export default Mainscreen