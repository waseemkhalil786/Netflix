import Image from 'next/image'
import React from 'react'
import Asset from "../Assests/logo01.png"

export default function Navbar() {
  return (
    <div className='flex justify-between p-5' >
       <Image src={Asset} alt=""  width={120} height={20}/>
       <button className='w-20  h-14 bg-red-700 text-white rounded-md'>Signin</button>
    </div>
  )
}
