"use client"
import { useState } from "react"

export default function Mistake7() {
    /***********************************
        Primitive vs non-primitive
    ************************************/
    console.log("Component rendering...")
    const [product, setProduct] = useState(0)

    const handleClick = () => {
        setProduct(0)
    }

    return (
        <>
            <button
                onClick={handleClick}
                className="group rounded-lg border px-5 py-4 transition-colorsborder-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-[2rem]"
            >
                Click me
            </button>
        </>
    )
}