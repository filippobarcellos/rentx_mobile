import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import DoneIcon from "../../../assets/icons/Done";
import Logo from "../../../assets/icons/Brand";

import * as S from "./styles";

const Done = () => {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      <StatusBar barStyle="light-content" />

      <Logo width={width} />
      <DoneIcon />

      <S.Title>Success</S.Title>
      <S.Description>
        All you need to do now is take your documents to the nearest store and
        collect your car.
      </S.Description>

      <S.ConfirmButton>
        <S.ConfirmText>Ok</S.ConfirmText>
      </S.ConfirmButton>
    </S.Container>
  );
};

export default Done;
