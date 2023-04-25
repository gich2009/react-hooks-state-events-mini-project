import React from "react";

function Task({task, onDeleteTask}) {
  // const {text, category} = task;

  function handleDeleteClick(text){
    onDeleteTask(text);  
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => handleDeleteClick(task.text)}>X</button>
    </div>
  );
}

export default Task;
