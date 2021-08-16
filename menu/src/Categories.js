import React from 'react';

const Categories = ({filterItems,  categories}) => {
  return (
    <>
    <div className="text-center mb-5">
      {
        categories.map((category,index) => {
          return(
            <button
              className="btn btn-outline-primary mx-2"
             type="button" key={index} onClick={()=> filterItems(category)}>
              {category}
            </button>
          )
        })
      }
    </div>
    </>
  );
};

export default Categories;
