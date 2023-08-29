import React, { useState, useEffect } from "react";
import Quotable from "./Quotable";

const Todo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [reward, setReward] = useState<string | null>(null);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    if (completedTasks.length > 0) {
      setLoading(true);

      const apiKey = "YOUR_NASA_API_KEY";
      const apiUrl = "https://api.nasa.gov/insight_weather/";

      fetch(`${apiUrl}?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching NASA API:", error);
          setLoading(false);
        });
    }
  }, [completedTasks]);

  useEffect(() => {
    if (completedTasks.length > 0) {
      const spaceFacts = [
        "The first living creatures in space were fruit flies, launched by the U.S. in 1947.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "A day on Venus is longer than its year. It takes Venus about 243 Earth days to fully rotate on its axis, but only about 225 days to orbit the sun.",
      ];

      const randomFact =
        spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
      setReward(randomFact);
    }
  }, [completedTasks]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index: number) => {
    const task = tasks[index];
    setCompletedTasks([...completedTasks, task]);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask(""); // Clear the input field
    }
  };

  return (
    <div className=" text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">To-Do</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Add a New Task</h2>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-1 mr-2"
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-2 rounded"
          onClick={handleAddTask}
        >
          ADD
        </button>
      </div>
      <div className="mb-8">
        <ul>
          {tasks.map((mission, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2">{mission}</span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
                onClick={() => completeTask(index)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Completed Task</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <div>
          {/* {loading ? <p>Loading...</p> : reward && <p>Space Fact Reward: {reward}</p>} */}
          {loading ? <p>Loading...</p> : reward && <p>Quote:{<Quotable />}</p>}
        </div>
      </div>
    </div>
  );
};

export default Todo;
