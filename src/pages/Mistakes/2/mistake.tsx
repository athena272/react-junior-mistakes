"use client"

import { useEffect, useState } from "react"

export default function Mistake2() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            console.log("Interval function running...")
            setCount(count + 1)
        }, 1 * 1000)
    }, [count])

    return (
        <h1 className="mt-[70px] text-[2.5rem]">Count is: {count}</h1>
    )
}