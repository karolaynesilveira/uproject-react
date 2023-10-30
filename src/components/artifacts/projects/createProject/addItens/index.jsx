import React, { useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  Input,
  Modal,
  TextArea,
} from "semantic-ui-react";

const ModalProduct = ({ open, setOpen }) => {
  const [rubricaOptions, setRubricaOptions] = useState([
    {
      key: "Bens de consumo",
      text: "Bens de consumo",
      value: "Bens de consumo",
    },
    { key: "Serviços", text: "Serviços", value: "Serviços" },
  ]);

  const [unidadeMedidaOptions] = useState([
    { key: "Horas", text: "Horas", value: "Horas" },
    { key: "Kilogramas", text: "Kilogramas", value: "Kilogramas" },
    { key: "Gramas", text: "Gramas", value: "Gramas" },
    { key: "Litros", text: "Litros", value: "Litros" },
  ]);

  const [formData, setFormData] = useState({
    rubrica: "",
    nome: "",
    descricao: "",
    unidadeMedida: "",
    quantidade: "",
    quantidadeReadOnly: "0.00",
    quantidadeEmpenhadaReadOnly: "0.00",
    valorOrcado: "",
    valorEmpenhadoReadOnly: "0.00",
    valorRealizadoReadOnly: "0.00",
    valorSaldoReadOnly: "0.00",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    handleClose();
  };

  const handleRubricaAddition = (e, { value }) => {
    setRubricaOptions((prevState) => [
      { key: value, text: value, value },
      ...prevState,
    ]);
  };

  const handleUnidadeMedidaAddition = (e, { value }) => {
    unidadeMedidaOptions.push({
      key: value,
      text: value,
      value: value,
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Modal.Header>Cadastrar Produto/Serviço</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group>
            <Form.Field
              width={5}
              control={Dropdown}
              label="Rubrica"
              name="rubrica"
              options={rubricaOptions}
              search
              selection
              allowAdditions
              placeholder="Selecionar Rubrica"
              onChange={handleInputChange}
              value={formData.rubrica}
              onAddItem={handleRubricaAddition}
            />
            <Form.Field
              width={12}
              control={Input}
              label="Nome do Produto/Serviço"
              placeholder="Nome do Produto/Serviço"
              name="nome"
              onChange={handleInputChange}
              value={formData.nome}
            />
          </Form.Group>

          <Form.Field
            style={{ resize: "none" }}
            control={TextArea}
            label="Descrição"
            placeholder="Descrição"
            name="descricao"
            onChange={handleInputChange}
            value={formData.descricao}
            rows={5}
          />
          <Form.Group>
            <Form.Field
              width={5}
              control={Dropdown}
              label="Unidade de Medida"
              options={unidadeMedidaOptions}
              search
              selection
              allowAdditions
              placeholder="Selecionar Unidade de Medida"
              name="unidadeMedida"
              onChange={handleInputChange}
              value={formData.unidadeMedida}
              onAddItem={handleUnidadeMedidaAddition}
            />
            <Form.Field
              control={Input}
              width={4}
              label="Quantidade"
              placeholder="Quantidade"
              name="quantidade"
              onChange={handleInputChange}
              value={formData.quantidade}
            />
            <Form.Field
              control={Input}
              width={4}
              label="Quantidade"
              readOnly
              error
              name="quantidadeReadOnly"
              value={formData.quantidadeReadOnly}
            />
            <Form.Field
              control={Input}
              width={4}
              label="Quantidade Empenhada"
              readOnly
              error
              name="quantidadeEmpenhadaReadOnly"
              value={formData.quantidadeEmpenhadaReadOnly}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              width={5}
              control={Input}
              label="Valor Orçado"
              placeholder="Valor Orçado"
              name="valorOrcado"
              onChange={handleInputChange}
              value={formData.valorOrcado}
            />
            <Form.Field
              width={4}
              control={Input}
              label="Valor Empenhado"
              readOnly
              error
              name="valorEmpenhadoReadOnly"
              value={formData.valorEmpenhadoReadOnly}
            />
            <Form.Field
              width={4}
              control={Input}
              label="Valor Realizado"
              readOnly
              error
              name="valorRealizadoReadOnly"
              value={formData.valorRealizadoReadOnly}
            />
            <Form.Field
              width={4}
              control={Input}
              label="Valor Saldo"
              readOnly
              error
              name="valorSaldoReadOnly"
              value={formData.valorSaldoReadOnly}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={handleSubmit}>
          Cadastrar
        </Button>
        <Button color="red" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalProduct;
