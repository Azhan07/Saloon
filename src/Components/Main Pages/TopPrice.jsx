import React from 'react'
import Image from 'next/image'
import barber1 from '@/Images/barber1.jpg.webp'
import barber2 from '@/Images/barber2.jpg.webp'
import barber3 from '@/Images/barber3.jpg.webp'
import barber4 from '@/Images/barber4.jpg.webp'
import barber5 from '@/Images/barber5.jpg.webp'
import barber6 from '@/Images/barber6.jpg.webp'
import Wrapper from '../Shared/Wrapper'

const TopPrice = () => {
    const imgdata =[
        {
            img: barber1,
            alt: "barber1"
        },
        {
            img: barber2,
            alt: "barber2"
        },
        {
            img: barber3,
            alt: "barber3"
        },
        {
            img: barber4,
            alt: "barber4"
        },
        {
            img: barber5,
            alt: "barber5"
        },
        {
            img: barber6,
            alt: "barber6"
        },
    ]
    const toppricedata = [
        {
            title:"Special Beard Treatment",
            from: "From",
            price: "$40"
        },
        {
            title:"Special Beard Treatment",
            from: "From",
            price: "$40"
        },
        {
            title:"Color your Beard",
            from: "From",
            price: "$40"
        },
        {
            title:"Wax your Beard",
            from: "From",
            price: "$40"
        },
        {
            title:"Wax your Beard",
            from: "From",
            price: "$40"
        },
    ]
        
    
  return (
    <section className='pb-[10%]'>
        <Wrapper>
            <div className='grid grid-cols-2 gap-x-6'>
                <div className='grid grid-cols-3'>
                  {
                    imgdata.map((item, id)=>{
                        return(
                            <Image key={id} src={item.img} alt={item.alt} />
                        )
                    })
                  }
                </div>
                <div className='m-auto'>
                    <h1 className='text-[45px] font-bold mb-5 text-center'>OUR TOP PRICES</h1>
                    <div className='h-[2px] bg-black mb-7'></div>
                   
                  {
                    toppricedata.map((item, id)=>{
                        return(
                           <div key={id} className='flex justify-between mb-6 mt-8'>
                             <h2 className='text-[22px] mt-1'>{item.title}</h2>
                          
                            <h4>{item.from} <span className='text-red-500 text-[24px] font-bold'>{item.price}</span></h4>
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

export default TopPrice