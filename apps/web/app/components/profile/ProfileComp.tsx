import React from 'react'
import { IconType } from 'react-icons';

interface ProfileCompProps {
    count: number;
    text: string;
    icon: IconType;
}

interface PersonalUserInfoProps {
    userInfo: string;
    text: string;
}

const ProfileUserNumber:React.FC<ProfileCompProps> = ({count, text, icon: Icon}) => {
  return (
    <>
    <div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
		<Icon className='w-5 h-5 text-blue-800' />
		<p className='text-xs'>{text}: {Number(count)}</p>
	</div>
    </>
  )
}

const PersonalUserInfo: React.FC<PersonalUserInfoProps> = ({userInfo, text}) => {
    return(
        <>
        <div className='my-2'>
			<p className='text-gray-600 font-bold text-sm'>{text}</p>
			<p className=''>{userInfo}</p>
		</div>
        </>
    )
}

export {ProfileUserNumber, PersonalUserInfo};