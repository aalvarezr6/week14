//Display the add and remove buttons

import React from 'react'; //Imports React

const Sidebar: React.FC = () => { //Defines Sidebar component
  return (
    <div className="d-flex flex-column gap-2">
      <button className="btn btn-success">Add</button>
      <button className="btn btn-danger">Remove</button>
    </div>
  );
};

export default Sidebar; //Exports component to be use in other files. 

