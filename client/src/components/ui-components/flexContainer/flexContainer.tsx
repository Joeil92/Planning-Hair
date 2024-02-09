import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
    gap?: number
    items: 'center' | 'top' | 'bottom'
    justify: 'center' | 'start' | 'end'
}

export default function FlexContainer({ children, className = "", gap, items, justify }: Props) {
    return (
        <div className={`flex ${gap ? "gap-" + gap : ""} items-${items} justify-${justify} ${className}`}>{children}</div>
    )
}