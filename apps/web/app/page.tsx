"use client";

import React from 'react'
import Sidebar from './components/Sidebar'
import { usePathname } from 'next/navigation'
import HomePage from './Layouts/HomePage';

const page = () => {
  const pathname = usePathname();
  
  return (
    <div className='flex text-white'>
      <Sidebar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
      {pathname === "/" ? <HomePage /> : ""}

      </div>
    </div>
  )
}

export default page