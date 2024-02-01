
import React from 'react'
import Backimg from '@/Images/section-bg.jpg.webp'
import Image from 'next/image'
import Wrapper from '../Shared/Wrapper'
import img1 from '@/Images/services1.svg'
import img2 from '@/Images/services2.svg'
import img3 from '@/Images/services3.svg'

const Blog = () => {
    const servicedata = [
        {
            img : img1,
            title: "Stylish Hair Cut",
            para: "Available be the majority have suffered alteration in some form, by injected humour",
        },
        {
            img : img2,
            title: "Cut And Hair Style",
            para: "Available be the majority have suffered alteration in some form, by injected humour",
        },
        {
            img : img3,
            title: "Color And Hair Wash",
            para: "Available be the majority have suffered alteration in some form, by injected humour",
        },
    ]

  return (
    <section className='pt-[5%] pb-[5%]' style={{ backgroundImage: `url(${Backimg.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
    <Wrapper>
        <div className='grid grid-cols-3 gap-x-5 pt-[20px]'>
            {
                servicedata.map((item, id) => {
                    return (
                        <div key={id} className='transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 rounded-lg bg-slate-800 p-5 pb-20 text-center text-white'>
                            <Image src={item.img} alt='' className='block m-auto mb-4 pt-10'/>
                            <h1 className='text-[32px] font-bold mb-4'>{item.title}</h1>
                            <p>{item.para}</p>
                        </div>
                    )
                })
            }
        </div>
    </Wrapper>
</section>
  )
}

export default Blog