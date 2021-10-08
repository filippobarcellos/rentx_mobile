import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BackButton from "../../../shared/components/BackButton";
import Button from "../../../shared/components/Button";
import Calendar from "../../../shared/components/Calendar";

import useIntervalDate from "../../../shared/hooks/useIntervalDates";
import ArrowIcon from "../../../shared/assets/icons/ArrowIcon";
import { useCars } from "../../../shared/context/useCar";

import * as S from "./styles";

const Schedule = () => {
  const { datesInterval, onDateChange, rentalPeriod } = useIntervalDate();

  const startDateFormatted = rentalPeriod?.start_date?.formatted;
  const endDateFormatted = rentalPeriod?.end_date?.formatted;

  const { navigate } = useNavigation();
  const { saveSelectedDates } = useCars();

  const navigateToConfirm = () => {
    if (!startDateFormatted || !endDateFormatted) {
      Alert.alert("Please select a date first");
      return;
    }

    saveSelectedDates(rentalPeriod);
    navigate("Confirmation");
  };

  return (
    <S.Wrapper>
      <S.Header>
        <BackButton color="white" />
        <S.Title>
          Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
        </S.Title>

        <S.DatesInfo>
          <S.Group>
            <S.Text>From</S.Text>
            <S.DateContainer isSelected={!!startDateFormatted}>
              <S.Date>{startDateFormatted}</S.Date>
            </S.DateContainer>
          </S.Group>

          <ArrowIcon />

          <S.Group>
            <S.Text>To</S.Text>
            <S.DateContainer isSelected={!!endDateFormatted}>
              <S.Date>{endDateFormatted}</S.Date>
            </S.DateContainer>
          </S.Group>
        </S.DatesInfo>
      </S.Header>

      <S.Content>
        <Calendar markedDates={datesInterval} onDayPress={onDateChange} />
      </S.Content>

      <S.Footer>
        <S.ButtonWrapper>
          <Button onPress={navigateToConfirm}>Confirm</Button>
        </S.ButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Schedule;
