import React from 'react'
import Wrapper from '../Shared/Wrapper'
import { TiTickOutline } from "react-icons/ti";
import Image from 'next/image';
import aboutimg from '@/Images/about1.jpg.webp'
import Button from '../Shared/Button';
const About = () => {

    const data = [
        {
            tick: TiTickOutline,
            para: "Be the majority have suffered alteration in some form, by injected humour."
        },
        {
            tick: TiTickOutline,
            para: "Psum available be the majority have suffered alteration in some form, by injected humour."
        },
        {
            tick: TiTickOutline,
            para: "Available be the majority have suffered alteration in some form, by injected humour."
        },
        {
            tick: TiTickOutline,
            para: "Humour available be the majority have suffered alteration in some form, by injected."
        },
    ]
    return (
        <section className='pt-[5%] pb-[10%]'>
            <Wrapper>
                <div class="grid grid-cols-3 gap-x-5">
                    <div className='my-auto'>
                        {
                            data.map((item, id) => {
                                return (
                                    <div key={id} className='flex justify-between  '>
                                        <div className='text-[30px] text-red-500'>
                                            <item.tick className='mt-2 gap-x-3' />
                                        </div>
                                        <p className='text-[20px]  mx-2 mb-4 w-full'>{item.para}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div >
                        <Image src={aboutimg} alt='about Img' className='w-full' />
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-[55px] font-bold mb-4'>
                            ABOUT OUR <span className='text-red-500'>STORY</span>
                        </h1>
                        <p className='text-[18px] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum atque repellat mollitia voluptatem rem. Molestiae cumque accusantium expedita officia?</p>
                        <Button text={"Book Now"}/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default About