import { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode
    className?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    style?: CSSProperties
}

export default function Container({ children, className = "", onMouseEnter, onMouseLeave, style = {}}: Props) {
    return (
        <div 
            className={className} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={style} 
            >{children}
        </div>
    )
}