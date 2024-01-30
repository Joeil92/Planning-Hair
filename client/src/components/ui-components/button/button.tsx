import { ReactNode } from "react"

type TagType = 'primary' | 'primary-outline' | 'success' | 'success-outline'

interface Props {
    children: ReactNode
    type: TagType
    className?: string
    onClick: () => void
}

export default function Button({ children, type, className = "", onClick }: Props) {

    const handleClassName = () => {
        if(type === 'primary') {
            return "text-white bg-zinc-800 hover:bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center";
        } else if(type === 'primary-outline') {
            return "bg-transparent border-2 border-zinc-900 hover:text-white hover:bg-zinc-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center";
        } else {
            return "";
        }
    }

    return (
        <button 
            className={`${handleClassName()} ${className}`}
            onClick={onClick}
        >{children}</button>
    )
}