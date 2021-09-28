import React from "react";
import { StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

import Button from "../../../components/Button";
import Slider from "../../../components/Slider";
import BackButton from "../../../components/BackButton";
import Features from "../../../components/Features";

import * as S from "./styles";

const Details = () => {
  return (
    <S.Wrapper>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <BackButton />
      </S.Header>
      <Slider />
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

        <Features />

        <S.DatesContainer>
          <S.DateIconWrapper>
            <Feather name="package" size={26} color="#FFFFFF" />
          </S.DateIconWrapper>

          <S.DatesInfo>
            <S.TextGroup>
              <S.Text>From</S.Text>
              <S.Date>18/08/1990</S.Date>
            </S.TextGroup>

            <Feather name="chevron-right" size={18} color="#AEAEB3" />

            <S.TextGroup>
              <S.Text>To</S.Text>
              <S.Date>18/08/1990</S.Date>
            </S.TextGroup>
          </S.DatesInfo>
        </S.DatesContainer>

        <S.Separator />

        <S.TotalPriceContainer>
          <S.TextGroup>
            <S.Text>Total</S.Text>
            <S.SubTotal>$580 x 3 days</S.SubTotal>
          </S.TextGroup>
          <S.TotalPrice>$ 2.500</S.TotalPrice>
        </S.TotalPriceContainer>
      </S.Info>

      <S.Footer>
        <S.ButtonWrapper>
          <Button variant="secondary">Rent</Button>
        </S.ButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Details;
