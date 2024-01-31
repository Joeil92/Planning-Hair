interface Props {
    value: string
}

export default function Submit({ value }: Props) {
    return (
        <input 
            type="submit" 
            className="my-3 text-white bg-zinc-800 hover:bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            value={value} 
        />
    )
}