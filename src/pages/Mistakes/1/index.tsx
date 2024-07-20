"use client"

import { useEffect, useState } from "react"

type PostBodyPropos = {
    id: number
}

export default function Post() {
    const [id, setId] = useState(1)

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 100)
        console.log("🚀 ~ handleClick ~ randomNumber:", randomNumber)
        setId(randomNumber)
    }

    return (
        <div>
            <button
                onClick={handleClick}
                className="bg-blue-500 px-4 py-2 text-white rounded mx-auto mb-[50px] block"
            >
                Show me a different post
            </button>

            <PostBody id={id} />
        </div>
    )
}

export function PostBody({ id }: PostBodyPropos) {
    const [text, setText] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        const fetchPost = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/posts/${id}`, {
                    signal: controller.signal
                })
                const data = await res.json()
                setText(data.body)
            } catch (error) {
                console.error("Failed to fetch post:", error)
            }
        }

        fetchPost()

        return () => {
            controller.abort()
        }
    }, [id])

    return (
        <p className="text-center">
            {text}
        </p>
    )
}