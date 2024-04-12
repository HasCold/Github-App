import React from 'react'

interface RepoButtonProps {
    active: boolean;
    handleClick: () => void;
    text: string;
}

const RepoButton: React.FC<RepoButtonProps> = ({active, handleClick, text}) => {
  return (
    <div>
        <button
        type='button'
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${active ? 'border-blue-500' : ''} `}
        onClick={handleClick}
        >
            {text}
        </button>
    </div>
  )
}

export default RepoButton;