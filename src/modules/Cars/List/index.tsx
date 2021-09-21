import React from "react";
import { Image } from "react-native";

import logo from "../../../assets/Logotipo.png";

import * as S from "./styles";

const cars = [
  {
    id: 1,
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: 120,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
  {
    id: 2,
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: 120,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
  {
    id: 3,
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: 120,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
  {
    id: 4,
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: 120,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
  {
    id: 5,
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: 120,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
  {
    id: 6,
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: 120,
    thumbnail:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png",
  },
];

const List = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <Image source={logo} />
        <S.TotalCars>Total 12 cars</S.TotalCars>
      </S.Header>
      <S.List
        data={cars}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <S.Item key={item.id}>
            <S.Group>
              <S.Brand>{item.brand}</S.Brand>
              <S.Name>{item.name}</S.Name>
              <S.TextGroup>
                <S.Period>day</S.Period>
                <S.Price>$ {item.rent}</S.Price>
              </S.TextGroup>
            </S.Group>
            <S.Image
              source={{ uri: item.thumbnail }}
              style={{ width: 167, height: 85 }}
            />
          </S.Item>
        )}
      />
    </S.Wrapper>
  );
};

export default List;
