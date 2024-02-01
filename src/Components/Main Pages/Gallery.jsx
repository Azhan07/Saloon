import React from 'react'
import Image from 'next/image'
import insta1 from '@/Images/instra1.jpg.webp'
import insta2 from '@/Images/instra2.jpg.webp'
import insta3 from '@/Images/instra3.jpg.webp'
import insta4 from '@/Images/instra4.jpg.webp'
import insta5 from '@/Images/instra4.jpg.webp'
const Gallery = () => {
    const imgdata = [
        {
            img : insta1,
        },
        {
            img : insta2,
        },
        {
            img : insta3,
        },
        {
            img : insta4,
        },
        {
            img : insta5,
        },
    ]
  return (

    <section >
        <div className='grid grid-cols-5'>
    {
        imgdata.map((item , id)=>{
           return(
            
            <Image key={id}   src={item.img} alt='Images'/>
      
           )
        })
    }
      </div>
   </section>
  )
}

export default Gallery