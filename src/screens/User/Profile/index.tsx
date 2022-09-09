import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import Avatar from "../../../shared/components/Avatar";
import RentCard from "../../../shared/components/RentCard";

const car = {
  id: "535e8de8-721b-4bac-8b72-7d29be7da467",
  brand: "Audi",
  name: "RS 5 Coupé",
  about:
    "O carro ainda tem sistema de tração nas quatro rodas Quattro com diferencial traseiro esportivo de série. De acordo com a Audi, ele faz o mesmo em 3,8 segundos na Sportback. O carro ainda tem sistema de tração nas quatro rodas Quattro com diferencial traseiro esportivo de série. De acordo com a Audi, ele faz o mesmo em 3,8 segundos na Sportback. O carro ainda tem sistema de tração nas quatro rodas Quattro com diferencial traseiro esportivo de série. De acordo com a Audi, ele faz o mesmo em 3,8 segundos na Sportback.",
  rent: {
    period: "Ao dia",
    price: 120,
  },
  fuel_type: "electric",
  thumbnail:
    "https://storage.googleapis.com/golden-wind/ignite/react-native/thumbnails/1.png",
  accessories: [
    {
      type: "speed",
      name: "250km/h",
    },
    {
      type: "acceleration",
      name: "3.8s",
    },
    {
      type: "turning_diameter",
      name: "800 HP",
    },
    {
      type: "electric_motor",
      name: "Elétrico",
    },
    {
      type: "exchange",
      name: "Auto",
    },
    {
      type: "seats",
      name: "5 pessoas",
    },
  ],
  photos: [
    "https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png",
    "https://storage.googleapis.com/golden-wind/ignite/react-native/images/2.png",
    "https://storage.googleapis.com/golden-wind/ignite/react-native/images/3.png",
  ],
};

import * as S from "./styles";

const Profile = () => {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <S.Header>
        <S.Row>
          <Feather name="edit" size={24} color={theme.colors.text.details} />
          <S.Title>Edit Profile</S.Title>
          <Feather name="power" size={24} color={theme.colors.text.details} />
        </S.Row>
        <Avatar />
      </S.Header>

      <S.Content>
        <S.Username>Filippo Barcellos</S.Username>
        <S.Separator />
        <S.Row>
          <S.BookingText>Rents</S.BookingText>
          <S.BookingTotal>05</S.BookingTotal>
        </S.Row>
        <RentCard car={car} />
      </S.Content>
    </S.Wrapper>
  );
};

export default Profile;
