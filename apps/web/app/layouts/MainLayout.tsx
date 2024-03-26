import React from 'react'
import Sidebar from '../components/Sidebar';

const MainLayout = (
    {children}: {children: React.ReactNode}
) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout;