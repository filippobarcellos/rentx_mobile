import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  iconRightName?: React.ComponentProps<typeof Feather>["name"];
  showPassword?: boolean;
  onRightIconClick?: () => void;
}

import * as S from "./styles";

const Input = ({
  iconName,
  iconRightName,
  showPassword,
  onRightIconClick,
  ...rest
}: InputProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.IconWrapper>
        <Feather name={iconName} color="#DC1637" size={24} />
      </S.IconWrapper>
      <S.Input {...rest} placeholderTextColor={theme.colors.text.details} />

      {!!iconRightName && (
        <S.RightIconWrapper onPress={onRightIconClick}>
          <Feather
            name={showPassword ? iconRightName : "eye-off"}
            color="#7A7A80"
            size={24}
          />
        </S.RightIconWrapper>
      )}
    </S.Container>
  );
};

export default Input;
