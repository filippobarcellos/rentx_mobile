import styled, { css } from "styled-components/native";
import { FlatList, RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.text.primary};
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${getStatusBarHeight() + 40}px 16px 30px 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text.text};
  `}
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})``;

export const Item = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 16px;
  padding: 24px;

  width: 100%;
  height: 126px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Group = styled.View``;
export const TextGroup = styled.View`
  margin-top: 20px;
`;

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

export const Image = styled.Image``;
