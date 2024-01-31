import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
    gap?: number
}

export default function FlexContainer({ children, className = "", gap }: Props) {
    return (
        <div className={`flex ${gap ? "gap-" + gap : ""} ${className}`}>{children}</div>
    )
}