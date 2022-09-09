import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Loading from "../../../shared/components/Loading";

import { listCars } from "../../../shared/services";
import { Car } from "../../../shared/models/Car";
import logo from "../../../shared/assets/Logotipo.png";
import { useCars } from "../../../shared/context/useCar";

import * as S from "./styles";

const List = () => {
  const [cars, setCars] = useState<Car[]>();
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();
  const { saveSelectedCar } = useCars();

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
    saveSelectedCar(car);
    navigate("Details");
  };

  return (
    <S.Wrapper>
      <StatusBar style="light" translucent />
      <S.Header>
        <Image source={logo} />
        <S.TotalCars>Total {cars?.length} cars</S.TotalCars>
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
