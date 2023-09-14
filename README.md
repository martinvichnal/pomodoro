# vichnalmartin.com/pomodoro

![](https://img.shields.io/github/v/release/martinvichnal/pomodoro)
![](https://img.shields.io/github/last-commit/martinvichnal/pomodoro)
![](https://img.shields.io/github/issues/martinvichnal/pomodoro)

---

## Introduction

This is the repository of my pomodoro website made for learning creating websites.

The website is available on my personal site or in this link: [martinvichnal.com/pomodoro](https://www.martinvichnal.com/pomodoro/)

-   _Feel free to **improve, use or fork** this repository in your own projects :)_
-   _For any bugs or improvements feel free to make an [issue](https://github.com/martinvichnal/pomodoro/issues) or make a [pull request](https://github.com/martinvichnal/pomodoro/pulls)_

---

## Table of Contents

[vichnalmartin.com/pomodoro](#vichnalmartincompomodoro)
-   [Introduction](#introduction)
-   [Table of Contents](#table-of-contents)
-   [Usage](#usage)
    -   [Pomodoro](#pomodoro)
        -   [Cool features](#cool-features)
    -   [Todo](#todo)
        -   [Dark mode](#dark-mode)
        -   [Quote of the day](#quote-of-the-day)
-   [The code](#the-code)
    -   [Pomodoro](#pomodoro-1)
    -   [Todo](#todo-1)

---

## Usage

The site has two main sections: Pomodoro and Todo list. Let's start with the pomodoro section!

### Pomodoro

The pomodoro section can be used like this:

-   1.: This is the timer which is displaying how much time left on your focuse session
-   2.: This is the control center. You can start the timer, stop or reset it. The Start button is only available if the countdown is not counting down. If the countdown is started the START button dissapears and a red STOP button appears insted.
-   3.: These are the quick sets. You can quickly set your desire session windows.
-   4.: This is just a simple tracker which is counting how many minutes you have focused so far.

[<img src="https://github.com/martinvichnal/pomodoro/blob/main/ref/Pomodoro.png" width="500"/>](https://github.com/martinvichnal/pomodoro/blob/main/ref/Pomodoro.png)

#### Cool features

If the countdown is running all the buttons exept the STOP button is dissabled. This is in case of a missclick or other cases :)

### Todo

The todo section can be used like this:

-   1.: This is the section where you can name your task. For example: _Making a new spaceship_.
-   2.: This is the ADD button. Press it to add the task to your task list.
-   3.: This is were you can see all your pending tasks.
-   4.: If a chosen task is completed: First Good job! Then press the "Complete" button to cross the task off your list
-   5.: These are the completed tasks.

[<img src="https://github.com/martinvichnal/pomodoro/blob/main/ref/Todo.png" width="500"/>](https://github.com/martinvichnal/pomodoro/blob/main/ref/Todo.png)

### Dark mode

The site has a dark mode function which is by the way automatic so it is changeing like your OS changes thems but you can trigger the dark mode with a simple button press on the top right corner in the navbar.

[<img src="https://github.com/martinvichnal/pomodoro/blob/main/ref/Dark.png" width="500"/>](https://github.com/martinvichnal/pomodoro/blob/main/ref/Dark.png)
[<img src="https://github.com/martinvichnal/pomodoro/blob/main/ref/Light.png" width="500"/>](https://github.com/martinvichnal/pomodoro/blob/main/ref/Light.png)

### Quote of the day

This section is just a fun litle thing to boost your moral :) It uses this api [https://api.quotable.io/random](https://api.quotable.io/random) if you want to check it out.

[<img src="https://github.com/martinvichnal/pomodoro/blob/main/ref/Quote.png" width="300"/>](https://github.com/martinvichnal/pomodoro/blob/main/ref/Quote.png)

---

## The code

### Pomodoro

The pomodoro component is using only useState and useEffect react hooks

The code itself has 4 useState variables which are the following:

-   `minutes` variable with a default value of `minVariable`:
    ```tsx
    const [minutes, setMinutes] = useState<number>(minVariable)
    ```
-   `seconds` variable with a default value of the `secVariable`: (this is not really used but I added just in case)
    ```tsx
    const [seconds, setSeconds] = useState<number>(secVariable)
    ```
-   `running` variable with a default value of `false`:
    ```tsx
    const [running, setRunning] = useState<boolean>(false)
    ```
-   `sum` variable with a default value of `0`:
    ```tsx
    const [sum, setSum] = useState<number>(0)
    ```

The useEffect is the main component here because this is where the countdown actually decreases each sec (`secInterval(decreaseFunc, 1000)`)

```tsx
useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (running && (minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

// [...]
```

The following codes (`[…]`) is just for checking if the countdown is overdue and if it is then it adds the `minVariable` and `secVariable` to the sum state variable:

```tsx
if (minutes === 0 && seconds === 0) {
    setRunning(false)
    setSum((prevSum) => prevSum + minVariable)
    setMinutes(minVariable)
    setSeconds(secVariable)
}
```

In order to change the countdown starting number I declared a custom function where it sets the min and sec useState variables:

```tsx
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
```

I am using TypeScript in this project so by default I declared a custom type for the props and can be seen in: `type CountdownParams = { [...]`

The code has 3 more functions which are connected to individual buttons in `return()`. These are just a really simple state changing functions

-   `handleStart`
-   `handleStop`
-   `handleReset`

### Todo

The code itself has 3 useState variables which are the following (the code has more but it is not in use at the moment so I am not going to focus on those):

-   `tasks` variable with a default value of an empty array:
    ```tsx
    const [tasks, setTasks] = useState<string[]>([])
    ```
-   `completedTasks` variable with a default value of an empty array:
    ```tsx
    const [completedTasks, setCompletedTasks] = useState<string[]>([])
    ```
-   `newTask` variable with a default value of an empty string:
    ```tsx
    const [newTask, setNewTask] = useState<string>("")
    ```

The todo component basically uses 4 custom handle functions which are connected to individual buttons:

-   These functions are responsible to the new tasks to the pre-existent `tasks` string array. Every time the `<input>` element is changed the `onChange={handleNewTaskChange}` is called to set the new task name. The task is added to the array with help of the `handleAddTaks` function when the `<button>` is pressed.
    ```tsx
    const handleNewTaskChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewTask(event.target.value)
    }
    ```
    ```tsx
    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            addTask(newTask)
            setNewTask("") // Clear the input field
        }
    }
    ```
    ```tsx
    const addTask = (task: string) => {
        setTasks([...tasks, task])
    }
    ```
-   If a task is completed this is where the magic happens. It deletes the current task and adds it to the `completedTasks` string array
    ```tsx
    const completeTask = (index: number) => {
        const task = tasks[index]
        setCompletedTasks([...completedTasks, task])
        setTasks(tasks.filter((_, i) => i !== index))
    }
    ```

The current tasks and the completedTasks are mapped out with the help of the `.map()` function

```tsx
{
    tasks.map((mission, index) => (
        <li key={index} className="flex items-center mb-2">
            <span className="mr-2">{mission}</span>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
                onClick={() => completeTask(index)}
            >
                Complete
            </button>
        </li>
    ))
}
```

```tsx
{
    completedTasks.map((task, index) => <li key={index}>{task}</li>)
}
```
