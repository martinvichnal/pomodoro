import React from "react"

// Importing components
import Navbar from "./components/Navbar"
import Pomodoro from "./components/Pomodoro"
import Todo from "./components/Todo"
import FooterMain from "./components/FooterMain"
import Quotable from "./components/Quotable"

// Import background image
// import BackgroundImage from './assets/evening-sky.jpg'

// Main APP
export default function App() {
    return (
        <div className="bg-red-400 dark:bg-slate-800">
            <Navbar />
            {/* <div style={{ backgroundImage: `url(${BackgroundImage})` }} className=" bg-opacity-30 w-screen h-screen bg-cover bg-no-repeat bg-center"> */}
            <div className="w-screen h-screen bg-red-400 dark:bg-slate-800">
                {/* <div className='grid grid-cols-2 gap-2 mt-3'> */}
                <div className="grid grid-cols-2 gap-20 m-3">
                    <div className="ml-20 mt-10 basis-2/4 p-4 rounded-2xl shadow-2xl bg-red-300 dark:bg-slate-600">
                        <Pomodoro />
                    </div>
                    <div className="mr-20 mt-10 basis-2/4 p-4 rounded-2xl shadow-2xl bg-red-300 dark:bg-slate-600">
                        <Todo />
                    </div>
                </div>
                <div className="m-8 text-white">
                    <h1 className="text-3xl font-bold mb-4">
                        Quote of the day:
                    </h1>
                    <Quotable />
                </div>
            </div>
            <FooterMain />
        </div>
    )
}
