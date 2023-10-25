import React, { useState } from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
import { LoginContainer, LoginTabs } from "./styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  const onSubmit = (data) => {
    console.log("Login as User Type:", activeTab);
    console.log("Form Data:", data);
    if (!data.username || !data.password) {
      toast.error("deve se inserir uma senha ou nome de usuário!");
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
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password");
  };

  return (
    <LoginContainer text>
      <LoginTabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Login como Usuário</Tab>
          <Tab>Login como Administrador</Tab>
          <Tab>Login como Convidado</Tab>
        </TabList>

        <TabPanel>
          <h2>Login como Usuário</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Form.Input type="text" label="Nome de usuário" {...field} />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Form.Input type="password" label="Senha" {...field} />
              )}
            />
            <Button type="submit">Login</Button>
            <Button onClick={handleForgotPassword}>Esqueci a senha</Button>
          </Form>
        </TabPanel>

        <TabPanel>
          <h2>Login como Administrador</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Form.Input type="text" label="Nome de usuário" {...field} />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Form.Input type="password" label="Senha" {...field} />
              )}
            />
            <Button type="submit">Login</Button>
            <Button onClick={handleForgotPassword}>Esqueci a senha</Button>
          </Form>
        </TabPanel>

        <TabPanel>
          <h2>Login como Convidado</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Form.Input type="text" label="Nome completo" {...field} />
              )}
            />
            <Button type="submit">Login</Button>
            <Button onClick={handleForgotPassword}>Esqueci a senha</Button>
          </Form>
        </TabPanel>
      </LoginTabs>
    </LoginContainer>
  );
};

export default Login;
