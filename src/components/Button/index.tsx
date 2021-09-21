import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

interface ButtonProps extends RectButtonProps {
  children: string;
  variant?: string;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};

export default Button;
