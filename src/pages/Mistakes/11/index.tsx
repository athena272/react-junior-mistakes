"use client"

import { useState } from "react"

export default function Mistake11({ id }: { id?: Number }) {
    const [cards, setCards] = useState([])

    // if (!id) {
    //     return "No id provided"
    // }

    return (
        <section>
            {
                !id 
                ? "No id provided" 
                : (
                    // Product card
                    <div>
                        {/* Aqui você pode renderizar seu card */}
                        Product card content
                    </div>
                )
            }
        </section>
    )
}