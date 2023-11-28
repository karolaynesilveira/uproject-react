import { Form, Table } from "semantic-ui-react";
import styled from "styled-components";

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

export const Filter = styled(Form)`
  display: ${(props) => {
    return props.open ? "visible" : "none";
  }};
  position: absolute !important;
  top: 50px !important;
  left: 0px !important;
  z-index: 1000 !important;
  border: 1px solid black !important;
  padding: 25px !important;
  background-color: white !important;
  border-radius: 5px !important;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) !important;
  max-width: 700px !important;
`;
