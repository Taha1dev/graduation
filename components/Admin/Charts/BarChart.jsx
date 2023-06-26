// components/BarChart.js

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const BarChartContainer = ({ data, onDataChange }) => {
  const handleBarClick = (bar) => {
    if (d && d.name && d.name === bar.name) {
      const newData = data.map((d) => {
        if (d.name === bar.name) {
          return {
            ...d,
            uv: d.uv + 100,
          };
        }
        return d;
      });
      onDataChange(newData);
    }
  };

  return (
    <div style={{ height: '300px' }}>
      <div className=" container d-flex">
        <h2 className="justify-content-start">Patient Statistics</h2>
      </div>
      <BarChart width={1400} height={450} data={data} onClick={handleBarClick}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#40599D" />
        <Bar dataKey="pv" fill="#bbe4e1" />
      </BarChart>
    </div>
  );
};

export default BarChartContainer;
