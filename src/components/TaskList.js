import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks, category="All", onDeleteTask}) {

  const taskElements = tasks
  .filter((task) => category === "All" ? true : category === task.category)
  .map((task) => <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onDeleteTask}/>);


  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;