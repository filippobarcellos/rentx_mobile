import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Loading from "../../../components/Loading";

import { listCars } from "../../../services";
import { Car } from "../../../models/Car";

import logo from "../../../assets/Logotipo.png";

import * as S from "./styles";

const List = () => {
  const [cars, setCars] = useState<Car[]>();
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const response = await listCars();
        if (response) {
          setCars(response);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const navigateToDetails = (car: Car) => {
    navigate("Details", { car });
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Image source={logo} />
        <S.TotalCars>Total 12 cars</S.TotalCars>
      </S.Header>
      {isLoading ? (
        <Loading />
      ) : (
        <S.List
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <S.Item key={item.id} onPress={() => navigateToDetails(item)}>
              <S.Group>
                <S.Brand>{item.brand}</S.Brand>
                <S.Name>{item.name}</S.Name>
                <S.TextGroup>
                  <S.Period>day</S.Period>
                  <S.Price>$ {item.rent.price}</S.Price>
                </S.TextGroup>
              </S.Group>
              <S.Image
                source={{ uri: item.thumbnail }}
                style={{ width: 167, height: 85 }}
              />
            </S.Item>
          )}
        />
      )}
    </S.Wrapper>
  );
};

export default List;
