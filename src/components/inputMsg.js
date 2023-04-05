import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"
import { addMsg } from "../../store/features/boxSlice"

export default function InputMsg() {
    const dispatch = useDispatch();
    const box = useSelector((state) => state.box.value)
    const currentMsg = useSelector((state) => state.currentMsg.value)


    return (
        <div className='h-[15%] w-full flex flex-col justify-center items-center gap-3'>
            <form   onSubmit={(e)=>{e.preventDefault(); dispatch(addMsg({message : e.target[0].value, index : currentMsg}));}}
                    className='h-[40%] w-full flex justify-center gap-4'>
                <input type="text" placeholder='Send a message...' className='text-lg outline-none bg-[#40414f] shadow-2xl px-5 py-4 w-[70%] rounded-lg' />
                <button type='submit'></button>
            </form>
            <p className='text-sm text-gray-400'>
                <Link href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes">
                    <span className='underline cursor-pointer'>ChatGPT Mar 14 Version.</span> 
                </Link>
                &nbsp;Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
        </div>
  )
}
