import React from "react";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

type BackButtonProps = {
  color?: "black" | "white";
};

const BackButton = ({ color = "black", ...rest }: BackButtonProps) => {
  return (
    <S.Container {...rest}>
      <Feather
        name="chevron-left"
        size={24}
        color={color === "black" ? "#7A7A80" : "#FFFFFF"}
      />
    </S.Container>
  );
};

export default BackButton;
