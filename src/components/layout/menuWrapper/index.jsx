import React, { useState } from "react";
import { Image, Menu, Sidebar } from "semantic-ui-react";
import { Container } from "./styles";
import image from "../../../../public/assets/images/user.jpg";

const MenuWrapper = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sideBarVisible, setSideBarVisible] = useState(props.sidebar ?? true);

  return (
    <div style={{ backgroundColor: "#179654" }}>
      <Sidebar.Pushable styles={{ position: "relative" }}>
        <Sidebar
          className="sidebar-top"
          as={Menu}
          animation="overlay"
          direction="top"
          icon="labeled"
          inverted
          horizontal
          visible={sideBarVisible}
          style={{
            backgroundColor: "#0c4c27",
            zIndex: props.optionsMenuVisible ? -1 : 99999,
          }}
        >
          {props.menuItens}
          <Menu.Item style={{justifyContent: 'center'}}>
            <Image size="mini" avatar src={image}></Image>
          </Menu.Item>
        </Sidebar>

        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          inverted
          vertical
          visible={props.optionsMenuVisible}
        >
          <Menu.Item as="a" header>
            Alterar Senha
          </Menu.Item>
          <Menu.Item as="a">Sair</Menu.Item>
          <Menu.Item
            as="a"
            onClick={() => {
              props.showOptions((prev) => !prev);
            }}
          >
            Fechar
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={props.optionsMenuVisible}>
          <Container>{props.children}</Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default MenuWrapper;
