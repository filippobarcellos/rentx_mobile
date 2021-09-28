import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

type BackButtonProps = {
  color?: "black" | "white";
};

const BackButton = ({ color = "black", ...rest }: BackButtonProps) => {
  const { goBack } = useNavigation();

  return (
    <S.Container {...rest} onPress={() => goBack()}>
      <Feather
        name="chevron-left"
        size={24}
        color={color === "black" ? "#7A7A80" : "#FFFFFF"}
      />
    </S.Container>
  );
};

export default BackButton;
