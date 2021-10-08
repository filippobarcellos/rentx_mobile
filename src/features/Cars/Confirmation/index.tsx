import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { differenceInDays } from "date-fns";
import { Feather } from "@expo/vector-icons";

import Button from "../../../shared/components/Button";
import Slider from "../../../shared/components/Slider";
import Features from "../../../shared/components/Features";

import { useCars } from "../../../shared/context/useCar";

import * as S from "./styles";

const Confirmation = () => {
  const { navigate } = useNavigation();
  const { selectedCar, selectedDates } = useCars();

  const { photos, name, brand, rent } = selectedCar;
  const { start_date, end_date } = selectedDates;

  const rentalPeriod =
    start_date.date &&
    differenceInDays(new Date(end_date.date), new Date(start_date.date));

  const onConfirmRental = () => {
    navigate("Done");
  };

  return (
    <S.Wrapper>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <Slider photos={photos} />
      </S.Header>
      <S.Info>
        <S.Group>
          <S.TextGroup>
            <S.Brand>{brand}</S.Brand>
            <S.Name>{name}</S.Name>
          </S.TextGroup>

          <S.TextGroup>
            <S.Period>day</S.Period>
            <S.Price>$ {rent.price}</S.Price>
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
              <S.Date>{start_date.formatted}</S.Date>
            </S.TextGroup>

            <Feather name="chevron-right" size={18} color="#AEAEB3" />

            <S.TextGroup>
              <S.Text>To</S.Text>
              <S.Date>{end_date.formatted}</S.Date>
            </S.TextGroup>
          </S.DatesInfo>
        </S.DatesContainer>

        <S.Separator />

        <S.TotalPriceContainer>
          <S.TextGroup>
            <S.Text>Total</S.Text>
            <S.SubTotal>
              ${rent.price} x {rentalPeriod} days
            </S.SubTotal>
          </S.TextGroup>
          <S.TotalPrice>$ {rent.price * rentalPeriod}</S.TotalPrice>
        </S.TotalPriceContainer>
      </S.Info>

      <S.Footer>
        <S.ButtonWrapper>
          <Button variant="secondary" onPress={onConfirmRental}>
            Rent
          </Button>
        </S.ButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Confirmation;
