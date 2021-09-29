import React from "react";
import { StatusBar } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import Button from "../../../components/Button";
import Slider from "../../../components/Slider";
import Accessory from "../../../components/Accessory";

import { RootStackParamList } from "../../../@types/navigation";
import { getAccessoryIcon } from "../../../utils/getAccessoryIcon";

import * as S from "./styles";

const Details = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Details">>();
  const { car } = route.params;

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
        <Slider photos={car.photos} />
      </S.Header>
      <S.Info>
        <S.Group>
          <S.TextGroup>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.TextGroup>

          <S.TextGroup>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>$ {car.rent.price}</S.Price>
          </S.TextGroup>
        </S.Group>

        <S.Features>
          {car.accessories.map(({ type, name }) => (
            <Accessory key={type} icon={getAccessoryIcon(type)} name={name} />
          ))}
        </S.Features>

        <S.Description>{car.about}</S.Description>
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
