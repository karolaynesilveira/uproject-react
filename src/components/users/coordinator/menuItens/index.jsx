import { Icon, Image, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../../public/assets/logo/logo.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CoordinatorMenuItens = ({ options, showOptions }) => {
  const navigate = useNavigate();

  return (
    <>
      <Image
        fluid
        shadow
        style={{ padding: "0.5rem", marginRight: "-1rem", paddingLeft: "1rem" }}
        src={logo}
        size="small"
      ></Image>
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
          navigate("/coordinator/solicitations");
        }}
      >
        <Icon name="boxes" />
        Solicitações
      </Menu.Item>
      <Menu.Item
        as="a"
        onClick={() => {
          navigate("/coordinator/reports");
        }}
      >
        <Icon name="archive" />
        Relatórios
      </Menu.Item>
      <Menu.Item
        as="a"
        onClick={() => {
          navigate("/coordinator/users");
        }}
      >
        <Icon name="users" />
        Usuários
      </Menu.Item>
      <div style={{ marginLeft: "auto" }}>
        <Menu.Item as="a" onClick={() => showOptions((prev) => !prev)}>
          <Icon name="cog" />
          Opções
        </Menu.Item>
      </div>
    </>
  );
};

export default CoordinatorMenuItens;
