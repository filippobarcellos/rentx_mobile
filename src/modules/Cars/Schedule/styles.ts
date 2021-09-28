import styled, { css } from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Wrapper = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${getStatusBarHeight() + 18}px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_600};
    font-size: ${theme.fonts.sizes.xlarge};
    color: ${theme.colors.white};
    line-height: 34px;
    margin-top: 24px;
  `}
`;

export const DatesInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

export const Group = styled.View`
  width: 30%;
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
    color: ${theme.colors.white};
    text-transform: uppercase;
  `}
`;

type DateContainerProps = {
  isSelected: boolean;
};

export const DateContainer = styled.View<DateContainerProps>`
  ${({ theme, isSelected }) => css`
    margin-top: 4px;

    border-bottom-width: ${isSelected ? 0 : 1}px;
    border-bottom-color: ${theme.colors.text.text};
    padding-bottom: 5px;
  `}
`;

export const Content = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 24,
  },
})`
  padding-top: 26px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: auto;
  align-items: center;
  justify-content: center;
  padding: 24px 0 ${getBottomSpace()}px 0;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
`;
