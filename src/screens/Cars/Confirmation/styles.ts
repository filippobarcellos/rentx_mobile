import styled, { css } from "styled-components/native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

// General

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  padding: ${getStatusBarHeight() + 18}px 24px 0 24px;
  padding-left: 24px;
`;

// Car Info

export const Info = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 24,
  },
})`
  margin-top: 36px;
`;

export const Group = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

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
    font-size: ${theme.fonts.sizes.large};
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
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.primary};
    margin-top: 6px;
  `}
`;

// Dates

export const DatesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;

export const DateIconWrapper = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const DatesInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-left: 24px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_500};
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.text.text};
    text-transform: uppercase;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.primary_500};
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text.title};
  `}
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text.secondary};
  padding: 0 24px;
  margin: 16px 0;
`;

// Price

export const TotalPriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalPrice = styled(BaseText)`
  ${({ theme }) => css`
    font-size: 24px;
    color: ${theme.colors.green};
  `}
`;

export const SubTotal = styled(Date)`
  margin-top: 8px;
`;

// Footer

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px 0 ${getBottomSpace()}px 0;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
`;
