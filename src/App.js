import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Pairexplorer from './Pages/Pair Explorer/Pairexplorer';
import BigSwapExplorer from './Pages/BigSwapExplorer/BigSwapExplorer';
import MultiChart from './Pages/MultiChart/MultiChart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/Pairexplorer" exact element={<Pairexplorer/>} />
          <Route path="/BigSwapExplorer" exact element={<BigSwapExplorer/>} />
          <Route path="/MultiChart" exact element={<MultiChart/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
