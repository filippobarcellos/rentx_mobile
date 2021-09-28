import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../../components/Button";
import Slider from "../../../components/Slider";
import Accessory from "../../../components/Accessory";

import AccelerationIcon from "../../../assets/icons/Acceleration";
import PeopleIcon from "../../../assets/icons/People";

import * as S from "./styles";

const Details = () => {
  const { navigate } = useNavigation();

  const navigateToSchedule = () => {
    navigate("Schedule");
  };

  return (
    <S.Wrapper>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <Slider />
      </S.Header>
      <S.Info>
        <S.Group>
          <S.TextGroup>
            <S.Brand>Lamborghini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.TextGroup>

          <S.TextGroup>
            <S.Period>day</S.Period>
            <S.Price>$ 580</S.Price>
          </S.TextGroup>
        </S.Group>

        <S.Features>
          <Accessory name="380 km/h" icon={AccelerationIcon} />
          <Accessory name="380 km/h" icon={PeopleIcon} />
          <Accessory name="380 km/h" icon={AccelerationIcon} />
          <Accessory name="380 km/h" icon={AccelerationIcon} />
          <Accessory name="380 km/h" icon={AccelerationIcon} />
          <Accessory name="380 km/h" icon={AccelerationIcon} />
        </S.Features>

        <S.Description>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </S.Description>
      </S.Info>
      <S.Footer>
        <S.ButtonWrapper>
          <Button onPress={navigateToSchedule}>Rent</Button>
        </S.ButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Details;
