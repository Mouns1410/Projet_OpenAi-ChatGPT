import React from 'react'
import Image from "next/image";
import imgGPT from './../../public/assets/chatLogo.png'
import styles from './../styles/All.module.css'

export default function TheirMsg() {
  return (
    <div className={styles.typewriter}>
        <Image placeholder="blur" src={imgGPT} className='rounded-md h-[50px] w-[50px]' alt="" />
        <p className='text-lg font-light'>Que puis-je faire pour vous aidez ?</p> 
    </div>
  )
}
