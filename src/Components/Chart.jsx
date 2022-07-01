import React from "react";
import { Chart } from "react-google-charts";
import "./Chart.css";

const Charts = ({ Entry, Out }) => {
  const data = [
    ["Task", "Hours per Day"],
    ["Entradas", Entry],
    ["Saidas", Out],
  ];

  const options = {
    title: "Relação Entradas e Saidas",
  };

  return (
    <>
      <Chart chartType="PieChart" data={data} options={options} />
    </>
  );
};

export default Charts;
