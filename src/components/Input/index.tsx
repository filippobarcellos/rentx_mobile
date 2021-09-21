import React from "react";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

const Input = () => {
  return (
    <S.Container>
      <S.IconWrapper>
        <Feather name="mail" color="#DC1637" size={24} />
      </S.IconWrapper>
      <S.Input />
    </S.Container>
  );
};

export default Input;
