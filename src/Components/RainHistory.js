import React from 'react'
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        label: 'mm',
        data: [345,
          268.3,
          252.4,
          115,
          28.9,
          10.6,
          4.6,
          11.8,
          45.8,
          147.4,
          238,
          341],
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

const RainHistory= () => (
      <>
<div className='chart-section'>
      <div className="chart">
      <div className='header'>
      <h1 className='title'>Preciptação Acumulada 1981 - 2010</h1>
      <div className='links'>
      </div>
    </div>
    <Bar data={data} options={options} />
      </div>
    </div>

      </>
  ); 

export default RainHistory;