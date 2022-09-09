import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  width: 100%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 346px;
  margin-top: -60px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${(props) => props.theme.fonts.secondary_600};
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  max-width: 260px;
  margin-top: -40px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${(props) => props.theme.fonts.primary_500};
  text-align: center;
  line-height: 22px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 40px;
  max-width: 252px;
`;
