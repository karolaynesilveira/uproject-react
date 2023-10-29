import { Form } from "semantic-ui-react";
import styled from "styled-components";

export const CustomForm = styled(Form)``;

export const TableContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  border-top: solid 5px red;

  height: 500px;
  overflow-y: auto;

  .ui.table thead th {
    position: relative;
    top: 0px;
    background-color: #f8f8f8;
    z-index: 1;
  }
`;
