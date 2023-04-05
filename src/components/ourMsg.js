import React from 'react'
import Image from "next/image";
import imgUser from './../../public/assets/luffy.jpeg'


export default function OurMsg({msg}) {
  return (
    <div className='w-full flex items-center gap-8'>
      <div>
        <Image placeholder="blur" src={imgUser} className='rounded-md h-[50px] w-[50px]' alt="" />
      </div>
      <div className='text-lg font-light'>
        {msg}
      </div>
    </div>
  )
}
