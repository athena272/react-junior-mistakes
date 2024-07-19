"use client"
import { useState } from "react"
const PRICE_PER_ITEM = 5 

export default function Mistake12() {
    const [quantity, setQuantity] = useState(0)
    const totalQuantity = quantity * PRICE_PER_ITEM

    const handleClick = () => {
        setQuantity(quantity + 1)
    }

    return (
        <>
            <button
                onClick={handleClick}
                className="group rounded-lg border px-5 py-4 transition-colorsborder-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-[2rem]"
            >
                Add 1 item
            </button>
            <h1 className="mt-[70px] text-[2.5rem]">Item is: {quantity}</h1>
            <h1 className="mt-[70px] text-[2.5rem]">Total is: {totalQuantity}</h1>
        </>
    )
}