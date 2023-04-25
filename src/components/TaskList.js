import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks, category, onDeleteTask}) {

  const taskElements = tasks
  .filter((task) => category === "All" ? true : category === task.category)
  .map((task) => <Task key={task.text} task={task} onDeleteTask={onDeleteTask}/>);


  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;