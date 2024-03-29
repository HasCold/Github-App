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

const HomePage = () => {

  const [userProfile, setUserProfile] = useState<UserProfileProps | null>(null);
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("forks");

  const getUserProfileAndProps = useCallback(async () => {
    setLoading(true);
    try{
      const userProfile = await useGetUserProfileAndProps();
      setUserProfile(userProfile);
      console.log(userProfile);

      const repos = await useGetRepoResponse(userProfile.repos_url);
      setRepo(repos);

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
        <ProfileInfo userProfile={userProfile} />
        <Repos />
      </div>
     </div>
  )
}

export default HomePage;