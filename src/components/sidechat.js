import React from 'react'

export default function Sidechat({signe, message}) {
  return (
    <div className='flex items-center w-[100%] overflow-x-hidden border border-gray-500 rounded-md gap-3 px-5 py-2 text-lg cursor-pointer hover:filter'>
        <div className='text-2xl font-light'>
            {signe}
        </div>
        <div>
            {message}
        </div>
    </div>
  )
}
