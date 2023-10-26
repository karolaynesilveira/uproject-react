import styled from 'styled-components';
import background from "../../../../public/assets/images/test_bg.jpg";

export const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  background-color: #ffffff;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  background-image: url('${background}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Center = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 40vw;
  max-width: 40vw;
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
    width: 90vw;
    max-width: 90vw;
  }
}`;


export const Children = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255);
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
