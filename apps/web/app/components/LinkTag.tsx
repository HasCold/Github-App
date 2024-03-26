import Link from 'next/link';
import React from 'react'

interface NextLinkProps {
    href: string;
    className: string
    children: React.ReactNode
}

const NextLink: React.FC<NextLinkProps> = ({
    href,
    className,
    children
}) => {
     
return (
    <>
    <Link
    href={href}
    className={className}
    >
        {children}
    </Link>
    </>
  )
}

export default NextLink;