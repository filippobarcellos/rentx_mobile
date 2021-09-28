import styled, { css } from "styled-components/native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  padding: ${getStatusBarHeight() + 18}px 24px 0 24px;
  flex-direction: row;
`;

export const Info = styled.ScrollView.attrs({
  showVerticalScrollIndication: false,
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

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary_400};
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text.text};
    line-height: 25px;
    margin-top: 24px;
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

export const Features = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text.primary};

  align-items: center;
  justify-content: center;
  padding: 24px 0 ${getBottomSpace()}px 0;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
`;
