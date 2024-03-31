import React from 'react'
import Repo from './Repo';
import { RepoType } from '../../types';

interface ReposProps {
  repos: RepoType[]
}

const Repos: React.FC<ReposProps> = ({repos}) => {
  return (
    <div className='lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6'>
      <ol className='relative border-s border-gray-200'>
        {repos.map((repo, i) => (
          <Repo key={i} repo={repo} />
        ))}

        {repos.length === 0 && <div className='flex items-center justify-center h-32'>No Repos Found</div>}
      </ol>
    </div>
  )
}

export default Repos;