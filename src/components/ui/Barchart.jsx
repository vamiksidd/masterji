// In Barchart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Barchart = ({ data, options }) => {
  return <Bar data={data} options={options}/>;
};

export default Barchart;
