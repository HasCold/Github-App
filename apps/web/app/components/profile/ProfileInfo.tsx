import React from 'react'
import { FaEye } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { TfiThought } from 'react-icons/tfi';
import {PersonalUserInfo, ProfileUserNumber} from './ProfileComp';
import { RiGitRepositoryCommitsFill, RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from 'react-icons/ri';

const ProfileInfo = () => {
    const userProfile = {
		avatar_url: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
		bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
		email: "johndoe@gmail.com",
		followers: 100,
		following: 200,
		html_url: "https://github.com/burakorkmez",
		location: "Somewhere, Earth",
		name: "John Doe",
		public_gists: 100,
		public_repos: 100,
		twitter_username: "johndoe",
		login: "johndoe",
	};

  return (
    <div className='lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10'>
        <div className='bg-glass rounded-lg p-4'>
            <div className='flex gap-3 items-center'>
                {/* User Avatar */}
                <a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
                    <img
                     src={userProfile?.avatar_url}
                    className='rounded-md w-24 h-24 mb-2'
                     />
                </a>

                {/* View on Github */}
					<div className='flex gap-2 items-center flex-col'>
						<a
							href={userProfile.html_url}
							target='_blank'
							rel='noreferrer'
							className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
						>
							<FaEye size={16} />
							View on Github
						</a>
					</div>
				</div>

        {/* User Bio */}
				{userProfile?.bio ? (
					<div className='flex items-center gap-2'>
						<TfiThought />
						<p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
					</div>
				) : null}

        {/* Location */}
				{userProfile?.location ? (
					<div className='flex items-center gap-2'>
						<IoLocationOutline />
						{userProfile?.location}
					</div>
				) : null}

        {/* Twitter Username */}
				{userProfile?.twitter_username ? (
					<a
						href={`https://twitter.com/${userProfile.twitter_username}`}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 hover:text-sky-500'
					>
						<FaXTwitter />
						{userProfile?.twitter_username}
					</a>
				) : null}

				{/* Member Since Date */}
        <PersonalUserInfo  userInfo="21 Sep, 2023" text='Member since'/>

        {/* Email Address */}
				{userProfile?.email && <PersonalUserInfo  userInfo={userProfile.email} text='Email Address'/>}

				{/* Full Name */}
				{userProfile?.name && <PersonalUserInfo  userInfo={userProfile?.name} text='Full name'/>}

				{/* Username */}
				<PersonalUserInfo  userInfo={userProfile?.login} text='Username'/>
          </div>

          <div className='flex flex-wrap gap-2 mx-4'>
              {/* Followers Count */}
          <ProfileUserNumber text="Followers" count={userProfile?.followers} icon={RiUserFollowFill}/>

				{/* Following count */}
          <ProfileUserNumber text="Following" count={userProfile?.following} icon={RiUserFollowLine}/>

				{/* Number of public repos */}
        <ProfileUserNumber text="Public repos" count={userProfile?.public_repos} icon={RiGitRepositoryCommitsFill}/>

				{/* Number of public gists */}
          <ProfileUserNumber text="Public gists" count={userProfile?.public_gists} icon={RiGitRepositoryFill}/>
        </div>
    </div>
  )
}

export default ProfileInfo;