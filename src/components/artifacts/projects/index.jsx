import React from "react";
import { Button, Table } from "semantic-ui-react";

const projects = [
  {
    id: 1,
    name: "Project A",
    budget: 50000.0,
    spentBudget: 25000.0,
    status: "Em execução",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
  },
  {
    id: 2,
    name: "Project B",
    budget: 75000.0,
    spentBudget: 60000.0,
    status: "Parado",
    startDate: "2023-02-15",
    endDate: "2023-11-30",
  },
  // Add more projects as needed
];

const ProjectScreen = () => {
  return (
    <div>
      <Button primary>New Novo</Button>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Orçamento</Table.HeaderCell>
            <Table.HeaderCell>Orçamento Executado</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Período</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {projects.map((project) => (
            <Table.Row key={project.id}>
              <Table.Cell>{project.name}</Table.Cell>
              <Table.Cell>{`R$ ${project.budget.toFixed(2)}`}</Table.Cell>
              <Table.Cell>{`R$ ${project.spentBudget.toFixed(2)}`}</Table.Cell>
              <Table.Cell>{project.status}</Table.Cell>
              <Table.Cell>{`${project.startDate} to ${project.endDate}`}</Table.Cell>
              <Table.Cell>
                <Button primary icon="info" content="Info" />
                <Button primary icon="edit" content="Edit" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProjectScreen;
