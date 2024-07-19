"use client"
import { useState, useEffect } from "react"

type Post = {
    title: string,
    body: string
}

export default function Mistake6() {
    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch("https://dummyjson.com/posts/1")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setPost(data)
    //     })
    // })

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch("https://dummyjson.com/posts/1")
                const data = await res.json()
                setPost(data)
                setLoading(false)
            } catch (error) {
                console.error("Failed to fetch post:", error)
            }
        }

        fetchPost()
    }, [])

    return (
        <article>
            {
                loading ? (
                    "Loading"
                ) :
                    <>
                        <h1>{post?.title}</h1>
                        <p>{post?.body}</p>
                    </>
            }
        </article>
    )
}