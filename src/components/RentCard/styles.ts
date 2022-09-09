import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css``}
`;

export const Item = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    margin-top: 16px;
    padding: 24px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text.secondary};
  `}
`;

export const RentalInfo = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    margin-top: 8px;
    padding: 24px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text.secondary};
  `}
`;

export const Group = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.View``;

export const TextGroup = styled.View``;

const BaseText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_500};
  `}
`;

export const Brand = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.text.details};
    text-transform: uppercase;
    letter-spacing: 2px;
  `}
`;

export const Name = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text.title};
    margin-top: 6px;
  `}
`;

export const Period = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.text.details};
    text-transform: uppercase;
    letter-spacing: 2px;
  `}
`;

export const Price = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.primary};
    margin-top: 6px;
  `}
`;

export const RentalPeriodLabel = styled(BaseText)``;

export const RentalPeriod = styled(BaseText)``;

export const Image = styled.Image``;
