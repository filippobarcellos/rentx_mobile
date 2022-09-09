import styled, { css } from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

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

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_600};
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.white};
    margin-top: 7px;
  `}
`;

export const Content = styled.View`
  margin-top: 122px;
  padding: 0 24px;
`;

export const Username = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_600};
    font-size: ${theme.fonts.sizes.large};
    color: #41414d;
    padding-bottom: 32px;
    text-align: center;
  `}
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 24px;
`;

export const BookingText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.primary_400};
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text.text};
  `}
`;

export const BookingTotal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_500};
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text.title};
  `}
`;
