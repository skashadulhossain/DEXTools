import React from 'react';
import './SmallChartView.css';
import AddNewChartComponent from '../AddNewChart/AddNewChart';

const SmallChartView = () => {
  return (
    <div className="MultiChartTab-smallChart">
       <AddNewChartComponent/>
    </div>
  );
};

export default SmallChartView;
