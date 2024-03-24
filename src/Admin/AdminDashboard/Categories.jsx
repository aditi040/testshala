import React from 'react';

function Category() {
  // Sample list of items
  const title = [
    { id: 1, name: 'Item 1', description: 'Description of item 1' },
    { id: 2, name: 'Item 2', description: 'Description of item 2' },
    { id: 3, name: 'Item 3', description: 'Description of item 3' },
  ];



  return (
    <div className="app">
      <h1>List of Items</h1>
      <div className="item-list">
        {title.map(title => (
          <div className="item" key={title.id}>
            <div className="item-content">
              <h2>{title.name}</h2>
              <p>{title.description}</p>
            </div>
          </div>
        ))}
        <br/>
        <div className="text-center update">
          <button className="btn btn-primary">Add Category</button>
          </div>
      </div>
    </div>
  );
};

export default Category;

