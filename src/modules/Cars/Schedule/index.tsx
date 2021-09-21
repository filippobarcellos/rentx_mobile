import React from "react";

import BackButton from "../../../components/BackButton";
import Button from "../../../components/Button";
import Calendar from "../../../components/Calendar";

import ArrowIcon from "../../../assets/icons/ArrowIcon";

import * as S from "./styles";

const Schedule = () => {
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
            <S.DateContainer isSelected={false}>
              <S.Date />
            </S.DateContainer>
          </S.Group>

          <ArrowIcon />

          <S.Group>
            <S.Text>To</S.Text>
            <S.DateContainer isSelected={false}>
              <S.Date />
            </S.DateContainer>
          </S.Group>
        </S.DatesInfo>
      </S.Header>

      <S.Content>
        <Calendar />
      </S.Content>
      <S.Footer>
        <S.ButtonWrapper>
          <Button>Confirm</Button>
        </S.ButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Schedule;
