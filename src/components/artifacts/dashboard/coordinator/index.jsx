import React, { useState } from "react";
import { Divider, Icon, Message } from "semantic-ui-react";
import {
  CardContainer,
  CardGroup,
  FixedMessageGroup,
  VistasLabel,
  NaoVistosLabel,
} from "./style";

const CoordinatorHome = () => {
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const [showUnseenMessages, setShowUnseenMessages] = useState(true);
  const [showSeenMessages, setShowSeenMessages] = useState(false);

  const [notificacoes, setNotificacoes] = useState([
    {
      seen: true,
      title: "Aprovação de projeto",
      description: "O projeto #P-232 foi aprovado",
      type: "positive",
      createdAt: "2023-10-10T09:00:00Z",
    },
    {
      seen: true,
      title: "Reprovação de solicitação",
      description: "A solicitação #S-52515 foi reprovada",
      type: "negative",
      createdAt: "2023-10-09T14:30:00Z",
    },
    {
      seen: true,
      title: "Novo membro adicionado",
      description: "Você tem um novo membro na equipe",
      type: "positive",
      createdAt: "2023-10-08T18:45:00Z",
    },
    {
      seen: true,
      title: "Conclusão do projeto",
      description: "O projeto #P-231 foi concluído com sucesso",
      type: "positive",
      createdAt: "2023-10-07T15:20:00Z",
    },
    {
      seen: true,
      title: "Alteração de senha",
      description: "Sua senha foi alterada com sucesso",
      type: "info",
      createdAt: "2023-10-06T12:10:00Z",
    },
    {
      seen: true,
      title: "Nova mensagem",
      description: "Você tem uma nova mensagem de suporte",
      type: "info",
      createdAt: "2023-10-05T11:30:00Z",
    },
    {
      seen: true,
      title: "Atualização de perfil",
      description: "Seu perfil foi atualizado com sucesso",
      type: "info",
      createdAt: "2023-10-04T09:15:00Z",
    },
    {
      seen: true,
      title: "Aprovação de projeto",
      description: "O projeto #P-230 foi aprovado",
      type: "positive",
      createdAt: "2023-10-03T14:45:00Z",
    },
    {
      seen: true,
      title: "Novo comentário",
      description: "Você tem um novo comentário em seu projeto",
      type: "info",
      createdAt: "2023-10-02T17:25:00Z",
    },
    {
      seen: true,
      title: "Conclusão de tarefa",
      description: "A tarefa #T-125 foi concluída com sucesso",
      type: "positive",
      createdAt: "2023-10-01T08:30:00Z",
    },
    {
      seen: true,
      title: "Nova mensagem",
      description: "Você tem uma nova mensagem de suporte",
      type: "info",
      createdAt: "2023-09-30T12:00:00Z",
    },
    {
      seen: true,
      title: "Nova mensagem",
      description: "Você tem uma nova mensagem de suporte",
      type: "info",
      createdAt: "2023-09-29T16:40:00Z",
    },
    {
      seen: true,
      title: "Aprovação de projeto",
      description: "O projeto #P-229 foi aprovado",
      type: "positive",
      createdAt: "2023-09-28T10:20:00Z",
    },
    {
      seen: false,
      title: "Nova mensagem",
      description: "Você tem uma nova mensagem de suporte",
      type: "info",
      createdAt: "2023-09-27T14:15:00Z",
    },
    {
      seen: false,
      title: "Aprovação de projeto",
      description: "O projeto #P-228 foi aprovado",
      type: "positive",
      createdAt: "2023-09-26T11:05:00Z",
    },
    {
      seen: false,
      title: "Reprovação de solicitação",
      description: "A solicitação #S-52516 foi reprovada",
      type: "negative",
      createdAt: "2023-09-25T15:30:00Z",
    },
    {
      seen: false,
      title: "Nova mensagem",
      description: "Você tem uma nova mensagem de suporte",
      type: "info",
      createdAt: "2023-09-24T16:50:00Z",
    },
    {
      seen: false,
      title: "Nova mensagem",
      description: "Você tem uma nova mensagem de suporte",
      type: "info",
      createdAt: "2023-09-23T09:40:00Z",
    },
  ]);

  const toggleUnseenMessages = () => {
    setShowUnseenMessages(!showUnseenMessages);
  };

  const toggleSeenMessages = () => {
    setShowSeenMessages(!showSeenMessages);
  };

  const dismissNotification = (entry) => {
    setNotificacoes((prevNotificacoes) =>
      prevNotificacoes.map((notification) => {
        if (notification === entry) {
          return { ...notification, seen: true };
        }
        return notification;
      })
    );
  };

  const filteredNotificacoes = notificacoes
    .filter((entry) => {
      return (
        (showUnseenMessages && !entry.seen) || (showSeenMessages && entry.seen)
      );
    })
    .sort((a, b) => {
      if (a.seen === b.seen) {
        return 0;
      }
      return a.seen ? 1 : -1;
    });

  const countUnseenMessages = notificacoes.filter(
    (entry) => !entry.seen
  ).length;
  const countSeenMessages = notificacoes.filter((entry) => entry.seen).length;

  const handleDismiss = () => {
    setWelcomeVisible(false);
  };

  return (
    <>
      {welcomeVisible ? (
        <FixedMessageGroup>
          <Message
            positive
            onDismiss={handleDismiss}
            header="Seja bem vindo ao UProject"
          >
            Bem vindo ao UProject!
            <br />A Ferramenta de gestão de recursos dos projetos UDESC.
          </Message>
        </FixedMessageGroup>
      ) : null}

      <FixedMessageGroup>
        <Message negative header="Seja bem-vindo ao UProject">
          <p>Como coordenador de um projeto, você tem a capacidade de:</p>
          <ul>
            <li>Criar novos projetos.</li>
            <li>Solicitar trocas de rubricas.</li>
            <li>Acompanhar o andamento dos seus projetos.</li>
          </ul>
          <p>
            Para começar a explorar, basta utilizar os botões na barra acima!
          </p>
        </Message>
      </FixedMessageGroup>

      <Divider horizontal>Notificações</Divider>

      <div>
        <VistasLabel size="large" color="grey" onClick={toggleSeenMessages}>
          Vistas {countSeenMessages}{" "}
          <Icon fitted name={`${showSeenMessages ? "eye slash" : "eye"}`} />
        </VistasLabel>
        <NaoVistosLabel size="large" color="red" onClick={toggleUnseenMessages}>
          Não vistos {countUnseenMessages}{" "}
          <Icon fitted name={`${showUnseenMessages ? "eye slash" : "eye"}`} />
        </NaoVistosLabel>
      </div>

      <CardContainer>
        {filteredNotificacoes.length > 0 ? (
          filteredNotificacoes.map((entry, index) => (
            <CardGroup key={index}>
              <Message
                onDismiss={() => dismissNotification(entry)}
                negative={entry.type === "negative"}
                positive={entry.type === "positive"}
                info={entry.type === "info"}
                color={!entry.seen ? "" : "blue"}
                icon={
                  entry.type === "positive"
                    ? "clipboard check"
                    : entry.type === "negative"
                    ? "x"
                    : "mail"
                }
                header={entry.title}
                content={
                  entry.description
                }
              />
            </CardGroup>
          ))
        ) : (
          <CardGroup key={"fixed"}>
            <Message
              info
              icon="idea"
              header={
                countUnseenMessages === 0
                  ? "Novas notificações aparecerão aqui!"
                  : "Novas notificações estão disponíveis, clique em 'Não vistos' acima para exibir."
              }
              content={""}
            />
          </CardGroup>
        )}
      </CardContainer>
    </>
  );
};

export default CoordinatorHome;
