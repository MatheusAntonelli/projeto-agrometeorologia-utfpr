import React from 'react';
import { Line } from 'react-chartjs-2';

const temp = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Temperatura Máxima (°C)',
      data: [30.7,
        31.7,
        31.7,
        32.3,
        32,
        31.6,
        32.1,
        34.1,
        35,
        33.7,
        31.8,
        30.8],
      fill: false,
      backgroundColor: '#A52A2A',
      borderColor: '#DC143C',
    },
    {
      label: 'Temperatura Média (°C)',
      data: [25,
        25.2,
        25.2,
        25.3,
        24.3,
        23,
        23.4,
        25.5,
        27.2,
        26.6,
        25.6,
        25],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: '#228B22',
    },
    {
      label: 'Temperatura Minima (°C)',
      data: [21.2,
        21.2,
        21.3,
        20.8,
        19.2,
        17.5,
        17.6,
        19.7,
        21.7,
        21.7,
        21.4,
        21.3],
      fill: false,
      backgroundColor: 'green',
      borderColor: 'blue',
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

const LineChart = () => (
  <>
  <div className='chart-section'>
  <div className='header'>
      <h1 className='title'>Grafico Temperatura 1981-2010</h1>
      <div className='links'>
      </div>
    </div>
    <Line data={temp} options={options} />
  </div>
    
  </>
);

export default LineChart;