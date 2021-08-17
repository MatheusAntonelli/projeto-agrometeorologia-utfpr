import React from 'react'
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        label: 'Evaporação',
        data: [86.9,
            82.3,
            92.5,
            115.2,
            149.3,
            173.3,
            222.3,
            277.4,
            259.4,
            181.9,
            107.3,
            86.6],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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

  const Evaporation = () => (
    <>
    <div className='chart-section'>
    <div className='chart'>
      <div className='header'>
        <h1 className='title'>Gráfico Evaporação 1981-2010</h1>
  
      
      </div>
      <Line data={data} options={options} />
    </div>
      </div>
  
      
    </>
  );
  
  export default Evaporation;





