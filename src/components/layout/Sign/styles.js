import styled from "styled-components";
import background from "../../../../public/assets/images/test_bg.jpg";

export const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  background-image: url("${background}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    background-image: none;
  }
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 100px;
  width: 35vw;
  max-width: 35vw;
  height: 100vh;

  @media only screen and (max-width: 1260px) {
    width: 50vw;
    max-width: 50vw;
  }

  @media only screen and (max-width: 960px) {
    width: 60vw;
    max-width: 60vw;
  }

  @media only screen and (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    padding: 10px;
    background-image: url('${background}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}`;

export const Children = styled.div`
  width: 100%;
  padding: 25px;
  border-radius: 15px;
  background-color: #ffffff;
  border: solid green 3px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  padding-bottom: 10px;
  font-family: var(--font-secondary);
  font-weight: 200;
  text-align: center;

  @media only screen and (max-width: 768px) {
    color: #ffffff;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  padding-bottom: 10px;
  font-family: var(--font-secondary);
  font-weight: 200;
`;
