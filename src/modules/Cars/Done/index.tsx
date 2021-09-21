import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import DoneIcon from "../../assets/icons/done.svg";
import Logo from "../../assets/images/logo_background.svg";

import {
  ConfirmButton,
  ConfirmText,
  Description,
  Container,
  Title,
} from "./styles";

const Done = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Logo width={width} />
      <DoneIcon />

      <Title>Success</Title>
      <Description>
        All you need to do now is take your documents to the nearest store and
        collect your car.
      </Description>

      <ConfirmButton>
        <ConfirmText>Ok</ConfirmText>
      </ConfirmButton>
    </Container>
  );
};

export default Done;
