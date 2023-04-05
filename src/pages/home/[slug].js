import React from 'react'
import Sidebar from '~/components/sidebar'
import InputMsg from './../../components/inputMsg'
// import Head from 'next/head'
import OurMsg from './../../components/ourMsg'
import TheirMsg from './../../components/theirMsg'
import { useSelector } from "react-redux"


export default function Chat() {
  const boxMsg = useSelector((state) => state.box.value)
  const currentMsg = useSelector((state) => state.currentMsg.value)

  return (
    <>
        {/* <Head>
          <script src="https://kit.fontawesome.com/e52e4007ff.js" crossorigin="anonymous"></script>
          <title>Chat GPT</title>
        </Head> */}

      <div className='h-screen w-screen bg-[#343541] text-white flex'>
        <Sidebar />
        <div className='h-full w-[82%] flex flex-col text-white'>
          <div className='h-full w-full flex justify-center items-center'>
            <div className='h-[95%] w-[65%]'>              
              {                
                boxMsg[currentMsg].messages.map((element,index) => {
                  return (
                    <div key={index}>
                      <OurMsg msg={element} />
                      <TheirMsg />
                    </div>
                  )
                })
              }

            </div>
          </div>
          <InputMsg />
        </div>
      </div>
    </>
  )
}
