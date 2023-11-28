import React from "react";
import { Button, Modal, Table } from "semantic-ui-react";
import { Chart } from "react-google-charts";

const ProjectInfoModal = ({ project, open, onClose }) => {
  const chartData = [
    ["Currency", "Amount"],
    ["Orçamento", project.budget],
    ["Orçamento Gasto", project.spentBudget],
  ];

  return (
    <Modal open={open} onClose={onClose} size="large">
      <Modal.Header>Detalhes do projeto</Modal.Header>
      <Modal.Content scrolling>
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Nome</Table.Cell>
              <Table.Cell>{project.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Status</Table.Cell>
              <Table.Cell>{project.status}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Data de Início</Table.Cell>
              <Table.Cell>{project.startDate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Data de Termino</Table.Cell>
              <Table.Cell>{project.endDate}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={chartData}
          options={{
            is3D: true,
          }}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={onClose}>
          Fechar
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProjectInfoModal;
