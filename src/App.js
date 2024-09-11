import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Pairexplorer from './Pages/Pair Explorer/Pairexplorer';
import BigSwapExplorer from './Pages/BigSwapExplorer/BigSwapExplorer';
import MultiChart from './Pages/MultiChart/MultiChart';
import MultiSwap from './Pages/Multiswap/Multiswap';
import UserAccount from './Pages/UserAccount/UserAccount';
import UserArea from './Pages/UserArea/UserArea';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/UserAccount" exact element={<UserAccount/>} />
          <Route path="/Pairexplorer" exact element={<Pairexplorer/>} />
          <Route path="/BigSwapExplorer" exact element={<BigSwapExplorer/>} />
          <Route path="/MultiChart" exact element={<MultiChart/>} />
          <Route path="/MultiSwap" exact element={<MultiSwap/>} />
          <Route path="/UserArea" exact element={<UserArea/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
