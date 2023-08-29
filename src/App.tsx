import React from "react";

// Importing components
import Navbar from "./components/Navbar";
import Pomodoro from "./components/Pomodoro";
import Todo from "./components/Todo";
import FooterMain from "./components/FooterMain";

// Import background image
// import BackgroundImage from './assets/studio.jpg'

// Main APP
export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <div style={{ backgroundImage: `url(${BackgroundImage})` }} className=' w-screen h-screen bg-cover bg-no-repeat bg-center'> */}
      <div className="w-screen h-screen bg-white">
        {/* <div className='grid grid-cols-2 gap-2 mt-3'> */}
        <div className="content-center flex md:flex-row sm:flex-col justify-center gap-4 m-3">
          <div className="mt-10 basis-2/4 p-4 rounded-2xl shadow-2xl bg-slate-200">
            <Pomodoro />
          </div>
          <div className="mt-10 basis-2/4 p-4 rounded-2xl shadow-2xl bg-slate-200">
            <Todo />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
