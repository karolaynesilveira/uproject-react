import React from 'react';
import { Chart } from 'react-google-charts';
import './style.css'; // Import your CSS file

const MetricsPanel = () => {

  const globalProjectData = [
    ['Rubrica', 'Quantia'],
    ['Bens de Consumo', 40],
    ['Bens Permanentes', 30],
    ['Serviços', 20],
    ['Transporte', 10],
  ];

  const specificProjectData = [['Tarefa', 'Realizada'], ['Realizado', 8], ['Incompleto', 2]];

  const responsiblesData = [
    ['Responsavel', 'Quantia'],
    ['Prof. Carlos P.', 25],
    ['Prof. Pablo', 10],
    // Add more responsible data as needed
  ];

  return (
    <div className="metrics-container">
      <div className="metrics-message">
        <h2>Painel de relatórios</h2>
        <p>Rastreio geral de projetos, e responsaveis.</p>
      </div>

      <div className="metrics-chart blue">
        {/* Global Project Pie Chart */}
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={globalProjectData}
          options={{
            title: 'Todos os projetos',
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>

      <div className="metrics-chart orange">
        {/* Responsibles Pie Chart */}
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={responsiblesData}
          options={{
            title: 'Coordenadores',
          }}
          rootProps={{ 'data-testid': '4' }}
        />
      </div>
    </div>
  );
};

export default MetricsPanel;
