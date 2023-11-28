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
import { useNavigate } from "react-router-dom";
import FilterLabels from "../../layout/filter";
import ReactDatePicker from "react-datepicker";
import ConfirmationModal from "../../layout/confimationModal";
import { LOGGED_USER, USER_TYPE_ADMINISTRATOR, USER_TYPE_COORDINATOR } from "../../../commons/userType";

const pageSize = 8;

const statusOptions = [
  { key: "ativo", text: "Ativo", value: "Ativo" },
  { key: "inativo", text: "Inativo", value: "Inativo" },
];

const RequestScreen = () => {
  const navigate = useNavigate();
  const allProjects = [
    {
      id: 1,
      item: "Café 500g",
      quantity: 20,
      project: "Project X",
      budget: 65000.0,
      category: "Bens de consumo",
      spentBudget: 32000.0,
      status: "Não aprovado",
      startDate: "2022-10-15",
      endDate: "2023-07-31",
    },
    {
      id: 2,
      item: "Caneta esferográfica Azul",
      quantity: 50,
      project: "Vestibular 2024/1",
      budget: 48000.0,
      category: "Bens de consumo",
      spentBudget: 45000.0,
      status: "Em execução",
      startDate: "2023-01-10",
      endDate: "2023-09-30",
    },
    {
      id: 3,
      item: "Caneta esferográfica preta",
      quantity: 15,
      project: "Project Z",
      budget: 80000.0,
      category: "Bens de consumo",
      spentBudget: 65000.0,
      status: "Parado",
      startDate: "2023-03-25",
      endDate: "2023-12-15",
    },
    {
      id: 4,
      item: "Smartphone com TOF",
      quantity: 1,
      project: "Project Weather",
      budget: 55000.0,
      category: "Bens permanentes",
      spentBudget: 39000.0,
      status: "Não aprovado",
      startDate: "2023-04-02",
      endDate: "2023-11-20",
    },
    {
      id: 5,
      item: "Carne Bovina pct 1kg",
      quantity: 5,
      project: "Project A",
      budget: 71000.0,
      category: "Bens de consumo",
      spentBudget: 58000.0,
      status: "Não aprovado",
      startDate: "2023-02-05",
      endDate: "2023-10-28",
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

  const handleInputChange = (e, { project, value }) => {
    setFormData({ ...formData, [project]: value });
  };

  const handleStatusChange = (e, { value }) => {
    setFormData({ ...formData, status: value });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDateChange = (project, date) => {
    setFormData({ ...formData, [project]: date });
  };

  return (
    <div style={{ position: "relative", minHeight: "85vh" }}>
      <div>
        <Button.Group></Button.Group>
        <Button
          style={{ display: LOGGED_USER == USER_TYPE_COORDINATOR? "" : "none" }}
          icon
          labelPosition="right"
          color="green"
          onClick={() => {
            navigate(`/${LOGGED_USER == USER_TYPE_COORDINATOR? "coordinator" : "directorate"}/solicitations/new`);
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
                project="nome"
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
                project="status"
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
                project="orcamentoMin"
                onChange={handleInputChange}
                value={formData.orcamentoMin}
              />
              <Form.Field
                control={Input}
                label="Orçamento (Máx)"
                placeholder="R$ 0.00"
                project="orcamentoMax"
                onChange={handleInputChange}
                value={formData.orcamentoMax}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                control={Input}
                label="Orçamento Executado (Mín)"
                placeholder="R$ 0.00"
                project="orcamentoExecutadoMin"
                onChange={handleInputChange}
                value={formData.orcamentoExecutadoMin}
              />
              <Form.Field
                control={Input}
                label="Orçamento Executado (Máx)"
                placeholder="R$ 0.00"
                project="orcamentoExecutadoMax"
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
                project="periodoMin"
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
                project="periodoMax"
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
            <Table.HeaderCell width={2}>Item</Table.HeaderCell>
            <Table.HeaderCell width={2}>Rubrica</Table.HeaderCell>
            <Table.HeaderCell width={1}>Projeto</Table.HeaderCell>
            <Table.HeaderCell width={1}>Quantidade</Table.HeaderCell>
            <Table.HeaderCell width={1}>Orç. Alocado</Table.HeaderCell>
            <Table.HeaderCell width={1}>Orç. Alocado Executado</Table.HeaderCell>
            <Table.HeaderCell width={1}>Status</Table.HeaderCell>
            <Table.HeaderCell width={2}>Período</Table.HeaderCell>
            <Table.HeaderCell width={1}>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {projects.map((project) => (
            <Table.Row key={project.id}>
              <Table.Cell>{project.item}</Table.Cell>
              <Table.Cell>{project.category}</Table.Cell>
              <Table.Cell>{project.project}</Table.Cell>
              <Table.Cell>{project.quantity}</Table.Cell>
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
                    color={LOGGED_USER == USER_TYPE_ADMINISTRATOR? "blue" : "green"}
                    circular
                  >
                    <Icon name="info" />
                  </Button>
                  <Button
                    style={{ display: LOGGED_USER == USER_TYPE_COORDINATOR? "" : "none" }}
                    icon
                    onClick={() => handleEditClick(project)}
                    color="orange"
                    circular
                  >
                    <Icon name="pencil" />
                  </Button>
                  <Button
                    style={{ display: LOGGED_USER == USER_TYPE_ADMINISTRATOR & project.status == "Não aprovado" ? "" : "none" }}
                    icon
                    onClick={() => {
                      setModalData({
                        title: "Aprovar",
                        text: "Você tem certeza que deseja aprovar a seguinte solicitação?",
                        icon: "check",
                        handleOptionSelected: (bool) => {
                          console.log(bool, "Estou aprovando uma solicitação");
                        },
                      });
                      modalWrapper(true);
                    }}
                    color="green"
                    circular
                  >
                    <Icon name="check" />
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
        <ConfirmationModal
          open={open}
          modalWrapper={modalWrapper}
          text={modalData.text}
          title={modalData.title}
          icon={modalData.icon}
          handleOptionSelected={modalData.handleOptionSelected}
        />
      </div>
    </div>
  );
};

export default RequestScreen;
