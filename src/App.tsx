import React from 'react';
import './App.css';
import { Pomodoro } from "./components/Pomodoro"
import { Todo } from "./components/Todo"

export default function App() {
  return (
    <div className="App">
      <Pomodoro></Pomodoro>
      <Todo></Todo>
    </div>
  );
}