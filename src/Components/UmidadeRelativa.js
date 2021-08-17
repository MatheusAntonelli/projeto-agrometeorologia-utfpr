import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Umidade em %',
      data: [
        79.9,
        78.4,
        78.6,
        73.1,
        65.9,
        59.2,
        52.2,
        44.8,
        49.3,
        63.7,
        74.3,
        79.6
      ],
      fill: false,
      backgroundColor: 'rgb(27, 196, 255)',
      borderColor: 'rgba(27, 196, 255, 0.4)',
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

const UmidadeRelativa = () => (
  <>
    <div className='chart-section'>
        <div className="chart">
        <div className='header'>
      <h1 className='title'>Umidade Relativa 1981 - 2010</h1>
    </div>
    <Line data={data} options={options} />
    </div>
        </div>
    

  </>
);

export default UmidadeRelativa;