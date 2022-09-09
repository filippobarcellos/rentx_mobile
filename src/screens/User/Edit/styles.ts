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

export const Content = styled.View`
  margin-top: 122px;
  padding: 0 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 32px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.text.secondary};
`;

type OptionProps = {
  isSelected: boolean;
};
export const Option = styled.TouchableOpacity<OptionProps>`
  ${({ theme, isSelected }) => css`
    color: ${isSelected ? "#41414D" : theme.colors.text.details};
    border-bottom-width: ${isSelected ? 2 : 0}px;
    border-bottom-color: ${theme.colors.primary};
  `}
`;

type OptionTextProps = {
  isSelected: boolean;
};

export const OptionText = styled.Text<OptionTextProps>`
  ${({ theme, isSelected }) => css`
    font-family: ${isSelected
      ? theme.fonts.family.secondary_600
      : theme.fonts.family.secondary_400};
    font-size: 20px;
    color: ${isSelected ? "#41414D" : theme.colors.text.details};
    padding-bottom: 16px;
  `}
`;

export const Footer = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
  padding: 24px 0 ${getBottomSpace()}px 0;
  margin-top: auto;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
`;
