import React from "react";

function CategoryFilter({categories, seletectedCategory: selectedCategory, onChangeCategory}) {

  function handleClick(category){
    onChangeCategory(category);
  }

  
  const categoryElements = categories.map((category) => {
    return (
      <button key={category} className={selectedCategory === category ? "selected" : ""} onClick={() => handleClick(category)}>
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