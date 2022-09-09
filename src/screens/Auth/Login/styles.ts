import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text.primary};
  padding: ${getStatusBarHeight() + 32}px 24px 24px 24px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: auto;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_600};
    font-size: ${theme.fonts.sizes.xxlarge};
    color: ${theme.colors.gray};
    margin-top: 48px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.primary_400};
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text.text};
    line-height: 25px;
    max-width: 170px;
    margin: 24px 0 64px 0;
  `}
`;

export const ForgotPasswordButton = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.primary_400};
    font-size: 13px;
    color: ${theme.colors.text.text};
    margin-top: 24px;
  `}
`;
