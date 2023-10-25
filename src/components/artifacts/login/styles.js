import { Tab, Tabs } from "react-tabs";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

export const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 50vw;
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginTabs = styled(Tabs)`
    background: #ffffff;
    padding: 15px;
` 

export const LoginTab = styled(Tab)`
    background: #10ff10;
` 