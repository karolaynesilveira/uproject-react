import React, { Component } from "react";
import { Divider, Message } from "semantic-ui-react";

const FixedMessage = () => (
  <>
    <Message negative header="Seja bem-vindo ao UProject">
      <p>Como coordenador de um projeto, você tem a capacidade de:</p>
      <ul>
        <li>Criar novos projetos.</li>
        <li>Solicitar trocas de rubricas.</li>
        <li>Acompanhar o andamento dos seus projetos.</li>
      </ul>
      <p>Para começar a explorar, basta utilizar os botões na barra acima!</p>
    </Message>
    <Divider horizontal>Notificações</Divider>
  </>
);

class CoordinatorHomeMessage extends Component {
  state = { welcomeVisible: true };

  handleDismiss = () => {
    this.setState({ welcomeVisible: false });
  };

  render() {
    if (this.state.welcomeVisible) {
      return (
        <>
          <Message
            positive
            onDismiss={this.handleDismiss}
            header="Seja bem vindo ao UProject"
          >
            Bem vindo ao UProject!
            <br />A Ferramenta de gestão de recursos dos projetos UDESC.
          </Message>
          <FixedMessage />
        </>
      );
    }

    return (
      <p>
        <FixedMessage />
      </p>
    );
  }
}

export default CoordinatorHomeMessage;
