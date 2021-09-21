import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.family.secondary_500};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 50px;
  margin-bottom: 16px;
`;

export const DoneIconContainer = styled.View`
  width: 60px;
  height: 66px;
  align-items: center;
  justify-content: center;
  border-width: 8px;
  border-color: ${({ theme }) => theme.colors.shapes.black};
  border-radius: 5px;
`;

export const Description = styled.Text`
  max-width: 240px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.family.primary_400};
  color: ${({ theme }) => theme.colors.text.black};
  line-height: 25px;
  text-align: center;
  margin-bottom: 86px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.shapes.black};
`;

export const ConfirmText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.family.primary_500};
  color: ${({ theme }) => theme.colors.white};
`;
