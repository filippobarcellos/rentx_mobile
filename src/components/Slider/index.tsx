import React from "react";
import BackButton from "../BackButton";

import * as S from "./styles";

interface SliderProps {
  photos: string[];
}

const Slider = ({ photos }: SliderProps) => {
  return (
    <S.Container>
      <S.Group>
        <BackButton />
        <S.IndexGroup>
          <S.Index />
          <S.Index />
          <S.Index />
          <S.Index />
        </S.IndexGroup>
      </S.Group>
      <S.ImageWrapper>
        <S.Image source={{ uri: photos[0] }} />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default Slider;
