import styled from "styled-components";
import { Card } from "semantic-ui-react";

export const CardContainer = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardGroup = styled(Card.Group)`
  width: 40%;
  min-width: 300px;
`;
