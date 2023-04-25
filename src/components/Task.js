import React from "react";

function Task({text, category, onDeleteTask}) {
  // const {text, category} = task;
  console.log(text);

  function handleDeleteClick(text){
    onDeleteTask(text);  
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDeleteClick(text)}>X</button>
    </div>
  );
}

export default Task;
