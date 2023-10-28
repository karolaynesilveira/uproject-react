import { Icon, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const CoordinatorMenuItens = () => {
  const navigate = useNavigate();

  return (
    <>
      <Menu.Item
        as="a"
        onClick={() => {
          navigate("/coordinator");
        }}
      >
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item
        as="a"
        onClick={() => {
          navigate("/coordinator/projects");
        }}
      >
        <Icon name="clipboard list" />
        Projetos
      </Menu.Item>
      <Menu.Item
        as="a"
        onClick={() => {
          navigate("/coordinator/resources");
        }}
      >
        <Icon name="boxes" />
        Recursos
      </Menu.Item>
      <Menu.Item
        as="a"
        onClick={() => {
          navigate("/coordinator/users");
        }}
      >
        <Icon name="users" />
        Pessoas
      </Menu.Item>
      <Menu.Item as="a">
        <Icon
          name="archive"
          onClick={() => {
            navigate("/coordinator/reports");
          }}
        />
        Relatórios
      </Menu.Item>
      {/* <Menu.Item as="a" onClick={() => setSideMenuVisible(!sideMenuVisible)}>
        <Icon name="cog" />
        Opções
      </Menu.Item> */}
    </>
  );
};

export default CoordinatorMenuItens;
