"use client";

import React, { useState, useEffect, useCallback} from 'react'
import Search from '../../components/Search';
import ProfileInfo from '../../components/profile/ProfileInfo';
import SortRepos from '../../components/repos/SortRepos';
import Repos from '../../components/repos/Repos';
import toast from 'react-hot-toast';
import useGetRepoResponse from '../../hooks/useGetRepoResponse';
import { RepoType, UserProfileProps } from '../../types';
import Spinner from '../../components/Spinner';
import useGetUserProfileAndRepos from '../../hooks/useGetUserProfileAndRepos';

type GetUserProfileAndReposReturnType = {
  userProfile: UserProfileProps;
  repo: RepoType[];
}

const HomePage = () => {

  const [userProfile, setUserProfile] = useState<UserProfileProps | null>(null);
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");


  const getUserProfileAndRepos = useCallback(async (username="HasCold"): Promise<GetUserProfileAndReposReturnType> => {
    setLoading(true);
    try{
      const userProfile: UserProfileProps = await useGetUserProfileAndRepos(username);
      setUserProfile(userProfile);

      const repo: RepoType[] = await useGetRepoResponse(userProfile.repos_url);
      setRepos(repo);
      repos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setLoading(false);

      return {userProfile, repo}
    }catch(error: any){
      toast.error(error.message);
      throw error;
    }finally{
      setLoading(false);
    }
  },[]);

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e: React.FormEvent, username: string) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const {userProfile, repo} = await getUserProfileAndRepos(username);
    setRepos(repo);
    setUserProfile(userProfile);
    setSortType("recent");
    setLoading(false);
    
  }

  const onSort = (sortType: string) => {
    if(sortType === "recent"){
      // To memorize this, remember that (a: first element, b: second element) => a - b sorts numbers in ascending order.
      repos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())  // descending , recent first
    }else if(sortType === "stars"){
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);  // descending, most stars first
    }else if(sortType === "forks"){
      repos.sort((a,b) => b.forks_count - a.forks_count);
    }

    setSortType(sortType);
    setRepos(repos);
  }

  return (
    <div className='m-4'>
      <Search onSearch={onSearch} />
      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}

      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        
        {!loading && <Repos repos={repos} alwaysFullWidth/>}
        {loading && <Spinner />}
      </div>
     </div>
  )
}

export default HomePage;