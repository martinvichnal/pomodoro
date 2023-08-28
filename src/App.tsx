import React from 'react';
import Pomodoro from "./components/Pomodoro"
import Todo from "./components/Todo"
import Navbar from './components/Navbar';
import FooterMain from './components/FooterMain';



export default function App() {
  return (
    <>
      <div className='w-screen h-screen bg-white dark:bg-slate-800'>
        {/* <div className='grid grid-cols-2 gap-2 mt-3'> */}
        <div className='flex md:flex-row sm:flex-col justify-center gap-4 m-3'>
          <div className='basis-2/4 p-4 rounded-3xl shadow-xl border-2 hover:border-0  border-red-100 bg-red-200 '>
            <Pomodoro />
          </div>
          <div className='basis-2/4 p-4 rounded-3xl shadow-xl border-2 hover:border-0  border-green-100 bg-green-200 '>
            <Todo />
          </div>
        </div>
      </div>
    </>
  );
}

