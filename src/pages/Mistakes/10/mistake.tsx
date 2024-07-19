"use client"

import { useState } from "react"

export default function Mistake10() {
    /*****************************
        Updating object state
    ******************************/
    
    const [user, setUser] = useState({
        name: "",
        city: "",
        age: 50
    })

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setUser({name: ev.target.value})
    }

    console.log(user)

    return (
        <form>

            <input
                type="text"
                placeholder="Your name"
                className="py-[10px] px-[16px] text-black"
                onChange={handleChange}
            />
        </form>
    )
}