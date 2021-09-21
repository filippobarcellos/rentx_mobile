import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    font-family: ${theme.fonts.family.primary_500};
    color: ${theme.colors.white};
  `}
`;
