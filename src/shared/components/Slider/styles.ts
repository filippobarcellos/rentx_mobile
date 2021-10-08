import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  width: 100%;
`;

export const Group = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: ${Dimensions.get("window").width - 48}px;
  height: 126px;
`;

export const IndexGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 48px;
`;

type IndexProps = {
  active: boolean;
};

export const Index = styled.View<IndexProps>`
  width: 6px;
  height: 6px;
  border-radius: 12px;
  margin-left: 8px;
  background-color: ${({ active }) => (active ? "#41414d" : "#E1E1E8")};
`;
