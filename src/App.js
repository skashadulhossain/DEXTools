import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Pairexplorer from './Pages/Pair Explorer/Pairexplorer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/Pairexplorer" exact element={<Pairexplorer/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
