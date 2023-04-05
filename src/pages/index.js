import Link from 'next/link'
import { useState } from 'react'

export default function Conexion() {
  const [validMail, setValidMail] = useState(false)

  const validateMail = () => {
    const emailInput = document.getElementById("emailInput");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour vérifier l'adresse email

    if (regex.test(emailInput.value)) {
      setValidMail(true)
    } else {
      setValidMail(false)
    }
  }
  return (
    <h1 className="h-screen w-screen">
      <div className="h-[15%] w-full flex justify-center items-center">
        <svg viewBox="140 140 520 520" className="h-[50px]"><path d="m617.24 354a126.36 126.36 0 0 0 -10.86-103.79 127.8 127.8 0 0 0 -137.65-61.32 126.36 126.36 0 0 0 -95.31-42.49 127.81 127.81 0 0 0 -121.92 88.49 126.4 126.4 0 0 0 -84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0 10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3 127.82 127.82 0 0 0 -15.76-149.81zm-190.66 266.49a94.79 94.79 0 0 1 -60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37v-142.39l42.69 24.65a1.52 1.52 0 0 1 .83 1.17v117.92a95.18 95.18 0 0 1 -94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1 -11.34-63.7c.75.45 2.06 1.25 3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1 -.61 1.31l-102.1 58.95a95.16 95.16 0 0 1 -129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0 0 8.29 14.36l123.31 71.19-42.69 24.65a1.53 1.53 0 0 1 -1.44.13l-102.11-59a95.16 95.16 0 0 1 -34.79-129.81zm350.74 81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1 -14.69 171.55c0-.88 0-2.42 0-3.49v-116.68a16.4 16.4 0 0 0 -8.24-14.36zm42.49-63.95c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0 0 -16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9a95.07 95.07 0 0 1 141.19 98.44zm-267.11 87.87-42.7-24.65a1.52 1.52 0 0 1 -.83-1.17v-117.92a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 58.34a16.41 16.41 0 0 0 -8.3 14.36zm23.19-50 54.92-31.72 54.92 31.7v63.42l-54.92 31.7-54.92-31.7z"></path></svg>
      </div>
      <div className="h-[75%] w-full flex justify-center items-center flex-col gap-7">
        <h1 className="font-semibold text-4xl">Welcome back</h1>
        <form onSubmit={(e)=>{e.preventDefault();}} 
              className="flex flex-col justify-center items-center gap-7">
          <div>
              <label className="block mb-1 text-base font-light text-gray-500 ">Email address</label>
              <input type="text" id='emailInput' className="w-[300px] outline-none border border-gray-300 rounded px-5 py-3" placeholder="E-mail" />
          </div>
          <div>
            {
              validMail  ? <Link href="/home">
                                <button   type="submit"
                                          className="bg-[#0ca37f] w-[300px] h-14 text-white py-2 px-4 rounded font-light">
                                  Go To The Website
                                </button>
                              </Link>
                            : <button onClick={()=>{validateMail();}}
                                      type="submit"
                                      className="bg-[#EF5350] w-[300px] h-14 text-white py-2 px-4 rounded font-light">
                                  Check Mail
                              </button>
            }
          </div>
        </form>
        <div>
          <p className="font-light">Don't have an account ? <span className="text-[#0ca37f] cursor-pointer">Sign up</span></p>
        </div>
      </div>
      <div className="h-[10%] w-full flex justify-center items-center gap-3">
        <Link href="https://openai.com/policies/terms-of-use">
          <div className="text-[#0ca37f] cursor-pointer">Terms of use</div>
        </Link>
        <div>|</div>
        <Link href="https://openai.com/policies/privacy-policy">
          <div className="text-[#0ca37f] cursor-pointer">Privacy policy</div>
        </Link>      
      </div>
    </h1>
  )
}