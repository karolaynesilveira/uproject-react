import React, { useState } from "react";
import {
  Button,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  Label,
  Pagination,
  Table,
} from "semantic-ui-react";
import { Filter, StyledTableCell } from "./styles";
import ProjectInfoModal from "./modal";
import LoremIpsum from "react-lorem-ipsum";
import { useNavigate } from "react-router-dom";
import FilterLabels from "../../layout/filter";
import ReactDatePicker from "react-datepicker";
import ConfirmationModal from "../../layout/confimationModal";

const pageSize = 8;

const statusOptions = [
  { key: "ativo", text: "Ativo", value: "Ativo" },
  { key: "inativo", text: "Inativo", value: "Inativo" },
];

const ProjectScreen = () => {
  const navigate = useNavigate();
  const allProjects = [
    {
      id: 1,
      name: "Project X",
      budget: 65000.0,
      spentBudget: 32000.0,
      status: "Em execução",
      startDate: "2022-10-15",
      endDate: "2023-07-31",
    },
    {
      id: 2,
      name: "Project Y",
      budget: 48000.0,
      spentBudget: 45000.0,
      status: "Em execução",
      startDate: "2023-01-10",
      endDate: "2023-09-30",
    },
    {
      id: 3,
      name: "Project Z",
      budget: 80000.0,
      spentBudget: 65000.0,
      status: "Parado",
      startDate: "2023-03-25",
      endDate: "2023-12-15",
    },
    {
      id: 4,
      name: "Project W",
      budget: 55000.0,
      spentBudget: 39000.0,
      status: "Parado",
      startDate: "2023-04-02",
      endDate: "2023-11-20",
    },
    {
      id: 5,
      name: "Project A",
      budget: 71000.0,
      spentBudget: 58000.0,
      status: "Finalizado",
      startDate: "2023-02-05",
      endDate: "2023-10-28",
    },
    {
      id: 6,
      name: "Project B",
      budget: 92000.0,
      spentBudget: 75000.0,
      status: "Parado",
      startDate: "2023-01-15",
      endDate: "2023-12-31",
    },
    {
      id: 7,
      name: "Project C",
      budget: 44000.0,
      spentBudget: 33000.0,
      status: "Em execução",
      startDate: "2023-03-20",
      endDate: "2023-11-10",
    },
    {
      id: 8,
      name: "Project D",
      budget: 68000.0,
      spentBudget: 59000.0,
      status: "Parado",
      startDate: "2023-02-01",
      endDate: "2023-12-31",
    },
    {
      id: 9,
      name: "Project E",
      budget: 58000.0,
      spentBudget: 42000.0,
      status: "Em execução",
      startDate: "2023-01-10",
      endDate: "2023-10-20",
    },
    {
      id: 10,
      name: "Project F",
      budget: 76000.0,
      spentBudget: 61000.0,
      status: "Finalizado",
      startDate: "2023-02-28",
      endDate: "2023-12-31",
    },
    {
      id: 11,
      name: "Project Zeta",
      budget: 8000.0,
      spentBudget: 42000.0,
      status: "Em execução",
      startDate: "2023-01-10",
      endDate: "2023-10-20",
    },
    {
      id: 12,
      name: "Project 0",
      budget: 999999.0,
      spentBudget: 61000.0,
      status: "Parado",
      startDate: "2023-02-28",
      endDate: "2023-12-31",
    },
  ];

  const [activePage, setActivePage] = useState(1);

  const totalPages = Math.ceil(allProjects.length / pageSize);
  const startIndex = (activePage - 1) * pageSize;
  const projects = allProjects.slice(startIndex, startIndex + pageSize);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const [modalData, setModalData] = useState({
    title: "",
    text: "",
    icon: "close",
    handleOptionSelected: (bool) => {
      console.log(bool);
    },
  });

  const [open, modalWrapper] = React.useState(false);

  const handlePageChange = (e, data) => {
    setActivePage(data.activePage);
  };

  const handleInfoClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleEditClick = (project) => {
    console.log(project);
    //
  };

  const initialFilterState = {
    nome: "",
    orcamentoMin: "",
    orcamentoMax: "",
    orcamentoExecutadoMin: "",
    orcamentoExecutadoMax: "",
    status: [],
    periodoMin: "",
    periodoMax: "",
  };

  const [formData, setFormData] = useState(initialFilterState);

  const handleInputChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e, { value }) => {
    setFormData({ ...formData, status: value });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
  };

  return (
    <div style={{ position: "relative", minHeight: "85vh" }}>
      <div>
        <Button.Group></Button.Group>
        <Button
          icon
          labelPosition="right"
          color="green"
          onClick={() => {
            navigate("/coordinator/projects/new");
          }}
        >
          Novo
          <Icon name="clipboard outline" />
        </Button>

        <Button
          icon
          labelPosition="right"
          color="orange"
          onClick={() => {
            setIsFiltersOpen(!isFiltersOpen);
          }}
        >
          Filtros
          <Icon name="filter" />
        </Button>
        <div>
          <Filter open={isFiltersOpen}>
            <Form.Group>
              <Form.Field
                control={Input}
                label="Nome"
                placeholder="Nome"
                name="nome"
                onChange={handleInputChange}
                value={formData.nome}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                style={{ minWidth: "182px" }}
                control={Dropdown}
                label="Status"
                placeholder="Selecione..."
                name="status"
                options={statusOptions}
                selection
                multiple
                onChange={handleStatusChange}
                value={formData.status}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                control={Input}
                label="Orçamento (Mín)"
                placeholder="R$ 0.00"
                name="orcamentoMin"
                onChange={handleInputChange}
                value={formData.orcamentoMin}
              />
              <Form.Field
                control={Input}
                label="Orçamento (Máx)"
                placeholder="R$ 0.00"
                name="orcamentoMax"
                onChange={handleInputChange}
                value={formData.orcamentoMax}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                control={Input}
                label="Orçamento Executado (Mín)"
                placeholder="R$ 0.00"
                name="orcamentoExecutadoMin"
                onChange={handleInputChange}
                value={formData.orcamentoExecutadoMin}
              />
              <Form.Field
                control={Input}
                label="Orçamento Executado (Máx)"
                placeholder="R$ 0.00"
                name="orcamentoExecutadoMax"
                onChange={handleInputChange}
                value={formData.orcamentoExecutadoMax}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                label="Período (Min)"
                control={ReactDatePicker}
                selected={formData.periodoMin}
                onChange={(date) => handleDateChange("periodoMin", date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                name="periodoMin"
                isClearable
                showYearDropdown
                dropdownMode="select"
              />

              <Form.Field
                label="Período (Máx)"
                control={ReactDatePicker}
                selected={formData.periodoMax}
                onChange={(date) => handleDateChange("periodoMax", date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                name="periodoMax"
                isClearable
                showYearDropdown
                dropdownMode="select"
              />
            </Form.Group>
            <Form.Group style={{ marginLeft: "auto", marginTop: "15px" }}>
              <Button
                color="blue"
                icon
                labelPosition="right"
                onClick={() => {
                  setIsFiltersOpen(!isFiltersOpen);
                }}
              >
                Voltar <Icon name="tag" />
              </Button>
              <Button
                color="orange"
                icon
                labelPosition="right"
                onClick={() => {
                  setModalData({
                    title: "Limpar",
                    text: "Você tem certeza que deseja limpar todos os filtros?",
                    icon: "ban",
                    handleOptionSelected: (bool) => {
                      if (bool) {
                        setFormData(initialFilterState);
                        setIsFiltersOpen(!isFiltersOpen);
                      }
                    },
                  });
                  modalWrapper(true);
                }}
              >
                Limpar <Icon name="ban" />
              </Button>
            </Form.Group>
            <ConfirmationModal
              open={open}
              modalWrapper={modalWrapper}
              text={modalData.text}
              title={modalData.title}
              icon={modalData.icon}
              handleOptionSelected={modalData.handleOptionSelected}
            />
          </Filter>
        </div>

        <Divider horizontal>Filtros</Divider>
        <div>
          <FilterLabels formData={formData} formDataHandler={setFormData} />
        </div>
      </div>

      <Table celled color="green" basic="very" fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>Nome</Table.HeaderCell>
            <Table.HeaderCell width={4}>Descrição</Table.HeaderCell>
            <Table.HeaderCell width={1}>Orçamento</Table.HeaderCell>
            <Table.HeaderCell width={1}>Orçamento Executado</Table.HeaderCell>
            <Table.HeaderCell width={1}>Status</Table.HeaderCell>
            <Table.HeaderCell width={2}>Período</Table.HeaderCell>
            <Table.HeaderCell width={1}>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {projects.map((project) => (
            <Table.Row key={project.id}>
              <Table.Cell>{project.name}</Table.Cell>
              <Table.Cell collapsings>
                {project.description || (
                  <LoremIpsum
                    p={1}
                    avgWordsPerSentence={1}
                    avgSentencesPerParagrap={1}
                  />
                )}
              </Table.Cell>
              <Table.Cell>{`R$ ${project.budget.toFixed(2)}`}</Table.Cell>
              <Table.Cell>{`R$ ${project.spentBudget.toFixed(2)}`}</Table.Cell>
              <Table.Cell
                negative={project.status === "Parado"}
                positive={project.status === "Finalizado"}
              >
                {project.status}
              </Table.Cell>
              <Table.Cell>
                <div style={{ textAlign: "left" }}>
                  <Label>
                    {new Date(project.startDate).toLocaleDateString("pt-BR")}
                  </Label>{" "}
                  a{" "}
                  <Label>
                    {new Date(project.endDate).toLocaleDateString("pt-BR")}
                  </Label>
                </div>
              </Table.Cell>
              <StyledTableCell>
                <Button.Group>
                  <Button
                    icon
                    onClick={() => handleInfoClick(project)}
                    color="green"
                    circular
                  >
                    <Icon name="info" />
                  </Button>
                  <Button
                    icon
                    onClick={() => handleEditClick(project)}
                    color="orange"
                    circular
                  >
                    <Icon name="pencil" />
                  </Button>
                </Button.Group>
              </StyledTableCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div
        style={{
          position: "relative",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          color="green"
          pointing
          secondary
          totalPages={totalPages}
          activePage={activePage}
          onPageChange={handlePageChange}
        />
        {selectedProject && (
          <ProjectInfoModal
            project={selectedProject}
            open={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectScreen;
