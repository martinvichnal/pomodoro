import { useState, useEffect } from "react"

// Importing Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"
// import Button from 'react-bootstrap/Button';
let minVariable = 1
let secVariable = 0

function Pomodoro(): JSX.Element {
    // Initial values for the countdown
    // let initialMinutes = 1;
    // let initialSeconds = 0;

    // States:
    const [minutes, setMinutes] = useState<number>(minVariable) // Minute state
    const [seconds, setSeconds] = useState<number>(secVariable) // Seconds state
    const [running, setRunning] = useState<boolean>(false) // runnig state: boolean
    const [sum, setSum] = useState<number>(0)

    // Countdown useEffect hook
    // Changes when: running, minutes, seconds
    // Main purpose: changing the countdown states: setMinutes, setSeconds with 1 sec intervallum
    useEffect(() => {
        let timer: NodeJS.Timeout | undefined

        if (running && (minutes > 0 || seconds > 0)) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    setMinutes((prevMinutes) => prevMinutes - 1)
                    setSeconds(59)
                } else {
                    setSeconds((prevSeconds) => prevSeconds - 1)
                }
            }, 1000)
        }

        // The timer is done so we add the initialMinutes to the sum variable
        // Might not be a good implement: React Hook useEffect has a missing dependency: 'initialMinutes'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
        // Fixed? the issue above with an outside let variables.
        if (minutes === 0 && seconds === 0) {
            setRunning(false)
            setSum((prevSum) => prevSum + minVariable)
            setMinutes(minVariable)
            setSeconds(secVariable)
        }

        // Reseting the timer variable if the countdown is at 0
        if (!running || (minutes === 0 && seconds === 0)) {
            clearInterval(timer)
        }

        return () => {
            clearInterval(timer)
        }
    }, [running, minutes, seconds])

    // Call this to start the countdown
    const handleStart = (): void => {
        setRunning(true)
    }

    // Call this when stoping the countdown without reseting
    const handleStop = (): void => {
        setRunning(false)
    }

    // Call this when reseting the counter
    const handleReset = (): void => {
        setRunning(false)
        setMinutes(minVariable)
        setSeconds(secVariable)
    }

    // param type for handleSetCountdown fucntion
    type CountdownParams = {
        min: number
        sec: number
    }
    // Call this when setting the pomodoro counter.
    // Parameters: min: number, sec: number
    // sec should be between 0 and 59
    const handleSetCountdown = ({ min, sec }: CountdownParams): void => {
        minVariable = min
        secVariable = sec
        setMinutes(min)
        setSeconds(sec)
    }

    return (
        <div className=" text-black dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Pomodoro</h1>
            <div className="" id="countdown">
                {minutes === 0 && seconds === 0 ? (
                    <p>{`Nice job! You did it! now take a quick rest!`}</p>
                ) : (
                    <p></p>
                )}
                <p className=" text-4xl text-center my-6">
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                </p>
            </div>
            <div
                className="flex md:flex-row sm:flex-col justify-center gap-4 m-3"
                id="controls"
            >
                <div>
                    {running ? (
                        <button
                            type="button"
                            onClick={handleStop}
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            STOP
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleStart}
                            className="m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            START
                        </button>
                    )}
                    <button
                        disabled={running}
                        onClick={handleReset}
                        type="button"
                        className="disabled:opacity-50 m-1 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        REASTART
                    </button>
                </div>
            </div>
            <div className="mt-6" id="quickSets">
                {/* <span>Quick sets</span> */}
                <div className="grid grid-col justify-center" id="controls">
                    <div>
                        <button
                            disabled={running}
                            onClick={() =>
                                handleSetCountdown({ min: 15, sec: 0 })
                            }
                            className="disabled:opacity-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            15:00
                        </button>
                        <button
                            disabled={running}
                            onClick={() =>
                                handleSetCountdown({ min: 25, sec: 0 })
                            }
                            className="disabled:opacity-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            25:00
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={running}
                            onClick={() =>
                                handleSetCountdown({ min: 30, sec: 0 })
                            }
                            className="disabled:opacity-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            30:00
                        </button>
                        <button
                            disabled={running}
                            onClick={() =>
                                handleSetCountdown({ min: 45, sec: 0 })
                            }
                            className="disabled:opacity-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            45:00
                        </button>
                    </div>
                    <div>
                        <button
                            disabled={running}
                            onClick={() =>
                                handleSetCountdown({ min: 50, sec: 0 })
                            }
                            className="disabled:opacity-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            50:00
                        </button>
                        <button
                            disabled={running}
                            onClick={() =>
                                handleSetCountdown({ min: 60, sec: 0 })
                            }
                            className="disabled:opacity-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            60:00
                        </button>
                    </div>
                </div>
            </div>
            <div id="progress">
                <p className="text-xl text-center my-10">
                    So far I focues for: {sum} minutes!
                </p>
            </div>
        </div>
    )
}

export default Pomodoro
