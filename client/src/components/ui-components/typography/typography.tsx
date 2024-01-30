
import { ReactNode } from 'react';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small' | 'parse'

interface Props {
    children: ReactNode
    tag?: TagType
    className?: string
}

export default function Typography({ children, tag = 'p', className = ""}: Props) {
    return (
        <>
            {tag === 'p' && <p className={`text-base ${className}`}>{children}</p>}
            {tag === 'span' && <span className={`${className}`}>{children}</span>}
            {tag === 'h1' && <h1 className={`text-2xl ${className}`}>{children}</h1>}
            {tag === 'h2' && <h2 className={`text-xl ${className}`}>{children}</h2>}
            {tag === 'h3' && <h3 className={`${className}`}>{children}</h3>}
            {tag === 'h4' && <h4 className={`${className}`}>{children}</h4>}
            {tag === 'h5' && <h5 className={`${className}`}>{children}</h5>}
            {tag === 'h6' && <h6 className={`${className}`}>{children}</h6>}
            {tag === 'small' && <small className={`${className}`}>{children}</small>}
        </>
    )
}