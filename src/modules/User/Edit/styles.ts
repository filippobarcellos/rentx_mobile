import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.text.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 232px;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.black};
  padding: ${getStatusBarHeight() + 32}px 24px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  left: 24px;
  top: ${getStatusBarHeight() + 32}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_600};
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.white};
    margin-top: 7px;
  `}
`;
