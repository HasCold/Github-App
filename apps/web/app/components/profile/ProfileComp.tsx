import React from 'react'
import { IconType } from 'react-icons';

interface ProfileCompProps {
    count: number | undefined;
    text: string;
    icon: IconType;
}

type UserInfoFunction = () => string;

interface PersonalUserInfoProps {
    userInfo: string | UserInfoFunction | undefined;
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
    
   // Handle the case when userInfo is a function
   const renderUserInfo = () => {
    if (typeof userInfo === 'function') {
        const infoString = userInfo(); // Call the function to get the string
        return <p>{infoString}</p>; // Return the string wrapped in React fragment
    } else {
        return <p>{userInfo}</p>; // Return the userInfo as it is
    }
};

  return(
        <>
        <div className='my-2'>
			<p className='text-gray-600 font-bold text-sm'>{text}</p>
			  {renderUserInfo()}
		    </div>
        </>
    )
}

export {ProfileUserNumber, PersonalUserInfo};