import React, { useState } from "react";
import { Button, Form, Input, Modal, TextArea } from "semantic-ui-react";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const ModalSolicitation = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    dataSolicitacao: format(
      utcToZonedTime(new Date(), "America/Sao_Paulo"),
      "dd/MM/yyyy HH:mm:ss"
    ),
    item: "",
    quantidadeSolicitada: "",
    saldoQuantidade: "0.00",
    valorTotalSolicitacao: "",
    saldoSolicitacao: "0.00",
    observacao: "",
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
              control={Input}
              label="Data de Solicitação"
              placeholder="Data de Solicitação"
              name="dataSolicitacao"
              onChange={handleInputChange}
              value={formData.dataSolicitacao}
              readOnly
              error
            />
            <Form.Field
              width={12}
              control={Input}
              label="Item"
              placeholder="Item"
              name="item"
              onChange={handleInputChange}
              value={formData.item}
              readOnly
              error
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              width={4}
              control={Input}
              label="Quantidade Solicitada"
              placeholder="Quantidade Solicitada"
              name="quantidadeSolicitada"
              onChange={handleInputChange}
              value={formData.quantidadeSolicitada}
            />
            <Form.Field
              width={4}
              control={Input}
              label="Saldo Quantidade"
              readOnly
              error
              name="saldoQuantidade"
              value={formData.saldoQuantidade}
            />
            <Form.Field
              width={4}
              control={Input}
              label="Valor Total Solicitação"
              placeholder="Valor Total Solicitação"
              name="valorTotalSolicitacao"
              onChange={handleInputChange}
              value={formData.valorTotalSolicitacao}
            />
            <Form.Field
              width={4}
              control={Input}
              label="Saldo Solicitação"
              readOnly
              error
              name="saldoSolicitacao"
              value={formData.saldoSolicitacao}
            />
          </Form.Group>
          <Form.Field
            style={{ resize: "none" }}
            control={TextArea}
            label="Observação"
            placeholder="Observação"
            name="observacao"
            onChange={handleInputChange}
            value={formData.observacao}
            rows={8}
          />
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

export default ModalSolicitation;
