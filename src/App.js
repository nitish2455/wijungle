import React from 'react';
import { loadData } from './dataLoader';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {
  const data = loadData();

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Security Event Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BarChart data={data} />
        <LineChart data={data} />
        <PieChart data={data} />
      </div>
    </div>
  );
}

export default App;
 