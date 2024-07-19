"use client"
import { useState, useEffect } from "react"

export default function Mistake6() {
    const [post, setPost] = useState(null)

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
            } catch (error) {
                console.error("Failed to fetch post:", error)
            }
        }

        fetchPost()
    }, [])  // Adding the empty dependency array to run the effect only once

    return (
        <article>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
        </article>
    )
}