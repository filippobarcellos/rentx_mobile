import React from "react";
import BackButton from "../BackButton";

import * as S from "./styles";

const cars = [
  {
    id: 1,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
  {
    id: 2,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
  {
    id: 3,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
  {
    id: 4,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
];

const Slider = () => {
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
        <S.Image source={{ uri: cars[0].thumbnail }} />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default Slider;
