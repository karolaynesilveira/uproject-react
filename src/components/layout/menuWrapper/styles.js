import styled from "styled-components";

const marginTop = 70;

export const Container = styled.section`
  display: flex;
  width: 100vw;
  min-height: calc(100vh - ${marginTop}px);
  max-height: calc(100vh - ${marginTop}px);
  overflow: none;
  @media (max-width: 768px) {
    overflow: scroll;
  }
  background: white;
  margin-top: ${marginTop}px;
  padding: 30px;
  flex-direction: column;
`;
