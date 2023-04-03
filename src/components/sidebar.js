import React from 'react'
import Link from 'next/link'
import Sidechat from './sidechat'
import { useSelector, useDispatch } from "react-redux"
import { clear } from "./../../store/features/chatSlice"


export default function Sidebar() {
    const allChat = useSelector((state) => state.chat.value)
    const dispatch = useDispatch();


  return (
    <div className='h-full w-[18%] bg-[#202123] flex flex-col justify-center items-center'>
                <div className='w-full h-[75%] px-3 py-3 text-white font-light flex flex-col gap-2'>
                    <Link href="/home">
                        <Sidechat signe="+" message="New Chat" />
                    </Link>
                    {
                        allChat.map((element, index) => {
                            return (
                                <Sidechat key={index} message={element.substring(0,18) + "..."} />
                            )
                        })
                    }
                </div>
                <div className='w-full h-[25%] border-t-2 border-[#4d4d4f] flex flex-col justify-around px-5'>
                    <div    onClick={() => {dispatch(clear())}}
                            className='flex text-white items-center gap-3 cursor-pointer'>
                        <div>
                            <i className="fa-regular fa-trash-can text-white"></i>
                        </div>
                        <div className='text-base font-light'>
                            Clear conversations
                        </div>
                    </div>       
                    <div className='flex text-white items-center gap-3 cursor-pointer'>
                        <div>
                            <i className="fa-regular fa-user text-white"></i>
                        </div>
                        <div className='text-base font-light'>
                            Upgrade to plus
                        </div>
                    </div>
                    <div className='flex text-white items-center gap-3 cursor-pointer'>
                        <div>
                            <i className="fa-regular fa-moon text-white"></i>
                        </div>
                        <div className='text-base font-light'>
                            Dark mode
                        </div>
                    </div>   
                    <Link href="https://help.openai.com/en/collections/3742473-chatgpt">
                        <div className='flex text-white items-center gap-3 cursor-pointer'>
                            <div>
                                <i className="fa-brands fa-squarespace text-white"></i>
                            </div>
                            <div className='text-base font-light'>
                                Updates & FAQ
                            </div>
                        </div>  
                    </Link> 
                    <Link href="/">
                        <div className='flex text-white items-center gap-3 cursor-pointer'>
                                <div>
                                    <i className="fa-solid fa-right-from-bracket text-white"></i>
                                </div>
                                <div className='text-base font-light'>
                                    Log out
                                </div>
                        </div>   
                    </Link>
                </div>
            </div>
  )
}
