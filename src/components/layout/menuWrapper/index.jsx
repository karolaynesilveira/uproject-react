import React, { useEffect, useState } from "react";
import { Menu, Sidebar } from "semantic-ui-react";
import { Container } from "./styles";

const MenuWrapper = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sideBarVisible, setSideBarVisible] = useState(props.sidebar ?? true);
  const [sidebarWidth, setSidebarWidth] = useState(0);


  useEffect(() => {
    const sidebar = document.querySelector(".ui.vertical.menu.left.sidebar");
    if (sidebar) {
      const computedStyle = window.getComputedStyle(sidebar);
      const width = parseFloat(computedStyle.width);
      setSidebarWidth(width);
    }
  }, []);

  return (
    <>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="left"
          icon="labeled"
          inverted
          vertical
          visible={sideBarVisible}
          style={{ backgroundColor: "#0c4c27" }}
        >
          {props.menuItens}
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
            File Permissions
          </Menu.Item>
          <Menu.Item as="a">Share on Social</Menu.Item>
          <Menu.Item as="a">Share by E-mail</Menu.Item>
          <Menu.Item as="a">Edit Permissions</Menu.Item>
          <Menu.Item as="a">Delete Permanently</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={props.optionsMenuVisible}>
          <Container sidebarWidth={sidebarWidth}>{props.children}</Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default MenuWrapper;
