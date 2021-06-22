import "./App.css";
import React from "react";
import Task from "./components/task.js";
import TaskInput from "./components/taskinput.js";

function App() {
  const [tasks, setTasks] = React.useState([]); // this manages what todos we have

  function addTask(task) {
    // adds a new task to our set of tasks
    setTasks([...tasks, { task }]);
  }

  function removeTask(id) {
    // removes task with index id from our set of classes
    const newtasks = [...tasks];
    newtasks.splice(id, 1);
    setTasks(newtasks);
  }

  return (
    <div className="App">
      <header>
        <h1>Daily To Do</h1>
      </header>
      <TaskInput handleSubmit={addTask} />
      {tasks.map((task, index) => (
        <Task
          task={task.task}
          id={index}
          key={index}
          handleDelete={removeTask}
        />
      ))}
    </div>
  );
}

export default App;
