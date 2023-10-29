import { Table } from "semantic-ui-react";
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
