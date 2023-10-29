import styled from "styled-components";
import { Card, Label } from "semantic-ui-react";

export const CardContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: baseline;
  height: max(40vh);
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgba(33, 186, 69, 0.1);
  box-shadow: rgba(33, 186, 69, 0.4) 0px -5px, rgba(33, 186, 69, 0.3) 0px -10px,
    rgba(33, 186, 69, 0.2) 0px -15px, rgba(33, 186, 69, 0.1) 0px -20px,
    rgba(33, 186, 69, 0.05) 0px -25px;

  @media (max-width: 768px) {
    overflow: visible;
    height: 100%;
  }
`;

export const CardGroup = styled(Card.Group)`
  width: 100%;
  overflow: none;
  padding: 35px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 930px) {
    max-width: 475px;
    padding: 30px 30px 00px 30px;
    .message {
      min-height: 100px;
      max-height: 100px;
    }
  }
`;

export const FixedMessageGroup = styled.div`
   padding-bottom: 10px;
`;

export const VistasLabel = styled(Label)`
  margin-top: 10px;
  margin-left: 25px;
  max-width: fit-content;
`;

export const NaoVistosLabel = styled(Label)`
  margin-top: 10px;
  margin-left: 25px;
  max-width: fit-content;
`;
