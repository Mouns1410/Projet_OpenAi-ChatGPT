import React from 'react'
import Image from "next/image";
import imgGPT from './../../public/assets/chatLogo.png'



export default function TheirMsg() {
  return (
    <div className='w-full py-5 flex items-center gap-8'>
      <div>
        <Image placeholder="blur" src={imgGPT} className='rounded-md h-[50px] w-[50px]' alt="" />
      </div>
      <div className='text-lg font-light'>
        LEUUUURS
      </div>
    </div>
  )
}
