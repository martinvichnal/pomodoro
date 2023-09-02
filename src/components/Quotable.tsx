import { useState, useEffect } from "react"

function Quotable() {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => {
                setQuote(data.content)
                setAuthor(data.author)
            })
            .catch((error) => console.error("Error fetching quote:", error))
    }, []) // Empty dependency array means this effect runs once after the component mounts

    return (
        <div
            className={
                " text-lg m-2 p-2 border-l-8 leading-relaxed border-[#F7DF94] text-left"
            }
        >
            <p>"{quote}"</p>
            <cite>- {author}</cite>
        </div>
    )
}

export default Quotable
