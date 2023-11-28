import { Form, Table } from "semantic-ui-react";
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

export const StyledTableCell = styled(Table.Cell)`
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 5px;

  .icon {
    font-size: 20px;
    margin-right: 10px;
  }

  .ui.button {
    width: 30%;
    display: flex;
    justify-content: center;
  }
`;