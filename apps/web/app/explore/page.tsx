import React from 'react'
import MainLayout from '../layouts/MainLayout';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useExploreRepos from '../hooks/useExploreRepos';
import Spinner from '../components/Spinner';
import Repos from '../components/repos/Repos';

const Explore = () => {
  // https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10

  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const IMAGES = [
    {src: "/javascript.svg", alt: "JavaScript Logo", select: "javascript"},
    {src: "/typescript.svg", alt: "TypeScript Logo", select: "typescript"},
    {src: "/c++.svg", alt: "C++ Logo", select: "c++"},
    {src: "/python.svg", alt: "Python Logo", select: "python"},
    {src: "/java.svg", alt: "Java Logo", select: "java"},
  ]

  const exploreRepos = async (language: string) => {
    try {
      setLoading(true);
      setRepos([]);
      const data = await useExploreRepos(language);
      setRepos(data.items);
      setSelectedLanguage(language);

    } catch (error: any) {
        toast.error(error.message);
    }finally{
      setLoading(false);
    }
  }


  return (
    <>
    <MainLayout>
      <div className='px-4'>
        <div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
          <h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
          <div className='flex flex-wrap gap-2 my-2 justify-center'>
            {IMAGES.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                className='cursor-pointer h-11 w-11 sm:h-20 sm:w-20'
                height={80}
                width={80}
                onClick={() => exploreRepos(img.select)}
              />
            ))}
				</div>
        {repos.length > 0 && (
          <h2 className='text-lg font-semibold text-center my-4'>
            <span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full'>
              {selectedLanguage.toUpperCase()}{" "}
            </span>
            Repositories
          </h2>
        )}
        {!loading && repos.length > 0 && <Repos repos={repos} />}
        {loading && <Spinner />}
        </div>
      </div>
    </MainLayout>
  </>
  )
}

export default Explore;