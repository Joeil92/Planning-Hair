import { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode
    className?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    style?: CSSProperties
    suppressHydrationWarning?: boolean
}

export default function Container({ children, className = "", onMouseEnter, onMouseLeave, style = {}, suppressHydrationWarning = false}: Props) {
    return (
        <div
            suppressHydrationWarning={suppressHydrationWarning}
            className={className} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={style} 
            >{children}
        </div>
    )
}