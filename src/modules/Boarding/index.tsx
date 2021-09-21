import React from "react";
import { useWindowDimensions } from "react-native";

import boardingBg from "../../../assets/boarding_bg.png";
import CarIcon from "../../../assets/icons/car.svg";

import { Wrapper, Image, Title, Subtitle } from "./styles";

export default function Boarding() {
  const { width, height } = useWindowDimensions();

  return (
    <Wrapper>
      {/* <CarIcon /> */}

      <Image source={boardingBg} />

      <Title>Alugue um carro de maneira simples e fácil</Title>

      <Subtitle>
        Vários modelos para você dirigir seguro, com conforto e segurança.
      </Subtitle>
    </Wrapper>
  );
}
