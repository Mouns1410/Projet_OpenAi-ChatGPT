import React from 'react'

export default function Acceuil({setMsgClicked}) {
  return (
    <div className='h-full w-full'>
        <div className='h-[20%]'></div>
                <div className='h-[65%] flex flex-col justify-start items-center gap-20'>
                    <span className='text-5xl font-semibold'>ChatGPT</span>
                    <div className='h-[60%] w-[70%] flex justify-between'>
                        <div className='h-full w-[32%] text-center'>
                            <div className='flex flex-col h-[20%] gap-2'>
                                <i className="fa-solid fa-sun fa-2x"></i>
                                <span className='font-normal text-xl'>Examples</span>
                            </div>
                            <div className='h-[80%] w-full flex flex-col gap-3 mt-5'>
                                <div    onClick={()=>{setMsgClicked("Explain quantum computing in simple terms")}}
                                        className='w-full bg-[#3e3f4b] rounded-md py-3 px-3 hover:bg-black cursor-pointer'>
                                    Explain quantum computing in simple terms
                                </div>
                                <div    onClick={()=>{setMsgClicked("Got any creative ideas for a 10 year old’s birthday ?")}}
                                        className='w-full bg-[#3e3f4b] rounded-md py-3 px-3 hover:bg-black cursor-pointer'>
                                    Got any creative ideas for a 10 year old’s birthday ?
                                </div>
                                <div    onClick={()=>{setMsgClicked("How do I make an HTTP request in Javascript ?")}}
                                        className='w-full bg-[#3e3f4b] rounded-md py-3 px-3 hover:bg-black cursor-pointer'>
                                    How do I make an HTTP request in Javascript ?
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-[32%] text-center'>
                            <div className='flex flex-col h-[20%] gap-2'>
                                <i className="fa-solid fa-bolt fa-2x"></i>
                                <span className='font-normal text-xl'>Capabilities</span>
                            </div>
                            <div className='h-[80%] w-full flex flex-col gap-3 mt-5'>
                                <div className='w-full bg-[#3e3f4b] rounded-md py-3 px-3'>
                                    Remembers what user said earlier in the conversation
                                </div>
                                <div className='w-full bg-[#3e3f4b] rounded-md py-3 px-3'>
                                    Allows user to provide follow-up corrections
                                </div>
                                <div className='w-full bg-[#3e3f4b] rounded-md py-3 px-3'>
                                    Trained to decline inappropriate requests
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-[32%] text-center'>
                            <div className='flex flex-col h-[20%] gap-2'>
                                <i className="fa-solid fa-triangle-exclamation fa-2x"></i>
                                <span className='font-normal text-xl'>Limitations</span>
                            </div>
                            <div className='h-[80%] w-full flex flex-col gap-3 mt-5'>
                                <div className='w-full bg-[#3e3f4b] rounded-md py-3 px-3'>
                                    May occasionally generate incorrect information
                                </div>
                                <div className='w-full bg-[#3e3f4b] rounded-md py-3 px-3'>
                                    May occasionally produce harmful instructions or biased content
                                </div>
                                <div className='w-full bg-[#3e3f4b] rounded-md py-3 px-3'>
                                    Limited knowledge of world and events after 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
