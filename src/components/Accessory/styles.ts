import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 110px;
    height: 92px;
    padding: 16px;
    margin-bottom: 8px;
    background-color: ${theme.colors.text.primary};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text.secondary};

    align-items: center;
    justify-content: center;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_500};
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text.text};
    margin-top: 12px;
  `}
`;
