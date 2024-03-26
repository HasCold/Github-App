import Image from 'next/image';
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';
import { MdEditDocument, MdOutlineExplore } from 'react-icons/md';
import { PiSignInBold } from 'react-icons/pi';
import NextLink from './LinkTag';
import Logout from './auth/Logout';

const Sidebar = () => {
  const authUser = true;

  return (
    <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-glass"
    >
      <nav className="h-full flex flex-col gap-3">
        <NextLink href="/" className='flex justify-center'>
          <Image 
          height={32}
          width={32}
          src="/github.svg"   // When we put /github.svg only it means we are in the public folder
          alt="Github Logo"
          />
        </NextLink>

        <NextLink
					href='/'
					className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800'
				>
					<IoHomeSharp size={20} />
				</NextLink>

        {authUser && (
          <>
          <NextLink
          href='/likes'
          className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
          >
          <FaHeart size={22} />
        </NextLink>

        <NextLink
        href='/explore'
        className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
        >
        <MdOutlineExplore size={25} />
        </NextLink>
          </>
        )}

        {!authUser && (
          <>
          <NextLink
          href="/login"
          className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
          >
            <PiSignInBold size={25} />
          </NextLink>

          <NextLink
						href='/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdEditDocument size={25} />
					</NextLink>
            </>
        )}

        {authUser && (
          <div className='flex flex-col gap-2 mt-auto'>
            <Logout />
          </div>
        )}
      </nav>  
    </aside>
  )
}

export default Sidebar;