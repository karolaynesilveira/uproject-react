import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Form,
  Header,
  Icon,
  Input,
  MenuItem,
  Select,
  Tab,
  Table,
  TextArea,
} from "semantic-ui-react";
import useForm from "../../../../hooks/useForm";
import { CustomForm, TableContainer } from "./styles";
import ConfirmationModal from "../../../layout/confimationModal";
import ModalProduct from "./addItens";
import ModalSolicitation from "./addSolicitation";

const options = [
  { key: "option1", text: "Opção 1", value: "Opção 1" },
  { key: "option2", text: "Opção 2", value: "Opção 2" },
  { key: "option3", text: "Opção 3", value: "Opção 3" },
];

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

const items = [
  {
    descricao: "Item 1",
    rubrica: "Rubrica 1",
    saldo: "R$ 100.00",
    orcamento: "R$ 500.00",
  },
  {
    descricao: "Item 2",
    rubrica: "Rubrica 2",
    saldo: "R$ 200.00",
    orcamento: "R$ 800.00",
  },
  {
    descricao: "Item 1",
    rubrica: "Rubrica 1",
    saldo: "R$ 100.00",
    orcamento: "R$ 500.00",
  },
  {
    descricao: "Item 2",
    rubrica: "Rubrica 2",
    saldo: "R$ 200.00",
    orcamento: "R$ 800.00",
  },
  {
    descricao: "Item 1",
    rubrica: "Rubrica 1",
    saldo: "R$ 100.00",
    orcamento: "R$ 500.00",
  },
  {
    descricao: "Item 2",
    rubrica: "Rubrica 2",
    saldo: "R$ 200.00",
    orcamento: "R$ 800.00",
  },
  {
    descricao: "Item 1",
    rubrica: "Rubrica 1",
    saldo: "R$ 100.00",
    orcamento: "R$ 500.00",
  },
  {
    descricao: "Item 2",
    rubrica: "Rubrica 2",
    saldo: "R$ 200.00",
    orcamento: "R$ 800.00",
  },
  {
    descricao: "Item 1",
    rubrica: "Rubrica 1",
    saldo: "R$ 100.00",
    orcamento: "R$ 500.00",
  },
  {
    descricao: "Item 2",
    rubrica: "Rubrica 2",
    saldo: "R$ 200.00",
    orcamento: "R$ 800.00",
  },
  {
    descricao: "Item 1",
    rubrica: "Rubrica 1",
    saldo: "R$ 100.00",
    orcamento: "R$ 500.00",
  },
  {
    descricao: "Item 2",
    rubrica: "Rubrica 2",
    saldo: "R$ 200.00",
    orcamento: "R$ 800.00",
  },
  // Add more items as needed
];

const solicitacoes = [
  {
    tipoSolicitacao: "Solicitação 1",
    status: "Aprovada",
    dataSolicitacao: "2023-10-15",
    dataRetorno: "2023-11-02",
    valor: 1500.0,
  },
  {
    tipoSolicitacao: "Solicitação 2",
    status: "Pendente",
    dataSolicitacao: "2023-10-20",
    dataRetorno: "2023-11-05",
    valor: 2500.0,
  },
  {
    tipoSolicitacao: "Solicitação 3",
    status: "Rejeitada",
    dataSolicitacao: "2023-10-25",
    dataRetorno: "2023-11-10",
    valor: 800.0,
  },
  {
    tipoSolicitacao: "Solicitação 4",
    status: "Aprovada",
    dataSolicitacao: "2023-10-30",
    dataRetorno: "2023-11-15",
    valor: 3000.0,
  },
];

const FormProjects = () => {
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
  const [openProduct, setOpenProduct] = useState(false);
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
              <Icon name="file alternate" />{" "}
              {activeTab === 0 ? "Informações" : ""}
            </>
          ) : (
            <>
              <Icon name="file alternate" /> Informações
            </>
          )}
        </MenuItem>
      ),
      render: () => (
        <Tab.Pane>
          <CustomForm>
            <Form.Group widths="equal">
              <Form.Field
                size="large"
                control={Input}
                label="Status"
                readOnly
                error
                value={data.status}
              />
              <Form.Field
                size="large"
                control={Input}
                label="Exercício"
                name="exercicio"
                value={data.exercicio}
                onChange={handleChange}
              />
              <Form.Field
                size="large"
                control={Input}
                label="Empenho"
                name="empenho"
                value={data.empenho}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Field
              size="large"
              control={Select}
              label="Categoria do Projeto"
              name="categoriaProjeto"
              options={options}
              value={data.categoriaProjeto}
              onChange={handleChange}
            />
            <Form.Field
              size="large"
              control={Input}
              label="Título"
              name="titulo"
              value={data.titulo}
              onChange={handleChange}
            />
            <Form.Field
              style={{ resize: "none" }}
              rows={3}
              size="large"
              control={TextArea}
              label="Descrição"
              name="descricao"
              value={data.descricao}
              onChange={handleChange}
            />
            <Form.Group widths="equal">
              <Form.Field
                size="large"
                control={Input}
                label="Valor Orçado"
                name="valorOrcado"
                placeholder={"R$ 0.00"}
                value={data.valorOrcado}
                onChange={handleChange}
              />
              <Form.Field
                size="large"
                control={Input}
                label="Empenhado"
                readOnly
                error
                value={`R$ ${data.empenhado}`}
              />
              <Form.Field
                size="large"
                control={Input}
                label="Realizado"
                readOnly
                error
                value={`R$ ${data.realizado}`}
              />
              <Form.Field
                size="large"
                control={Input}
                label="Saldo"
                readOnly
                error
                value={`R$ ${data.saldo}`}
              ></Form.Field>
            </Form.Group>
            <Form.Field
              style={{ resize: "none" }}
              rows={3}
              size="large"
              control={TextArea}
              label="Parecer da Direção"
              readOnly
              error
              name="parecerDirecao"
              value={data.parecerDirecao}
              onChange={handleChange}
            />
            <Divider horizontal>
              <Header as="h4">
                <Icon name="bar chart" />
                Opções
              </Header>
            </Divider>
            <Form.Group>
              <Button
                color="green"
                size="large"
                icon
                labelPosition={screenWidth <= 768 ? "" : "right"}
                onClick={() => {
                  setModalData({
                    title: "Salvar",
                    text: "Você tem certeza que deseja salvar as informações do Projeto?",
                    icon: "save",
                    handleOptionSelected: (bool) => {
                      console.log(bool, "Estou salvando um projeto");
                    },
                  });
                  modalWrapper(true);
                }}
              >
                {screenWidth <= 768 ? "" : "Salvar"} <Icon name="save"></Icon>
              </Button>
              <Button
                color="purple"
                size="large"
                icon
                labelPosition={screenWidth <= 768 ? "" : "right"}
                onClick={() => {
                  setModalData({
                    title: "Enviar",
                    text: "Você tem certeza que deseja enviar o projeto para analise?",
                    icon: "send",
                    handleOptionSelected: (bool) => {
                      console.log(bool, "Estou enviando um projeto");
                    },
                  });
                  modalWrapper(true);
                }}
              >
                {screenWidth <= 768 ? "" : "Enviar"} <Icon name="check"></Icon>
              </Button>
              <Button
                color="orange"
                style={{ marginLeft: "auto" }}
                size="large"
                icon
                labelPosition={screenWidth <= 768 ? "" : "left"}
                onClick={() => {
                  setModalData({
                    title: "Cancelar",
                    text: "Você tem certeza que deseja cancelar a inserção de um projeto?",
                    icon: "close",
                    handleOptionSelected: (bool) => {
                      console.log(bool, "Estou cancelando um projeto");
                    },
                  });
                  modalWrapper(true);
                }}
              >
                {screenWidth <= 768 ? "" : "Cancelar"}{" "}
                <Icon name="close"></Icon>
              </Button>
            </Form.Group>
          </CustomForm>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <MenuItem>
          {screenWidth <= 768 ? (
            <>
              <Icon name="box" /> {activeTab === 1 ? "Produtos e Serviços" : ""}
            </>
          ) : (
            <>
              <Icon name="box" /> Produtos e Serviços
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
                setOpenProduct(true);
              }}
            >
              Adicionar <Icon name="add" />
            </Button>
            <Button icon labelPosition="right" color="red">
              Remover <Icon name="trash" />
            </Button>

            <TableContainer>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Descrição</Table.HeaderCell>
                    <Table.HeaderCell>Rubrica</Table.HeaderCell>
                    <Table.HeaderCell>Saldo</Table.HeaderCell>
                    <Table.HeaderCell>Orçamento</Table.HeaderCell>
                    <Table.HeaderCell>Selecionar</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {items.map((item, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>{item.descricao}</Table.Cell>
                      <Table.Cell>{item.rubrica}</Table.Cell>
                      <Table.Cell>{item.saldo}</Table.Cell>
                      <Table.Cell>{item.orcamento}</Table.Cell>
                      <Table.Cell collapsing>
                        <Input type="checkbox" size="huge" />
                      </Table.Cell>
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
                        text: "Você tem certeza que deseja salvar os itens de um Projeto?",
                        icon: "save",
                        handleOptionSelected: (bool) => {
                          console.log(
                            bool,
                            "Estou salvando itens de um projeto"
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
              <div
                style={{
                  marginLeft: "auto",
                }}
              >
                <Form>
                  <Form.Group>
                    <Form.Field
                      control={Input}
                      label="Total Dotação"
                      placeholder="R$ 0.00"
                    />
                    <Form.Field
                      control={Input}
                      label="Total Produtos e Serviços"
                      placeholder="R$ 0.00"
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </>
        </Tab.Pane>
      ),
    },
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
            <Button icon labelPosition="right" color="red">
              Remover <Icon name="trash" />
            </Button>

            <TableContainer>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Tipo de solicitação</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Data Solicitação</Table.HeaderCell>
                    <Table.HeaderCell>Data retorno</Table.HeaderCell>
                    <Table.HeaderCell>Valor</Table.HeaderCell>
                    <Table.HeaderCell>Selecionar</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {solicitacoes.map((item, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>{item.tipoSolicitacao}</Table.Cell>
                      <Table.Cell>{item.status}</Table.Cell>
                      <Table.Cell>{item.dataSolicitacao}</Table.Cell>
                      <Table.Cell>{item.dataRetorno}</Table.Cell>
                      <Table.Cell>{item.valor}</Table.Cell>
                      <Table.Cell collapsing>
                        <Input type="checkbox" size="huge" />
                      </Table.Cell>
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
      <ModalProduct open={openProduct} setOpen={setOpenProduct} />
      <ModalSolicitation
        open={openSolicitation}
        setOpen={setOpenSolicitation}
      />
    </>
  );
};

export default FormProjects;
