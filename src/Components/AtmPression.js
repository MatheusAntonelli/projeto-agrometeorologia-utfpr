import React from 'react';
import { Line } from 'react-chartjs-2';

const dataPres = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Pressão Atmosferica',
      data: [1011.2,
        1011.5,
        1011.3,
        1012,
        1013.6,
        1015.5,
        1015.7,
        1014.1,
        1012,
        1010.8,
        1010.5,
        1010.8],
      fill: false,
      backgroundColor: 'rgb(	0,0,255)',
      borderColor: 'rgba(	0,0,255, 0.2)',
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

const AtmPression = () => (
  <>
    <div className='chart-section'>
      <div className="chart">
      <div className='header'>
      <h1 className='title'>Pressão Atmosferica 1981 - 2010</h1>
      <div className='links'>
      </div>
    </div>
    <Line data={dataPres} options={options} />
      </div>
    
    </div>
    
  </>
);

export default AtmPression;