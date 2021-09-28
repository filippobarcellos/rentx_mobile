import styled, { css, DefaultTheme } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  variant?: "primary" | "secondary" | "dark" | "white";
};

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
  `,
  dark: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray};
  `,
  white: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
  `,
};

export const Container = styled(RectButton)<Props>`
  ${({ theme, variant }) => css`
    width: 100%;
    height: 56px;
    align-items: center;
    justify-content: center;

    ${!!variant && buttonModifiers[variant](theme)};
  `}
`;

export const Text = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-size: ${theme.fonts.sizes.medium};
    font-family: ${theme.fonts.family.primary_500};
    color: ${variant === "white" ? theme.colors.gray : theme.colors.white};
  `}
`;
