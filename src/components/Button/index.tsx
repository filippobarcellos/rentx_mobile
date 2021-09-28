import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

interface ButtonProps extends RectButtonProps {
  children: string;
  variant?: "primary" | "secondary" | "dark" | "white";
}

const Button = ({ children, variant = "primary", ...rest }: ButtonProps) => {
  return (
    <S.Container variant={variant} {...rest}>
      <S.Text variant={variant}>{children}</S.Text>
    </S.Container>
  );
};

export default Button;
