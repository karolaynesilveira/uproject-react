import React, { useEffect, useState } from "react";
import { Checkbox, Icon, MenuItem, Tab } from "semantic-ui-react";
import { Form, Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Sign from "../../layout/Sign";
import {
  USER_TYPE_ADMINISTRATOR,
  USER_TYPE_COORDINATOR,
  USER_TYPE_VISITOR,
} from "../../../commons/userType";
import { Input, LoginTab } from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [screenWidth, setScreenWidth] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);

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
    setData({ username: "", password: "" });
    setActiveTab(activeTab.activeIndex);
  };

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const callbackSubmit = () => {
    setLoading(true);
    console.log("Login as User Type:", activeTab);
    console.log("Form Data:", data);
    if (!data.username || !data.password) {
      toast.error("Deve-se inserir uma senha ou nome de usuário!");
    } else {
      toast.success("Login efetuado com sucesso!");
      switch (activeTab) {
        case 0: {
          navigate("/coordinator/route");
          break;
        }
        case 1: {
          navigate("/directorate/route");
          break;
        }
        case 2: {
          navigate("/administration/route");
          break;
        }
      }
    }
    setLoading(false);
  };

  const { data, loading, handleChange, setData, setLoading } = useForm(
    callbackSubmit,
    { username: "", password: "" }
  );

  const panes = [
    {
      menuItem: (
        <MenuItem>
          {screenWidth <= 768 ? (
            <>
              <Icon name="user" />
              {activeTab === USER_TYPE_COORDINATOR ? "Coordenador" : ""}
            </>
          ) : (
            "Coordenador"
          )}
        </MenuItem>
      ),
      render: () => (
        <LoginTab>
          <Form onSubmit={callbackSubmit} loading={loading}>
            <Form.Field>
              <Input
                size="huge"
                type="text"
                name="username"
                placeholder="Nome de usuário"
                onChange={handleChange}
                value={data.username}
              />
            </Form.Field>
            <Form.Field>
              <Input
                size="huge"
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Senha"
                onChange={handleChange}
                value={data.password}
                icon={
                  <Icon
                    name={passwordVisible ? "eye slash" : "eye"}
                    onClick={(e) => {
                      e.preventDefault();
                      togglePassword();
                    }}
                  />
                }
                action={
                  <div
                    style={{ width: "50px" }}
                    onClick={(e) => {
                      e.preventDefault();
                      togglePassword();
                    }}
                  />
                }
              />
            </Form.Field>
          </Form>
        </LoginTab>
      ),
    },
    {
      menuItem: (
        <MenuItem>
          {screenWidth <= 768 ? (
            <>
              <Icon name="user md" />
              {activeTab === USER_TYPE_ADMINISTRATOR ? "Administrador" : ""}
            </>
          ) : (
            "Administrador"
          )}
        </MenuItem>
      ),
      render: () => (
        <LoginTab>
          <Form onSubmit={callbackSubmit} loading={loading}>
            <Form.Field>
              <Input
                size="huge"
                type="text"
                name="username"
                placeholder="Nome de usuário"
                onChange={handleChange}
                value={data.username}
              />
            </Form.Field>

            <Form.Field>
              <Input
                size="huge"
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Senha"
                onChange={handleChange}
                value={data.password}
                icon={
                  <Icon
                    name={passwordVisible ? "eye slash" : "eye"}
                    onClick={(e) => {
                      e.preventDefault();
                      togglePassword();
                    }}
                  />
                }
                action={
                  <div
                    style={{ width: "50px" }}
                    onClick={(e) => {
                      e.preventDefault();
                      togglePassword();
                    }}
                  />
                }
              />
            </Form.Field>
          </Form>
        </LoginTab>
      ),
    },
    {
      menuItem: (
        <MenuItem>
          {screenWidth <= 768 ? (
            <>
              <Icon name="user secret" />
              {activeTab === USER_TYPE_VISITOR ? "Visitante" : ""}
            </>
          ) : (
            "Visitante"
          )}
        </MenuItem>
      ),
      render: () => (
        <LoginTab>
          <Form onSubmit={callbackSubmit} loading={loading}>
            <Form.Field>
              <Input
                size="huge"
                type="text"
                name="username"
                placeholder="Nome da Sessão"
                onChange={handleChange}
                value={data.username}
              />
            </Form.Field>
          </Form>
        </LoginTab>
      ),
    },
  ];

  return (
    <>
      <Sign>
        <Tab
          menu={{ secondary: true }}
          panes={panes}
          defaultActiveIndex={0}
          onTabChange={onTabChange}
        />
        <br />
        <Button
          size="large"
          color="green"
          animated
          type="submit"
          onClick={callbackSubmit}
        >
          <Button.Content visible>Entrar</Button.Content>
          <Button.Content className="hidden_element" hidden>
            <Icon
              name={`${
                !data.username || !data.password & (activeTab !== 2)
                  ? "lock"
                  : "arrow right"
              }`}
            />
          </Button.Content>
        </Button>
        {activeTab !== 2 && (
          <Checkbox style={{ left: "5%" }} label="Permanecer conectado" />
        )}
        {activeTab === 2 && (
          <div style={{ marginTop: "15px" }}>
            <Checkbox label="Eu li e aceito os" />
            <Link to="contrato">
              {" "}
              Termos de Uso <span>&#128206;</span>
            </Link>
          </div>
        )}
      </Sign>
    </>
  );
};

export default Login;
