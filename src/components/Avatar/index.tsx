import React from "react";
import { Feather } from "@expo/vector-icons";

import Foto from "../../assets/Foto.png";

import * as S from "./styles";

const Avatar = () => {
  return (
    <S.Container>
      <S.Image source={Foto} />
      <S.ButtonContainer>
        <Feather name="camera" color="#FFFFFF" size={24} />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Avatar;
