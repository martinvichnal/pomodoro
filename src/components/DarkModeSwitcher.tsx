import { useState, useEffect } from "react"

function DarkModeSwitcher() {
    const [theme, setTheme] = useState<string>("")

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            className=" text-blue-900 px-4 py-2 text-sm font-medium bg-blue-100 rounded-md"
            onClick={handleThemeSwitch}
        >
            {theme === "dark" ? `Light Mode` : `Dark Mode`}
        </button>
    )
}

export default DarkModeSwitcher
