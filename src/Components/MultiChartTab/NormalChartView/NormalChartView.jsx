import React from 'react';
import './NormalChartView.css';
import AddNewChartComponent from '../AddNewChart/AddNewChart';

const NormalChartView = () => {
  return (
    <div className="MultiChartTab-normalChart">
       <AddNewChartComponent/>
    </div>
  );
};

export default NormalChartView;
