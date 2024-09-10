import React from 'react';
import { Plus } from 'lucide-react';
import './AddNewChart.css'; // New CSS file

const AddNewChartComponent = () => (
  <div className="MultiChartTab-addNewChart">
    <div className="MultiChartTab-addIcon">
      <Plus size={24} />
    </div>
    <p className="MultiChartTab-addText">Add new chart</p>
    <p className="MultiChartTab-slotsRemaining">10 of 10 slots remaining</p>
  </div>
);

export default AddNewChartComponent;
