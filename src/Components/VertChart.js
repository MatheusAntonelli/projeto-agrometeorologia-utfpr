import React from 'react';
import { Bar } from 'react-chartjs-2';

const dataInsolation = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: '%',
      data: [149.4,
        169.7,
        173.6,
        216.2,
        248.2,
        250.4,
        262.6,
        262.8,
        199.6,
        198.8,
        163.6,
        144.4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VertChart = () => (
  <>
  <div className='chart-section'>
    <div className='chart'>
      <div className='chart-title'>
        <h1 className='title'>Insolação 1981-2010</h1>
      </div>
        <Bar data={dataInsolation} options={options} />
    </div>
  </div>
  


  </>
);

export default VertChart;