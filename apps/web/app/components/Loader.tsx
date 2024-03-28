"use client"
import React from 'react'
import { HashLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
    className='
    h-[80vh]
    flex
    items-center
    justify-center
    '
    >
    <HashLoader size={120} color='rgba(54, 215, 183, 1)'/>
    </div>
  )
}

export default Loader;