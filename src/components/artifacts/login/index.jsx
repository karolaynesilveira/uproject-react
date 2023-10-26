import React, { useEffect, useState } from "react";
import { Icon, Input, MenuItem, Tab } from "semantic-ui-react";
import { Form, Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Sign from "../../layout/Sign";
import {
  USER_TYPE_ADMINISTRATOR,
  USER_TYPE_COORDINATOR,
  USER_TYPE_VISITOR,
} from "../../../commons/userType";

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
        <Tab.Pane>
          <Form onSubmit={callbackSubmit} loading={loading}>
            <Form.Field>
              <input
                type="text"
                name="username"
                placeholder="Nome de usuário"
                onChange={handleChange}
                value={data.username}
              />
            </Form.Field>
            <Form.Field>
              <Input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Senha"
                onChange={handleChange}
                value={data.password}
                action={{
                  color: "green",
                  icon: passwordVisible ? "eye slash" : "eye",
                  onClick: (e) => {
                    e.preventDefault();
                    togglePassword();
                  },
                }}
                actionPosition="right"
              />
            </Form.Field>
            <Button type="submit" primary>
              Entrar
            </Button>
          </Form>
        </Tab.Pane>
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
        <Tab.Pane>
          <Form onSubmit={callbackSubmit} loading={loading}>
            <Form.Field>
              <input
                type="text"
                name="username"
                placeholder="Nome de usuário"
                onChange={handleChange}
                value={data.username}
              />
            </Form.Field>

            <Form.Field>
              <Input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Senha"
                onChange={handleChange}
                value={data.password}
                action={{
                  color: "green",
                  icon: passwordVisible ? "eye slash" : "eye",
                  onClick: (e) => {
                    e.preventDefault();
                    togglePassword();
                  },
                }}
                actionPosition="right"
              />
            </Form.Field>
            <Button type="submit" primary>
              Entrar
            </Button>
          </Form>
        </Tab.Pane>
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
        <Tab.Pane>
          <Form onSubmit={callbackSubmit} loading={loading}>
            <Form.Field>
              <input
                type="text"
                name="username"
                placeholder="Nome da Sessão"
                onChange={handleChange}
                value={data.username}
              />
            </Form.Field>
            <Button type="submit" primary>
              Entrar
            </Button>
          </Form>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <Sign>
        <Tab panes={panes} defaultActiveIndex={0} onTabChange={onTabChange} />
        <br />
      </Sign>
    </>
  );
};

export default Login;
