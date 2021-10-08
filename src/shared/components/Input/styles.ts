import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;
    padding-left: 24px;
    font-size: ${theme.fonts.sizes.medium};
    font-family: ${theme.fonts.family.primary_400};
    color: ${theme.colors.text.title};
  `}
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.colors.text.primary};

  align-items: center;
  justify-content: center;
`;

export const RightIconWrapper = styled.TouchableOpacity`
  padding-right: 16px;
`;
