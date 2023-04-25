import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  //The first element in category "code" will be the default option for the task category since "All" is an invalid choice.
  const defaultCategory = categories[1];

  const [details, setDetails] = useState("");
  const [category, setCategory] = useState(defaultCategory);
  
  const formData = {
    text: details,
    category: category
  };

  const categoryElements = categories.map((category) => {
    if (category === "All"){
      return null;
    }else {
      return(
       <option key={category} value={category}>
        {category}
      </option>
      );
    }
  })
  

  function handleSubmit(event){
    event.preventDefault();
 
    onTaskFormSubmit(formData);

    //perform clean up. That is, reset the form.
    setDetails("");
    setCategory(defaultCategory);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(event) => {setDetails(event.target.value)}}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(event) => {setCategory(event.target.value)}}>
          {categoryElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
