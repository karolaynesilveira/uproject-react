import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Header,
  Icon,
  Label,
  MenuItem,
  Tab,
  Table,
} from "semantic-ui-react";
import useForm from "../../../../hooks/useForm";
import { TableContainer } from "./styles";
import ConfirmationModal from "../../../layout/confimationModal";
import ModalSolicitation from "./addSolicitation";
import { StyledTableCell } from "../styles";
import { useNavigate } from "react-router-dom";


const initialData = {
  status: "Lido",
  exercicio: "",
  empenho: "",
  categoriaProjeto: "",
  titulo: "",
  descricao: "",
  valorOrcado: "",
  empenhado: "0",
  realizado: "0",
  saldo: "0",
  parecerDirecao: "Texto do Parecer",
};

const allProjects = [
  {
    id: 1,
    item: "Café 500g",
    quantity: 20,
    project: "Project X",
    budget: 65000.0,
    category: "Bens de consumo",
    spentBudget: 32000.0,
    status: "Executado",
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
    status: "Em execução",
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
    status: "Em execução",
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
    status: "Em execução",
    startDate: "2023-02-05",
    endDate: "2023-10-28",
  },
];

const FormSolicitations = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [modalData, setModalData] = useState({
    title: "",
    text: "",
    icon: "archive",
    handleOptionSelected: (bool) => {
      console.log(bool);
    },
  });
  const [open, modalWrapper] = React.useState(false);
  const [openSolicitation, setOpenSolicitation] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, handleChange, setData, setLoading } = useForm(
    callbackSubmit,
    initialData
  );

  function callbackSubmit() {
    // Lógica para salvar/enviar os dados
  }

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);
    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      setScreenWidth(undefined);
    };
  }, [screenWidth]);

  const onTabChange = (event, activeTab) => {
    setActiveTab(activeTab.activeIndex);
  };

  const panes = [
    {
      menuItem: (
        <MenuItem>
          {screenWidth <= 768 ? (
            <>
              <Icon name="clipboard list" />{" "}
              {activeTab === 2 ? "Solicitações" : ""}
            </>
          ) : (
            <>
              <Icon name="clipboard list" />
              Solicitações
            </>
          )}
        </MenuItem>
      ),
      render: () => (
        <Tab.Pane>
          <>
            <Button
              icon
              labelPosition="right"
              color="green"
              onClick={() => {
                setOpenSolicitation(true);
              }}
            >
              Adicionar <Icon name="add" />
            </Button>
            <Button icon labelPosition="right" color="orange" onClick={() => {
                navigate("/coordinator/solicitations");
              }}>
              Voltar <Icon name="arrow left" />
            </Button>

            <TableContainer>
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
          {allProjects.map((project) => (
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
                    color="green"
                    circular
                  >
                    <Icon name="info" />
                  </Button>
                </Button.Group>
              </StyledTableCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
            </TableContainer>
            <Divider horizontal>
              <Header as="h4">
                <Icon name="bar chart" />
                Opções
              </Header>
            </Divider>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: `${screenWidth <= 768 ? "column" : "row"}`,
              }}
            >
              <div>
                <Button.Group>
                  <Button
                    icon
                    labelPosition={screenWidth <= 768 ? "" : "right"}
                    color="green"
                    onClick={() => {
                      setModalData({
                        title: "Salvar",
                        text: "Você tem certeza que deseja salvar as solicitações?",
                        icon: "save",
                        handleOptionSelected: (bool) => {
                          console.log(
                            bool,
                            "Estou salvando solicitações de projeto"
                          );
                        },
                      });
                      modalWrapper(true);
                    }}
                  >
                    {screenWidth <= 768 ? "Salvar" : "Salvar"}{" "}
                    <Icon name="save"></Icon>
                  </Button>
                </Button.Group>
              </div>
            </div>
          </>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <Tab
        menu={{
          size: "huge",
          color: "red",
          inverted: true,
          attached: true,
        }}
        panes={panes}
        defaultActiveIndex={0}
        onTabChange={onTabChange}
      ></Tab>
      <ConfirmationModal
        open={open}
        modalWrapper={modalWrapper}
        text={modalData.text}
        title={modalData.title}
        icon={modalData.icon}
        handleOptionSelected={modalData.handleOptionSelected}
      />
      <ModalSolicitation
        open={openSolicitation}
        setOpen={setOpenSolicitation}
      />
    </>
  );
};

export default FormSolicitations;
