import React from "react";
import { Car } from "../../models/Car";

import ArrowIcon from "../../../shared/assets/icons/ArrowIcon";

import * as S from "./styles";

type RentCardProps = {
  car: Car;
};

const RentCard = ({ car }: RentCardProps) => {
  return (
    <S.Container>
      <S.Item>
        <S.Group>
          <S.TextGroup>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>

            <S.TextGroup style={{ marginTop: 24 }}>
              <S.Period>day</S.Period>
              <S.Price>$ {car.rent.price}</S.Price>
            </S.TextGroup>
          </S.TextGroup>

          <S.ImageContainer>
            <S.Image
              source={{ uri: car.thumbnail }}
              style={{ width: 168, height: 87 }}
            />
          </S.ImageContainer>
        </S.Group>
      </S.Item>

      <S.RentalInfo>
        <S.Group>
          <S.RentalPeriodLabel>Period</S.RentalPeriodLabel>
          <S.RentalPeriod>08/10/2021</S.RentalPeriod>
          <ArrowIcon />
          <S.RentalPeriod>08/10/2021</S.RentalPeriod>
        </S.Group>
      </S.RentalInfo>
    </S.Container>
  );
};

export default RentCard;
