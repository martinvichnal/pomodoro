import DarkModeSwitcher from "../components/DarkModeSwitcher"

const Navbar = () => {
    return (
        // <nav className="fixed w-full z-20 top-0 left-0 border-b bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
        <nav className="w-full z-20 top-0 left-0 border-b bg-slate-200 dark:bg-slate-900 border-gray-200 dark:border-slate-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex md:order-1">
                    <a
                        href="https://www.martinvichnal.com/"
                        className="flex items-center"
                    >
                        <div className="flex flex-col">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Personal Portfolio
                            </span>
                            <span className="text-[10px] font-semibold whitespace-nowrap dark:text-white">
                                By Martin Vichnál
                            </span>
                        </div>
                    </a>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-200 rounded-lg bg-slate-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:border-slate-200 dark:bg-gray-900 md:dark:bg-slate-900 dark:border-slate-900">
                        <li>
                            <a
                                href="#home"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#aboutme"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="/pomodoro"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Pomodoro
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex md:order-2 ">
                    <DarkModeSwitcher />
                </div>
            </div>
        </nav>
    )
}
export default Navbar
