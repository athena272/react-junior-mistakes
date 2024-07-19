import { useEffect, useState } from "react"

export default function Mistake11({ id }: { id?: Number }) {
    /*****************************
        CONDITIONAL RENDERING
    ******************************/

    if (!id) {
        return "No id provided"
    }

    // const [cards, setCards] = useState([])

    // useEffect(() => {

    // }, [cards])

    return (
        <section>{/* Product card */}</section>
    )
}