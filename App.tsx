import React from 'react'; //Imports React to use its JSX suntax
import Sidebar from './Sidebar'; //Sidebar component
import PhotoGrid from './Photos'; //Importants PhotoGrid component

const App: React.FC = () => { //Defines App component. Sidebar & PhotoGrid components are rendered. 
  return (
    <div className="container-fluid"> 
      <div className="row">
        <div className="col-md-2 bg-warning p-3"> 
          <Sidebar />
        </div>
        <div className="col-md-10 bg-info text-light p-4">
          <h1 className="text-center">My Travels</h1> 
          <PhotoGrid />
        </div>
      </div>
    </div>
  );
};

export default App; //Exports App component to be used in main.tsx




