import { Container, Input as SemanticInput } from "semantic-ui-react";
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
  background: #00ff00;
  transform: translate(-50%, -50%);
`;

export const Input = styled(SemanticInput)`
  &&& {
    input {
      border: none;
      border-bottom: 2px solid green;
      border-radius: 0;
      transition: border-color 0.3s, color 0.3s;
      color: green;

      &:focus {
        border-color: lightgreen;
      }

      &::placeholder {
        color: green;
      }
    }
  }

  &.transparent {
    &&& {
      input {
        background: transparent;
      }
    }
  }
`;

export const LoginTab = styled.div`
`;
