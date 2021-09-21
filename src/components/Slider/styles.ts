import styled, { css } from "styled-components/native";
import { FlatList } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export const Container = styled.View`
  width: 100%;
  margin-top: -28px;
`;

// export const List = styled(FlatList).attrs({
//   showsHorizontalScrollIndicator: false,
//   contentContainerStyle: {
//     paddingHorizontal: 16,
//     width: 280,
//     height: 136,
//   },
// })``;

export const ImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  justify-content: center;
  align-items: center;
  height: 126px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 280px;
  height: 126px;
`;

export const Group = styled.View`
  align-self: flex-end;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 48px;
  margin-bottom: 36px;
  margin-right: 24px;
`;

export const Index = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 12px;
  background-color: #41414d;
`;
