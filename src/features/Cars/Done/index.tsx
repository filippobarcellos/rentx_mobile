import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, useWindowDimensions } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";

import DoneIcon from "../../../shared/assets/icons/Done";
import Union from "../../../shared/assets/Union.png";

import * as S from "./styles";

const Done = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const navigateToBookings = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "App",
          },
        ],
      })
    );
  };

  return (
    <S.Container>
      <StatusBar style="light" translucent />

      <Image source={Union} width={width} />
      <DoneIcon />

      <S.Title>Success</S.Title>
      <S.Description>
        All you need to do now is take your documents to the nearest store and
        collect your car.
      </S.Description>

      <S.ConfirmButton onPress={navigateToBookings}>
        <S.ConfirmText>Ok</S.ConfirmText>
      </S.ConfirmButton>
    </S.Container>
  );
};

export default Done;
