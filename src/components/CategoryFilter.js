import React from "react";

function CategoryFilter({categories, seletectedCategory: selectedCategory, onChangeCategory}) {

  function handleClick(event, category){
    onChangeCategory(category);
    event.target.className = "selected";
  }

  
  const categoryElements = categories.map((category) => {
    return (
      <button key={category} className="" onClick={(event) => handleClick(event, category)}>
        {category}
      </button>);
    });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryElements}
    </div>
  );
}

export default CategoryFilter;