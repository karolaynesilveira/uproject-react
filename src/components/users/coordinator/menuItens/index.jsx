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
  style={{
    padding: 2, // Remove padding
    paddingRight: '-10px', // Remove margins
    maxWidth: '200px',
    maxHeight: '75px', 
    background: 'green'// Ensure the image doesn't exceed its container
  }}
  src={logo}
  // size="small"
/>
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
