"use client";

import React, { useState, useEffect, useCallback } from 'react'
import Search from '../../components/Search';
import ProfileInfo from '../../components/profile/ProfileInfo';
import SortRepos from '../../components/repos/SortRepos';
import Repos from '../../components/repos/Repos';
import useGetUserProfileAndProps from '../../hooks/useGetUserProfileAndProps';
import toast from 'react-hot-toast';
import useGetRepoResponse from '../../hooks/useGetRepoResponse';
import { UserProfileProps } from '../../types';
import Spinner from '../../components/Spinner';

const HomePage = () => {

  const [userProfile, setUserProfile] = useState<UserProfileProps | null>(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("forks");

  const getUserProfileAndProps = useCallback(async () => {
    setLoading(true);
    try{
      const userProfile = await useGetUserProfileAndProps();
      setUserProfile(userProfile);

      const repo = await useGetRepoResponse(userProfile.repos_url);
      setRepos(repo);

      setLoading(false);
    }catch(error: any){
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  },[]);

  useEffect(() => {
    getUserProfileAndProps();
  }, [getUserProfileAndProps]);

  return (
    <div className='m-4'>
      <Search />
      <SortRepos />
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        
        {repos.length > 0 && !loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
     </div>
  )
}

export default HomePage;