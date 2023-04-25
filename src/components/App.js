import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);
  
  function changeCategory(selectedCategory){
    setSelectedCategory(selectedCategory);
  }

  function addTask(newTask){
    const tasksBuffer = [...tasks, newTask];
    setTasks(tasksBuffer);
    console.log(tasks);
  }

  function deleteTask(taskText) {
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onChangeCategory={changeCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={tasks} category={selectedCategory} onDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;