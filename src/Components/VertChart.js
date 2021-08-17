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
        'rgba(245, 183, 177, 0.2)',
        'rgba(165, 105, 189, 0.2)',
        'rgba(93, 173, 226 , 0.2)',
        'rgba(22, 160, 133, 0.2)',
        'rgba(241, 196, 15, 0.2)',
        'rgba(147, 81, 22, 0.2)',
      ],
      borderColor: [
        'rgba(245, 183, 177, 1)',
        'rgba(165, 105, 189, 1)',
        'rgba(93, 173, 226 , 1)',
        'rgba(22, 160, 133, 1)',
        'rgba(241, 196, 15, 1)',
        'rgba(147, 81, 22 , 1)',
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