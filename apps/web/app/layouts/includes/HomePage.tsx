import React from 'react'
import Search from '../../components/Search';
import ProfileInfo from '../../components/profile/ProfileInfo';
import SortRepos from '../../components/repos/SortRepos';
import Repos from '../../components/repos/Repos';

const HomePage = () => {
  return (
    <div className='m-4'>
      <Search />
      <SortRepos />
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        <ProfileInfo />
        <Repos />
      </div>
     </div>
  )
}

export default HomePage;