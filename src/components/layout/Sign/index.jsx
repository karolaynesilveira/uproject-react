import React from "react";
import * as S from "./styles";
import logo from "../../../../public/assets/logo/logo.png";
import { Image } from "semantic-ui-react";

const Sign = ({ title, children }) => {
  return (
    <S.Wrapper>
      <S.Center>
        <Image centered="true" src={logo} />
        <br />
        <S.Children>
          <S.SubTitle>{title}</S.SubTitle>
          {children}
        </S.Children>
      </S.Center>
    </S.Wrapper>
  );
};

export default Sign;
