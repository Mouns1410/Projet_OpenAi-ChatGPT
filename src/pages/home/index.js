import React from 'react'
// import Head from 'next/head'
import SideBar from '../../components/sidebar'
import Acceuil from '../../components/acceuil'
import InputSearch from '../../components/inputSearch'
import { useState } from 'react'


export default function Home() {
  const [inpValue, setInpValue] = useState("")


  return (
    <>
        {/* <Head>
            <script src="https://kit.fontawesome.com/e52e4007ff.js" crossorigin="anonymous"></script>
            <title>Chat GPT</title>
        </Head> */}
        
        <div className='h-screen w-screen bg-[#343541] flex'>
            <SideBar />
            <div className='h-full w-[80%] flex flex-col text-white'>
                <Acceuil setInpValue={setInpValue} />
                <InputSearch inpValue={inpValue} setInpValue={setInpValue} />
            </div>
        </div>
    </>
  )
}
