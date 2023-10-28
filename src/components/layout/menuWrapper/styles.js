import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background: white;
  margin-left: ${(props) => {
    return `${props.sidebarWidth ?? "0"}px`;
  }};
  padding: 30px;
  flex-direction: column;
`