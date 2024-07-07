"use client"

import { useState } from "react"

export default function Mistake12() {
    const [count, setCount] = useState(0)

    // const handleClick = () => {
    //     setCount(count + 1) // setCount(0 + 1)
    //     setCount(count + 1) // setCount(0 + 1)
    //     setCount(count + 1) // setCount(0 + 1)
    //     setCount(count + 1) // setCount(0 + 1)
    // }

    const handleClick = () => {
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
    }

    return (
        <>
            <button
                onClick={handleClick}
                className="group rounded-lg border px-5 py-4 transition-colorsborder-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-[2rem]"
            >
                Click on me
            </button>
            <h1 className="mt-[70px] text-[2.5rem]">Count is: {count}</h1>
        </>
    )
}